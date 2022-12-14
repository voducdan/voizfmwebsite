// import react
import { useState, useEffect, useRef } from "react";

// import next router
import { useRouter } from "next/router";

// import redux
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/user";
import {
  togglePlayAudio,
  setAudioHls,
  selectAudioHls,
} from "../../redux/playAudio";
import { setAudioData, selectAudioData } from "../../redux/audio";
import { selectToken } from "../../redux/token";
import { setCart, setAddToCartFlag } from "../../redux/payment";

// import hls
import Hls from "hls.js";

// import date-fns
import { format } from "date-fns";

// import firebase
import { firebase } from "../../../firebase.config";
import { update, ref, onValue } from "firebase/database";
// import MUI component
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  ListItemText,
  Typography,
  Slider,
  IconButton,
  List,
  ListItem,
  Radio,
  Button,
  Badge,
  Snackbar,
  Alert,
} from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

import {
  COLORS,
  TEXT_STYLE,
  TEXT_STYLE_IMPORTANT,
} from "../../utils/constants";
import { flexStyle } from "../../utils/flexStyle";
import formatDuration from "../../utils/formatDuration";
import { Speed, Clock } from "../Icons";

import RequireDownloadAppModal from "../../components/Shared/RequireDownloadAppModal";

// import services
import API from "../../services/api";
import {
  setAudioListenings,
  getAudioListenings,
} from "../../services/audioListenning";
import { getToken } from "../../services/authentication";

const WallPaper = styled("div")({
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
});

const Widget = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "auto",
  position: "relative",
  ...flexStyle("center", "center"),
  flexDirection: "column",
  rowGap: "20px",
}));

const TinyText = styled(Typography)({
  ...TEXT_STYLE.content2,
  color: COLORS.white,
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: COLORS.bg4,
    width: "auto",
    minWidth: "9px",
    height: "7px",
    padding: "2px",
    fontSize: "5px",
    top: "4px",
    right: "3.5px",
    color: "black",
    borderRadius: "5px",
    fontWeight: 700,
    boxSizing: "unset",
  },
}));

