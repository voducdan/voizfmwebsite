// import react
import { useState, useEffect } from "react";

// import next link
import Link from "next/link";

// import MUI component
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Avatar,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// import swiper
import SwiperCore, { Navigation } from "swiper";
import {
  Swiper,
  SwiperSlide,
} from "../../../node_modules/swiper/react/swiper-react.js";

// import others components
import PlaylistThumnail from "../../components/Shared/PlaylistThumbnail";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import { GraphicEQ } from "../../components/Icons/index";

// import utils
import { flexStyle } from "../../utils/flexStyle";
import {
  TEXT_STYLE,
  COLORS,
  SCREEN_BREAKPOINTS,
  DRAWER_WIDTH,
} from "../../utils/constants";
import useWindowSize from "../../utils/useWindowSize";

// import service
import API from "../../services/api";
import { LIMIT_PER_PAGE } from "../../constants/apiParam.constant.js";
import { isEmpty } from "lodash";
import { checkIsLoggedIn } from "../../helper/login.helper.js";

SwiperCore.use([Navigation]);

function TabPanel(props) {
  const { children, value, index, isSm } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box
          sx={{
            p: "40px 0",
            ...flexStyle("flex-start", "center"),
            columnGap: "10%",
            rowGap: isSm ? "18px" : "40px",
            flexWrap: "wrap",
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
}

const PlaylistAudioCount = (props) => {
  const { audioCount, isSm } = props;
  return (
    <Box
      sx={{
        ...flexStyle("flex-start", "center"),
        columnGap: "6px",
      }}
    >
      <GraphicEQ />
      <Typography
        sx={{
          ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
          color: COLORS.contentIcon,
        }}
      >
        {audioCount} audios
      </Typography>
    </Box>
  );
};

const ChannelBookmark = (props) => {
  const { data, isSm, handleBookmarkChannel, windowWidth } = props;
  const playlists = data.playlists;
  const getPlaylistImgWidth = () => {
    const numItemsPerLine = isSm ? 2.5 : 5;
    const spaceBetween = isSm ? 8 : 24;
    const width = windowWidth;
    let innerWidth = width - 43 * 2;
    const spaceToBeSubtracted =
      ((numItemsPerLine - 1) * spaceBetween) / numItemsPerLine;
    if (!isSm) {
      innerWidth -= DRAWER_WIDTH;
    }
    return innerWidth / numItemsPerLine - spaceToBeSubtracted;
  };
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          ...flexStyle("space-between", "flex-start"),
          width: "100%",
          ...(isSm && { columnGap: "8px" }),
        }}
      >
        <Box
          sx={{
            ...flexStyle("flex-start", "center"),
            columnGap: isSm ? "8px" : "16px",
          }}
        >
          <Avatar
            sx={{
              width: isSm ? "32px" : "40px",
              height: isSm ? "32px" : "40px",
            }}
            alt="img"
            src={data.avatar.thumb_url}
          />
          <Typography
            sx={{
              ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.h3),
              color: COLORS.white,
              cursor: "pointer",
            }}
          >
            {data.name}
          </Typography>
          <Link href={`/channels/${data?.id}`}>
            <ChevronRightIcon
              sx={{
                color: COLORS.white,
                cursor: "pointer",
              }}
            />
          </Link>
        </Box>
        <Button
          onClick={() => {
            handleBookmarkChannel(data.id);
          }}
          sx={{
            ...(isSm ? TEXT_STYLE.title3 : TEXT_STYLE.title2),
            ...(isSm && { whiteSpace: "nowrap" }),
            color: COLORS.white,
            borderRadius: "22px",
            height: isSm ? "28px" : "32px",
            width: isSm ? "127px" : "144px",
            textTransform: "none",
            bgcolor: data["is_bookmark"] ? COLORS.bg3 : COLORS.main,
            p: 0,
            ":hover": {
              bgcolor: data["is_bookmark"] ? COLORS.bg3 : COLORS.main,
            },
          }}
          startIcon={data["is_bookmark"] ? <CheckIcon /> : <AddIcon />}
        >
          {data["is_bookmark"] ? "H???y theo d??i" : "Theo d??i"}
        </Button>
      </Box>

      <Swiper
        slidesPerView={isSm ? 2.5 : 5}
        spaceBetween={isSm ? 8 : 24}
        style={{
          marginTop: "10px",
        }}
      >
        {playlists.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{
              height: `${getPlaylistImgWidth()}px`,
            }}
          >
            <Link href={`/play/${item.id}`}>
              <a>
                <Thumbnail
                  style={{ width: "100%", height: "100%", borderRadius: "4px" }}
                  avtSrc={item.avatar.thumb_url}
                  alt={`images ${item.id}`}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