export default function Control(props) {
  const api = new API();
  const router = useRouter();
  const { lastDuration } = router.query;
  const positionFromLastDuration =
    lastDuration !== undefined ? Number(lastDuration) : 0;
  const { audio, nextAudioId, prevAudioId, isSm } = props;
  const theme = useTheme();
  const playBtn = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const audioUrl = useSelector(selectAudioHls);
  const token = useSelector(selectToken);
  const audioData = useSelector(selectAudioData);
  const [position, setPosition] = useState(positionFromLastDuration);
  const [paused, setPaused] = useState(false);
  const [timer, setTimer] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [countDownTimerStr, setCountDownTimer] = useState("");
  const [openTimer, setOpenTimer] = useState(false);
  const [openSpeed, setOpenSpeed] = useState(false);
  const [currentTimer, setCurrentTimer] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(2);
  const [errorMessage, setErrorMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openUpdateRequiredModal, setOpenUpdateRequiredModal] = useState(false);
  const [openUnauthorizedModal, setOpenUnauthorizedModal] = useState(false);
  const [openDownloadAppModal, setOpenDownloadAppModal] = useState(false);
  const media = audio.current;

  useEffect(() => {
    const userRef = ref(firebase, `/users/${user?.uuid}`);
    onValue(userRef, (snapshot) => {
      const changedVal = snapshot.val();
      if (!changedVal) {
        return;
      }
      const tokenPlaying = changedVal.token_playing;
      if (!paused && !tokenPlaying.startsWith(user?.uuid)) {
        setPaused(true);
      }
    });
  }, []);

  useEffect(() => {
    const { lastDuration } = router.query;
    if (lastDuration !== undefined) {
      const positionFromLastDuration = Number(lastDuration);
      media.currentTime = positionFromLastDuration;
    }
    media.addEventListener("timeupdate", (e) => {
      const currentTime = Math.floor(e.target.currentTime);
      if (currentTime <= audioData?.duration) {
        setPosition(currentTime);
        if (currentTime === audioData?.duration) {
          setPaused(true);
        }
      }
    });
  }, [audioData]);

  useEffect(() => {
    const audioId = Number(localStorage.getItem("currAudioId"));
    if (position === audioData.duration) {
      setPaused(true);
      fetchAudioUrl(nextAudioId);
    }
    updateAudioListening(audioId, 1);
    if (checkUserUseVipSubscription()) {
      const audioListenings = getAudioListenings();
      const totalTime = audioListenings.reduce(
        (a, b) => ({
          duration_listening: a.duration_listening + b.duration_listening,
        }),
        { duration_listening: 0 }
      )["duration_listening"];
      const remainingSeconds = user?.user_resource?.remaining_seconds || 0;
      if (totalTime > remainingSeconds) {
        media.pause();
        setPaused(true);
        trackingAudio([
          {
            audio_id: audioId,
            duration_listening: totalTime,
            listen_at: format(new Date(), "yyyy-MM-dd hh:mm:ss"),
            listen_from: "website",
          },
        ]);
        return;
      }
      if (totalTime % 120 === 0) {
        trackingAudio([
          {
            audio_id: audioId,
            duration_listening: 120,
            listen_at: format(new Date(), "yyyy-MM-dd hh:mm:ss"),
            listen_from: "website",
          },
        ]);
      }
    }
  }, [position]);

  useEffect(() => {
    if (!audioUrl) {
      return;
    }
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.attachMedia(media);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(audioUrl);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          media.muted = true;
          const promise = media.play();
          if (promise !== undefined) {
            promise
              .then((_) => {
                media.muted = false;
              })
              .catch((error) => {
                console.log(error);
                dispatch(togglePlayAudio());
                // setPaused(true);
              });
          }
        });
      });
    } else if (media.canPlayType("application/vnd.apple.mpegurl")) {
      media.src = audioUrl;
      media.addEventListener("loadedmetadata", function () {
        media.play();
      });
    }
  }, [audioUrl]);

  useEffect(() => {
    if (paused) {
      if (token) {
        addAudioToListening(audioData.id, position, audioData.playlist.id);
      }
      media.pause();
    } else {
      media.muted = false;
      media.play();
    }
    dispatch(togglePlayAudio());
  }, [paused]);

  useEffect(() => {
    if (timer === null) {
      return;
    }
    setTimeout(() => {
      setPaused(true);
    }, timer * 1000 * 60);
    countDownTimer();
  }, [timer]);

  const trackingAudio = async (data) => {
    try {
      await api.trackingAudio(data);
      removeAudioListenings();
    } catch (err) {
      console.log(err);
    }
  };

  const checkUserUseVipSubscription = () => {
    const currentHour = new Date().getHours();
    const currentMin = new Date().getMinutes();
    if (
      user &&
      user.promotion === "free" &&
      user.user_resource.remaining_seconds > 0 &&
      !audioData.is_purchased &&
      audioData.playlist.promotion === "vip" &&
      (currentHour < 12 ||
        currentHour > 12 ||
        (currentHour === 12 && currentMin > 30))
    ) {
      return true;
    }
    return false;
  };

  const updateAudioListening = (audioId, currentTime) => {
    if (!getToken()) {
      return;
    }
    const audioListenings = getAudioListenings();
    let distinctAudioId = audioListenings.map((i) => i.audio_id);
    let audioIdx = distinctAudioId.indexOf(audioId);
    if (audioIdx !== -1) {
      const copiedAudioListenings = [...audioListenings];
      copiedAudioListenings[audioIdx]["duration_listening"] =
        copiedAudioListenings[audioIdx]["duration_listening"] + currentTime;
      setAudioListenings([...copiedAudioListenings]);
    } else {
      const audioListenning = {
        audio_id: audioId,
        duration_listening: currentTime,
        listen_at: format(new Date(), "yyyy-MM-dd hh:mm:ss"),
        listen_from: "website",
      };
      setAudioListenings([...audioListenings, audioListenning]);
    }
  };

  const handleAddToCart = async (moveToCart = false) => {
    // add to cart store
    const isItemExists =
      cart.length > 0 && cart.some((i) => i.id === playlist.id);
    if (isItemExists && moveToCart) {
      router.push("/cart");
    }
    if (!isItemExists) {
      try {
        const res = await api.addToCart(playlist.id);
        const result = await res.data;
        if (result.code === 0) {
          setErrorMessage(result.error);
          setOpenSnackbar(true);
          setTimeout(() => {
            setOpenSnackbar(false);
          }, 1500);
          return;
        }
        const tmpCart = [...cart, playlist];
        dispatch(setCart(tmpCart));
        dispatch(setAddToCartFlag(1));
        if (moveToCart) {
          router.push("/cart");
        }
      } catch (err) {
        const { status } = err.response;
        if (status === 401) {
          dispatch(setOpenLogin(true));
          return;
        }
        const errList = err.response.data.error;
        if (errList instanceof Object) {
          let errMessage = "";
          for (let e in errList) {
            const key = Object.keys(errList[e])[0];
            const value = errList[e][key];
            errMessage += `${key} ${value} \n`;
          }
          setErrorMessage(errMessage || "???? x???y ra l???i, vui l??ng th??? l???i!");
          setOpenSnackbar(true);
          setTimeout(() => {
            setOpenSnackbar(false);
          }, 1500);
          return;
        }
        setErrorMessage(errList || "???? x???y ra l???i, vui l??ng th??? l???i!");
        setOpenSnackbar(true);
        setTimeout(() => {
          setOpenSnackbar(false);
        }, 1500);
      }
      return;
    }
    setErrorMessage(
      "S???n ph???m ???? ???????c th??m v??o.\n Vui l??ng ki???m tra l???i gi??? h??ng!"
    );
    setOpenSnackbar(true);
    setTimeout(() => {
      setOpenSnackbar(false);
    }, 1500);
  };

  const handleBuyPlaylist = () => {
    handleAddToCart(true);
  };

  const fetchAudioUrl = async (id) => {
    if (!id) {
      return;
    }
    try {
      const resAudioFile = await api.getAudioFile(id);
      const data = await resAudioFile.data.data;
      const resAudio = await api.getAudio(id);
      const audioDataFromApi = await resAudio.data.data;
      dispatch(setAudioHls(data.url));
      dispatch(setAudioData(audioDataFromApi));
    } catch (err) {
      console.log(err);
      const status = err?.response?.status;
      if (status === 400) {
        const errMsg = err?.response?.data?.error;
        if (errMsg && errMsg === "Nghe ti???p s??ch n??y t???i ???ng d???ng Voiz FM") {
          setOpenDownloadAppModal(true);
          return;
        }
        setErrorMessage(
          "Qu?? kh??ch ch??a ????ng k?? d???ch v??? th??nh c??ng. Vui l??ng ki???m tra l???i"
        );
        setOpenUpdateRequiredModal(true);
        return;
      }
      if (status === 401) {
        setErrorMessage("B???n ch??a c?? quy???n truy c???p audio n??y.");
        setOpenUnauthorizedModal(true);
        return;
      }
      setErrorMessage("???? c?? l???i x???y ra, vui l??ng th??? l???i sau!");
      setOpenSnackbar(true);
    }
  };

  const countDownTimer = () => {
    let elapseTime = 0;
    const x = setInterval(function () {
      const timerInSecond = timer * 60 - elapseTime;
      elapseTime++;
      if (timerInSecond < 0) {
        setCountDownTimer("");
        setPaused(true);
        clearInterval(x);
        return;
      }
      setCountDownTimer(formatDuration(timerInSecond));
    }, 1000);
    setIntervalId(x);
  };

  const onPlayClick = () => {
    if (position >= audioData?.duration) return;
    setPaused(!paused);
    dispatch(togglePlayAudio());
    if (paused && user) {
      const updates = {};
      const uniqueToken = user.uuid + new Date().getTime();
      const userKey = "/users/" + user.uuid;
      const postData = { token_playing: uniqueToken };
      updates[userKey] = postData;
      update(ref(firebase), updates)
        .then((val) => console.log(val))
        .catch((err) => console.log(err));
    }
  };

  const handleTimerClick = () => {
    setOpenTimer(true);
  };

  const handleTimerClose = () => {
    setOpenTimer(false);
  };

  const handleSpeedClose = () => {
    setOpenSpeed(false);
  };

  const handleSelectTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const selectedTimer = timerItems[currentTimer]["time"];
    setCountDownTimer("");
    setTimer(selectedTimer);
    setOpenTimer(false);
  };

  const addAudioToListening = async () => {
    try {
      const res = await api.addListeningPlaylists(
        audioData.id,
        position,
        audioData.playlist.id
      );
      const data = await res.data;
      if (data.error) {
        console.log(data.error);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeAudioPosition = (value) => {
    setPosition(value);
    media.currentTime = value;
  };

  const handleChangeSpeedAudio = () => {
    setOpenSpeed(true);
  };

  const handleToggleSpeed = (idx) => {
    setCurrentSpeed(idx);
  };

  const handleSelectSpeed = () => {
    media.playbackRate = speedItems[currentSpeed]["speed"];
    setOpenSpeed(false);
  };

  const handleChangeAudio = (type) => {
    if (type === "next" && nextAudioId) {
      localStorage.setItem("currAudioId", nextAudioId);
      fetchAudioUrl(nextAudioId);
    }
    if (type === "prev" && prevAudioId) {
      localStorage.setItem("currAudioId", prevAudioId);
      fetchAudioUrl(prevAudioId);
    }
  };

  const handleToggleTimer = (idx) => {
    setCurrentTimer(idx);
  };

  const mainIconColor = COLORS.white;

  const timerItems = [
    { time: 0, text: "kh??ng h???n gi???" },
    { time: 5, text: "5 ph??t" },
    { time: 10, text: "10 ph??t" },
    { time: 20, text: "20 ph??t" },
    { time: 30, text: "30 ph??t" },
    { time: 60, text: "60 ph??t" },
  ];
  const speedItems = [
    { speed: 0.5 },
    { speed: 0.75 },
    { speed: 1 },
    { speed: 1.25 },
    { speed: 1.75 },
    { speed: 2 },
  ];

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Widget>
        <Box
          sx={{
            ...flexStyle("center", "center"),
            columnGap: isSm ? "20px" : "36px",
            width: "100%",
          }}
        >
          <Box
            onClick={handleChangeSpeedAudio}
            sx={{
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <StyledBadge badgeContent={`X${speedItems[currentSpeed]["speed"]}`}>
              <Speed />
            </StyledBadge>
            <Typography
              sx={{
                ...TEXT_STYLE.caption10Regular,
                color: COLORS.contentIcon,
                whiteSpace: "nowrap",
                marginTop: "4px",
              }}
            >
              T???c ?????
            </Typography>
          </Box>
          <Dialog
            open={openSpeed}
            onClose={handleSpeedClose}
            sx={{
              "& .MuiDialog-paper": {
                borderRadius: "30px",
                bgcolor: COLORS.bg1,
                width: "512px",
                p: "36px 27px 32px 27px",
                boxSizing: "border-box",
                ...flexStyle("center", "center"),
              },
            }}
          >
            <Box sx={{
              width: "100%",
              height: "100%",
              overflow: isSm ? "auto" : "hidden",
              scrollbarGutter: "stable",
              "::-webkit-scrollbar": {
                width: "4px",
              },

              "::-webkit-scrollbar-button": {
                height: "10px",
              },

              "::-webkit-scrollbar-track": {
                borderRadius: "5px",
              },

              "::-webkit-scrollbar-thumb": {
                background: COLORS.bg3,
                borderRadius: "5px",
              },

              ":hover": {
                overflowY: "auto",
              },
            }}>
              <Typography
                sx={{
                  ...TEXT_STYLE_IMPORTANT.h1,
                  color: COLORS.white,
                  mb: "46px",
                  textAlign: "center",
                }}
              >
                Ch???n t???c ?????
              </Typography>
              <List
                dense
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {speedItems.map((value, idx) => {
                  return (
                    <ListItem
                      key={idx}
                      secondaryAction={
                        <Radio
                          checked={idx === currentSpeed}
                          onChange={() => {
                            handleToggleSpeed(idx);
                          }}
                          value={value.time}
                          sx={{
                            color: "#DADADA",
                            pl: 0,
                            "&.Mui-checked": {
                              color: COLORS.main,
                            },
                          }}
                        />
                      }
                      sx={{
                        p: 0,
                        ...(idx > 0 && {
                          borderTop: `1px solid ${COLORS.blackStroker}`,
                          p: "22px 0",
                        }),
                        ...(idx === 0 && {
                          pb: "22px",
                        }),
                      }}
                    >
                      <ListItemText
                        value={idx}
                        primary={`X${value.speed}`}
                        sx={{
                          ...TEXT_STYLE_IMPORTANT.h3,
                          color: COLORS.bg4,
                        }}
                      />
                    </ListItem>
                  );
                })}
              </List>
              <Box
                sx={{
                  ...flexStyle("center", "center"),
                  columnGap: "16px",
                  width: "100%",
                  mt: "44px",
                }}
              >
                <Button
                  onClick={handleSpeedClose}
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    width: "50%",
                    height: "48px",
                    bgcolor: COLORS.bg3,
                    ...TEXT_STYLE.title1,
                    color: COLORS.white,
                    ":hover": {
                      bgcolor: COLORS.bg3,
                    },
                  }}
                  variant="contained"
                >
                  Hu???
                </Button>
                <Button
                  onClick={handleSelectSpeed}
                  sx={{
                    textTransform: "none",
                    borderRadius: "8px",
                    width: "50%",
                    height: "48px",
                    bgcolor: COLORS.main,
                    ...TEXT_STYLE.title1,
                    color: COLORS.white,
                  }}
                  variant="contained"
                >
                  Ti???p t???c
                </Button>
              </Box>
            </Box>
          </Dialog>
          <IconButton
            aria-label="previous song"
            onClick={() => {
              handleChangeAudio("prev");
            }}
          >
            <SkipPreviousIcon
              sx={{ width: "24px", height: "24px" }}
              htmlColor={mainIconColor}
            />
          </IconButton>
          <IconButton
            sx={{
              border: `1px solid ${COLORS.white}`,
            }}
            aria-label={paused ? "play" : "pause"}
            onClick={onPlayClick}
            ref={playBtn}
          >
            {paused ? (
              <PlayArrowIcon
                sx={{ width: "24px", height: "24px" }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseIcon
                sx={{ width: "24px", height: "24px" }}
                htmlColor={mainIconColor}
              />
            )}
          </IconButton>
          <IconButton
            aria-label="next song"
            onClick={() => {
              handleChangeAudio("next");
            }}
          >
            <SkipNextIcon
              sx={{ width: "24px", height: "24px" }}
              htmlColor={mainIconColor}
            />
          </IconButton>
          <Box
            onClick={handleTimerClick}
            sx={{
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <Clock fill={COLORS.bg4} bgcolor="none" />
            <Typography
              sx={{
                ...TEXT_STYLE.caption10Regular,
                color: COLORS.contentIcon,
                whiteSpace: "nowrap",
                marginTop: "4px",
              }}
            >
              {timer === 0 || countDownTimerStr === ""
                ? "H???n gi???"
                : `${countDownTimerStr}`}
            </Typography>
          </Box>
          <Dialog
            open={openTimer}
            onClose={handleTimerClose}
            sx={{
              "& .MuiDialog-paper": {
                borderRadius: "30px",
                bgcolor: COLORS.bg1,
                width: "512px",
                p: "36px 27px 32px 27px",
                boxSizing: "border-box",
                ...flexStyle("center", "center"),
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                overflowY: isSm ? "auto" : "hidden",
                scrollbarGutter: "stable",
                "::-webkit-scrollbar": {
                  width: "4px",
                },

                "::-webkit-scrollbar-button": {
                  height: "10px",
                },

                "::-webkit-scrollbar-track": {
                  borderRadius: "5px",
                },

                "::-webkit-scrollbar-thumb": {
                  background: COLORS.bg3,
                  borderRadius: "5px",
                },

                ":hover": {
                  overflowY: "auto",
                },
              }}
            >
              <Typography
                sx={{
                  ...TEXT_STYLE_IMPORTANT.h1,
                  color: COLORS.white,
                  mb: "46px",
                  textAlign: "center",
                }}
              >
                H???n gi???
              </Typography>
              <List
                dense
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {timerItems.map((value, idx) => {
                  return (
                    <ListItem
                      key={idx}
                      secondaryAction={
                        <Radio
                          checked={idx === currentTimer}
                          onChange={() => {
                            handleToggleTimer(idx);
                          }}
                          value={value.time}
                          sx={{
                            color: "#DADADA",
                            pl: 0,
                            "&.Mui-checked": {
                              color: COLORS.main,
                            },
                          }}
                        />
                      }
                      sx={{
                        p: 0,
                        ...(idx > 0 && {
                          borderTop: `1px solid ${COLORS.blackStroker}`,
                          p: "22px 0",
                        }),
                        ...(idx === 0 && {
                          pb: "22px",
                        }),
                      }}
                    >
                      <ListItemText
                        value={idx}
                        primary={value.text}
                        sx={{
                          ...TEXT_STYLE_IMPORTANT.h3,
                          color: COLORS.bg4,
                        }}
                      />
                    </ListItem>
                  );
                })}
              </List>
              <Box
                sx={{
                  ...flexStyle("center", "center"),
                  columnGap: "16px",
                  width: "100%",
                  mt: "44px",
                }}
              >
                <Button
                  onClick={handleTimerClose}
                  sx={{
                    borderRadius: "8px",
                    textTransform: "none",
                    width: "50%",
                    height: "48px",
                    bgcolor: COLORS.bg3,
                    ...TEXT_STYLE.title1,
                    color: COLORS.white,
                    ":hover": {
                      bgcolor: COLORS.bg3,
                    },
                  }}
                  variant="contained"
                >
                  Hu???
                </Button>
                <Button
                  onClick={handleSelectTimer}
                  sx={{
                    textTransform: "none",
                    borderRadius: "8px",
                    width: "50%",
                    height: "48px",
                    bgcolor: COLORS.main,
                    ...TEXT_STYLE.title1,
                    color: COLORS.white,
                  }}
                  variant="contained"
                >
                  Ti???p t???c
                </Button>
              </Box>
            </Box>
          </Dialog>
        </Box>
        <Box
          sx={{
            ...flexStyle("center", "center"),
            flexWrap: "wrap",
            columnGap: "10px",
            width: "100%",
            mt: -2,
            p: isSm ? "0 0 0 10px" : "0 25px",
            boxSizing: "border-box",
          }}
        >
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={audioData?.duration}
            onChange={(_, value) => {
              onChangeAudioPosition(value);
            }}
            sx={{
              height: 3,
              position: !isSm ? "absolute" : "relative",
              width: !isSm ? "calc(100% - 150px)" : "100%",
              color: "#CFD1E9",
              "& .MuiSlider-track": {
                color: "#754ADA",
              },
              "& .MuiSlider-thumb": {
                width: 12,
                height: 12,
                color: COLORS.white,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === "dark"
                      ? "rgb(255 255 255 / 16%)"
                      : "rgb(0 0 0 / 16%)"
                  }`,
                },
                "&.Mui-active": {
                  width: 15,
                  height: 15,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 1,
              },
            }}
          />

          <Box
            sx={{
              ...flexStyle("space-between", "center"),
              width: "100%",
            }}
          >
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>{formatDuration(audioData?.duration)}</TinyText>
          </Box>
        </Box>
      </Widget>
      <WallPaper />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => {
          setOpenSnackbar(false);
        }}
      >
        <Alert
          onClose={() => {
            setOpenSnackbar(false);
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
      <Dialog
        open={openUnauthorizedModal}
        onClose={() => {
          setOpenUnauthorizedModal(false);
        }}
        sx={{
          "& .MuiPaper-root": {
            width: isSm ? "95%" : "512px",
            bgcolor: COLORS.bg1,
            m: 0,
            p: "40px 56px",
            boxSizing: "border-box",
            borderRadius: isSm ? "10px" : "30px",
            ...(isSm && { m: "0 16px" }),
          },
        }}
      >
        <DialogContent
          sx={{
            p: 0,
          }}
        >
          <DialogContentText
            sx={{
              ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h1),
              color: COLORS.white,
              textAlign: "center",
              mb: isSm ? "24px" : "32px",
              p: 0,
            }}
          >
            Voiz FM
          </DialogContentText>
          <DialogContentText
            sx={{
              ...TEXT_STYLE.content1,
              color: COLORS.contentIcon,
              textAlign: "center",
              whiteSpace: "pre-line",
              mb: "32px",
            }}
          >
            {errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            ...flexStyle("center", "center"),
          }}
        >
          <Box
            sx={{
              ...flexStyle("center", "center"),
              flexDirection: "column",
              rowGap: "24px",
            }}
          >
            <Button
              onClick={handleBuyPlaylist}
              sx={{
                ...TEXT_STYLE.title1,
                color: COLORS.white,
                textTransform: "none",
                borderRadius: "8px",
                width: isSm ? "168px" : "192px",
                height: "48px",
                bgcolor: COLORS.main,
              }}
              autoFocus
            >
              Mua l??? s??ch
            </Button>
            <Button
              onClick={() => {
                setOpenUnauthorizedModal(false);
              }}
              sx={{
                ...TEXT_STYLE.content1,
                color: COLORS.contentIcon,
                textTransform: "none",
              }}
            >
              B??? qua
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openUpdateRequiredModal}
        onClose={() => {
          setOpenUpdateRequiredModal(false);
        }}
        sx={{
          "& .MuiPaper-root": {
            width: isSm ? "95%" : "512px",
            bgcolor: COLORS.bg1,
            m: 0,
            p: "40px 56px",
            boxSizing: "border-box",
            borderRadius: isSm ? "10px" : "30px",
            ...(isSm && { m: "0 16px" }),
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            ...flexStyle("center", "center"),
            mb: isSm ? "24px" : "32px",
          }}
        >
          <img
            style={{
              width: isSm ? "134px" : "108px",
              height: isSm ? "134px" : "108px",
            }}
            src="/images/upgrade.png"
            alt="upgrade img"
          />
        </Box>
        <DialogContent
          sx={{
            p: 0,
          }}
        >
          <DialogContentText
            sx={{
              ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h1),
              color: COLORS.white,
              textAlign: "center",
              mb: "24px",
              p: 0,
            }}
          >
            N??ng c???p ngay
          </DialogContentText>
          <DialogContentText
            sx={{
              ...TEXT_STYLE.content1,
              color: COLORS.contentIcon,
              textAlign: "center",
              whiteSpace: "pre-line",
              mb: "32px",
            }}
          >
            {errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            ...flexStyle("center", "center"),
          }}
        >
          <Box
            sx={{
              ...flexStyle("center", "center"),
              flexDirection: "column",
              rowGap: "24px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                ...flexStyle("center", "center"),
                columnGap: "16px",
              }}
            >
              <Button
                onClick={handleBuyPlaylist}
                sx={{
                  ...TEXT_STYLE.title1,
                  color: COLORS.white,
                  textTransform: "none",
                  borderRadius: "8px",
                  width: isSm ? "168px" : "192px",
                  height: "48px",
                  bgcolor: COLORS.bg1,
                  border: `1px solid ${COLORS.blackStroker}`,
                  width: "50%",
                }}
                autoFocus
              >
                Mua l??? s??ch
              </Button>
              <Button
                onClick={() => {
                  router.push("/up-vip");
                }}
                sx={{
                  ...TEXT_STYLE.title1,
                  color: COLORS.white,
                  textTransform: "none",
                  borderRadius: "8px",
                  width: isSm ? "168px" : "192px",
                  height: "48px",
                  bgcolor: COLORS.main,
                  width: "50%",
                }}
                autoFocus
              >
                ????ng k?? g??i
              </Button>
            </Box>
            <Button
              onClick={() => {
                setOpenUpdateRequiredModal(false);
              }}
              sx={{
                ...TEXT_STYLE.content1,
                color: COLORS.contentIcon,
                textTransform: "none",
              }}
            >
              B??? qua
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
      <RequireDownloadAppModal
        isSm={isSm}
        router={router}
        openDonwloadAppModal={openDownloadAppModal}
        setOpenDonwloadAppModal={setOpenDownloadAppModal}
      />
    </Box>
  );
}