const tabStyle = () => ({
  "&.MuiTab-root": {
    ...TEXT_STYLE.title1,
    color: COLORS.contentIcon,
    textTransform: "none",
    alignItems: "flex-start",
    p: 0,
    minWidth: 0,
    mr: "16px",
  },
  "&.Mui-selected": {
    color: COLORS.white,
  },
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PlaylistBookmark() {
  const api = new API();

  const windowSize = useWindowSize();
  const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

  const [playlistBookmarks, setPlaylistBookmarks] = useState([]);
  const [channelBookmarks, setChannelBookmarks] = useState([]);
  const [playlistPage, setPlaylistPage] = useState(1);
  const [channelPage, setChannelPage] = useState(1);
  const [value, setValue] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasLoadMoreChannel, setHasLoadMoreChannel] = useState(true);
  const [hasLoadMorePlaylist, setHasLoadMorePlaylist] = useState(true);

  const fetchPlaylistBookmarks = async () => {
    try {
      const res = await api.getPlaylistBookmarks(playlistPage, LIMIT_PER_PAGE);
      const data = await res.data.data;
      data.forEach((i) => (i["is_bookmark"] = true));
      setPlaylistBookmarks([...playlistBookmarks, ...data]);
      if (isEmpty(data)) {
        setHasLoadMorePlaylist(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const fetchChannelBookmarks = async () => {
    try {
      const res = await api.getChannelBookmarks(channelPage, LIMIT_PER_PAGE);
      const data = await res.data.data;
      data.forEach((i) => (i["is_bookmark"] = true));
      setChannelBookmarks([...channelBookmarks, ...data]);
      if (isEmpty(data)) {
        setHasLoadMoreChannel(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchChannelBookmarks();
  }, [channelPage])
  

  useEffect(() => {
    fetchPlaylistBookmarks();
  }, [playlistPage]);

  const handleBookmark = (id) => {
    async function bookmarkPlaylist() {
      try {
        if (!checkIsLoggedIn()) return;
        const res = await api.bookmarkPlaylist(id);
        const data = await res.data;
        if (data.error) {
          setOpenSnackbar(true);
          setErrorMessage("????nh d???u playlist kh??ng th??nh c??ng!");
          return;
        }
        const playlistBookmarksTmp = [...playlistBookmarks];
        const playlistId = playlistBookmarksTmp.findIndex((i) => i.id === id);
        // playlistBookmarksTmp[playlistId]['is_bookmark'] = !playlistBookmarksTmp[playlistId]['is_bookmark'];
        playlistBookmarksTmp.splice(playlistId, 1);
        setPlaylistBookmarks([...playlistBookmarksTmp]);
      } catch (err) {
        setErrorMessage("????nh d???u playlist kh??ng th??nh c??ng!");
        setOpenSnackbar(true);
        console.log(err);
      }
    }

    bookmarkPlaylist();
  };

  const handleBookmarkChannel = (id) => {
    async function bookmarkChannel() {
      try {
        if (!checkIsLoggedIn()) return;
        const res = await api.bookmarkChannel(id);
        const data = await res.data;
        if (data.error) {
          setOpenSnackbar(true);
          setErrorMessage("????nh d???u k??nh kh??ng th??nh c??ng!");
          return;
        }
        const channelBookmarksTmp = [...channelBookmarks];
        const channelId = channelBookmarksTmp.findIndex((i) => i.id === id);
        channelBookmarksTmp[channelId]["is_bookmark"] =
          !channelBookmarksTmp[channelId]["is_bookmark"];
        setChannelBookmarks([...channelBookmarksTmp]);
      } catch (err) {
        setErrorMessage("????nh d???u k??nh kh??ng th??nh c??ng!");
        setOpenSnackbar(true);
        console.log(err);
      }
    }
    bookmarkChannel();
  };

  const isDisplayLoadMorePlaylistBtn = hasLoadMorePlaylist && !isEmpty(playlistBookmarks) && (value === 0);
  const isDisplayChannelLoadMoreBtn = hasLoadMoreChannel && !isEmpty(channelBookmarks) && (value === 1);

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography
        sx={{
          ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
          color: COLORS.white,
          textAlign: "left",
          mb: "32px",
        }}
      >
        ????nh d???u
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: COLORS.blackStroker,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          sx={{
            "&.MuiTabs-indicator": {
              bgcolor: COLORS.main,
            },
          }}
        >
          <Tab sx={tabStyle} label="Playlist" {...a11yProps(0)} />
          <Tab sx={tabStyle} label="K??nh" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} isSm={isSm}>
        {playlistBookmarks.map((i) => (
          <PlaylistThumnail
            key={i?.id}
            id={i?.id}
            name={i.name}
            src={i?.avatar?.thumb_url}
            authors={i?.author_string}
            isBookmark={i.is_bookmark}
            hasBookmark={true}
            handleBookmark={handleBookmark}
            promotion={i?.promotion}
            children={
              <PlaylistAudioCount
                isSm={isSm}
                audioCount={i?.playlist_counter?.audios_count}
              />
            }
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1} isSm={isSm}>
        {channelBookmarks.map((i) => (
          <ChannelBookmark
            key={i.id}
            isSm={isSm}
            data={i}
            windowWidth={windowSize.width}
            handleBookmarkChannel={handleBookmarkChannel}
          />
        ))}
      </TabPanel>

      {isDisplayLoadMorePlaylistBtn && (
        <Box
          sx={{
            ...flexStyle("center", "center"),
          }}
        >
          <Button
            onClick={() => setPlaylistPage(playlistPage + 1)}
            sx={{
              textTransform: "none",
              ...TEXT_STYLE.title2,
              color: COLORS.white,
              bgcolor: COLORS.main,
              width: "170px",
              height: "40px",
              borderRadius: "4px",
              mt: "40px",
              ":hover": {
                bgcolor: COLORS.main,
              },
            }}
          >
            T???i th??m
          </Button>
        </Box>
      )}
      {isDisplayChannelLoadMoreBtn && (
        <Box
          sx={{
            ...flexStyle("center", "center"),
            width: "100%",
          }}
        >
          <Button
            onClick={() => setChannelPage(channelPage + 1)}
            sx={{
              textTransform: "none",
              ...TEXT_STYLE.title2,
              color: COLORS.white,
              bgcolor: COLORS.main,
              width: "170px",
              height: "40px",
              borderRadius: "4px",
              mt: "40px",
              ":hover": {
                bgcolor: COLORS.main,
              },
            }}
          >
            T???i th??m
          </Button>
        </Box>
      )}

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
    </Box>
  );
}
