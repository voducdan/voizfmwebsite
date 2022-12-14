// import react
import { useState, useEffect } from "react";

// import MUI component
import {
  Box,
  Typography,
  Divider,
  Button,
  Radio,
  FormControlLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
} from "@mui/material";

// import others components
import PlaylistThumnail from "../../components/Shared/PlaylistThumbnail";
import { AccessTime, Trash } from "../../components/Icons/index";
// import utils
import { flexStyle } from "../../utils/flexStyle";
import {
  TEXT_STYLE,
  COLORS,
  SCREEN_BREAKPOINTS,
  HEADER_HEIGHT,
  HEADER_HEIGHT_MB,
} from "../../utils/constants";
import useWindowSize from "../../utils/useWindowSize";
import formatDuration from "../../utils/formatDuration";

// import service
import API from "../../services/api";

import { LIMIT_PER_PAGE } from "../../constants/apiParam.constant";
import { isEmpty } from "lodash";
import { checkIsLoggedIn } from "../../helper/login.helper";

function TabPanel(props) {
  const { children, isSm } = props;
  return (
    <Box role="tabpanel">
      <Box
        sx={{
          ...flexStyle("flex-start", "center"),
          columnGap: "10%",
          rowGap: isSm ? "18px" : "40px",
          flexWrap: "wrap",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

const AudioDuration = (props) => {
  const { duration, listened_percent, isSm } = props;
  return (
    <Box
      sx={{
        width: "100%",
        ...flexStyle("space-between", "center"),
      }}
    >
      <Box
        sx={{
          ...flexStyle("flex-start", "center"),
          columnGap: "6px",
        }}
      >
        <AccessTime />
        <Typography
          sx={{
            ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
            color: COLORS.contentIcon,
          }}
        >
          {formatDuration(duration)}
        </Typography>
      </Box>
      <Box
        sx={{
          mr: "5px",
        }}
      >
        <Typography
          sx={{
            ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
            color: COLORS.second,
          }}
        >
          {`???? nghe ${listened_percent}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default function Listening() {
  const api = new API();
  const windowSize = useWindowSize();
  const [audioPage, setAudioPage] = useState(1);
  const [listeningPlaylists, setListeningPlaylists] = useState([]);
  const [deleteList, setDeleteList] = useState([]);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isSelectDeleteAll, setIsSelectDeleteAll] = useState(false);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [singleItemIdToDelete, setSingleItemIdToDelete] = useState(null);
  const [confirmDeleteModalText, setConfirmDeleteModalText] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasLoadMoreAudio, setHasLoadMoreAudio] = useState(true);

  const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

  useEffect(() => {
    fetchListeningPlaylists(audioPage);
  }, [audioPage]);

  const handleLoadMoreAudio = () => {
    const newAudioPage = audioPage + 1;
    setAudioPage(newAudioPage);
  };

  const fetchListeningPlaylists = async (audioPage) => {
    const res = await api.getListeningPlaylists(audioPage, LIMIT_PER_PAGE);
    const data = await res.data.data;
    const expandedListeningList = [...listeningPlaylists, ...data];
    const initDeleteList = expandedListeningList.map((i) => ({
      id: i.playlist.id,
      checked: false,
    }));
    setListeningPlaylists(expandedListeningList);
    setDeleteList(initDeleteList);
    if (isEmpty(data)) {
      setHasLoadMoreAudio(false);
    }
  };

  const handleGoDelete = () => {
    const tmpIsDeleteMode = !isDeleteMode;
    setIsDeleteMode(tmpIsDeleteMode);
  };
  
  const handleSubmitDelete = () => {
    if (!checkIsLoggedIn()) {
      setConfirmDeleteModal(false);
      return;
    }
    let remainItems = null;
    let initDeleteList = null;
    if (singleItemIdToDelete) {
      remainItems = listeningPlaylists.filter(
        (i) => i.playlist.id !== singleItemIdToDelete
      );
      initDeleteList = remainItems.map((i) => ({
        id: i.playlist.id,
        checked: false,
      }));
      handleApiDelete([singleItemIdToDelete]);
      setSingleItemIdToDelete(null);
    } else {
      const selectedItems = deleteList
        .filter((i) => i.checked === true)
        .map((i) => i.id);
      remainItems = listeningPlaylists.filter(
        (i) => !selectedItems.includes(i.playlist.id)
      );
      initDeleteList = remainItems.map((i) => ({
        id: i.playlist.id,
        checked: false,
      }));
      handleApiDelete(selectedItems);
    }
    if (!openSnackbar) {
      setDeleteList(initDeleteList);
      setListeningPlaylists([...remainItems]);
    }
    setIsSelectDeleteAll(false);
    setIsDeleteMode(false);
    handleConfirmDeleteModalClose();
  };

  const handleApiDelete = async (deletedList) => {
    try {
      for (let i of deletedList) {
        const res = await api.deleteListeningPlaylist(i);
        const data = await res.data;
        if (data.error) {
          setOpenSnackbar(true);
          setErrorMessage("X??a playlist kh??ng th??nh c??ng!");
          return;
        }
      }
    } catch (err) {
      setErrorMessage("X??a playlist kh??ng th??nh c??ng!");
      setOpenSnackbar(true);
      console.log(err);
    }
  };

  const handleClickDeleteSingleAudio = (e) => {
    handleConfirmDeleteModalOpen("B???n c?? ch???c ch???n mu???n x??a audio n??y kh??ng?");
    const id = Number(e.currentTarget.id);
    setSingleItemIdToDelete(id);
    e.stopPropagation();
  };

  const handleConfirmDeleteModalClose = () => {
    setConfirmDeleteModal(false);
  };

  const handleConfirmDeleteModalOpen = (content) => {
    setConfirmDeleteModalText(content);
    setConfirmDeleteModal(true);
  };

  const handleSelectAll = (e) => {
    const tmpIsSelectDeleteAll = !isSelectDeleteAll;
    var isCheckAll = false;
    if (tmpIsSelectDeleteAll) {
      isCheckAll = true;
    }
    const tmpDeleteList = deleteList.map((i) => ({
      id: i.id,
      checked: isCheckAll,
    }));
    setDeleteList(tmpDeleteList);
    setIsSelectDeleteAll(tmpIsSelectDeleteAll);
  };

  const handleSelectDeleteItem = (e) => {
    const tmpDeleteList = [...deleteList];
    const id = e.target.value;
    tmpDeleteList[id]["checked"] = !tmpDeleteList[id]["checked"];
    const numCheckItems = tmpDeleteList.filter(
      (i) => i.checked === true
    ).length;
    let isDeleteAll = numCheckItems === deleteList.length ? true : false;

    setIsSelectDeleteAll(isDeleteAll);
    setDeleteList([...tmpDeleteList]);
  };

  const handleDeleteAll = () => {
    const selectedItems = deleteList
      .filter((i) => i.checked === true)
      .map((i) => i.id);
    if (selectedItems.length > 0) {
      handleConfirmDeleteModalOpen(
        "B???n c?? ch???c ch???n mu???n x??a nh???ng audio n??y kh??ng?"
      );
    }
  };

  return (
    <Box
      sx={{
        mt: isSm ? "32px" : "24px",
        bgcolor: COLORS.bg2,
        m: isSm ? "104px 16px 0 16px" : "152px 48px 0 48px",
        p: isSm ? "32px 16px" : "32px",
        boxSizing: "border-box",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
            color: COLORS.white,
            textAlign: "left",
            ...(isSm && { mb: "32px" }),
          }}
        >
          N???i dung ??ang nghe
        </Typography>
        <Box
          sx={{
            ...(!isDeleteMode
              ? flexStyle("flex-end", "center")
              : flexStyle("space-between", "center")),
            mt: "27px",
          }}
        >
          {!isDeleteMode && (
            <Button
              onClick={handleGoDelete}
              sx={{
                ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                color: COLORS.white,
                textTransform: "none",
              }}
              endIcon={<Trash fontSize="small" />}
            >
              X??a t???t c???
            </Button>
          )}
          {isDeleteMode && (
            <FormControlLabel
              control={
                <Radio
                  onClick={handleSelectAll}
                  checked={isSelectDeleteAll}
                  sx={{
                    color: COLORS.placeHolder,
                    pl: 0,
                    "&.Mui-checked": {
                      color: COLORS.second,
                    },
                  }}
                />
              }
              label="Ch???n t???t c???"
              sx={{
                color: COLORS.white,
                ml: 0,
              }}
            />
          )}
          {isDeleteMode && (
            <Button
              onClick={handleDeleteAll}
              sx={{
                ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                color: COLORS.white,
                textTransform: "none",
              }}
            >
              Xo??
            </Button>
          )}
        </Box>
        <Divider
          sx={{
            borderColor: COLORS.blackStroker,
            mt: "13px",
            mb: isSm ? "32px" : "40px",
          }}
        />

        <TabPanel isSm={isSm}>
          {listeningPlaylists.map((i, idx) => (
            <Box
              key={idx}
              sx={{
                width: isSm ? "100%" : "45%",
                ...flexStyle("flex-start", "center"),
              }}
            >
              {isDeleteMode && (
                <Radio
                  checked={deleteList[idx] ? deleteList[idx]["checked"] : false}
                  onClick={handleSelectDeleteItem}
                  value={idx}
                  sx={{
                    color: COLORS.placeHolder,
                    pl: 0,
                    "&.Mui-checked": {
                      color: COLORS.second,
                    },
                  }}
                />
              )}
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <PlaylistThumnail
                  id={i?.last_audio_id}
                  lastDuration={i?.last_duration}
                  name={i?.playlist?.name}
                  src={i?.playlist?.avatar?.thumb_url}
                  authors={i?.playlist?.authors}
                  hasDelete={true}
                  promotion={i?.promotion}
                  isAudio={true}
                  playlistId={i?.playlist?.id}
                  handleConfirmDeleteModalOpen={handleClickDeleteSingleAudio}
                  children={
                    <AudioDuration
                      isSm={isSm}
                      duration={i?.last_duration}
                      listened_percent={i?.listened_percent}
                    />
                  }
                />
              </Box>
            </Box>
          ))}
        </TabPanel>
        {hasLoadMoreAudio && !isEmpty(listeningPlaylists) && (
          <Box
            sx={{
              ...flexStyle("center", "center"),
            }}
          >
            <Button
              onClick={handleLoadMoreAudio}
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
        <Dialog
          open={confirmDeleteModal}
          onClose={handleConfirmDeleteModalClose}
          sx={{
            "& .MuiPaper-root": {
              bgcolor: COLORS.bg1,
              p: "40px 56px",
              boxSizing: "border-box",
              borderRadius: isSm ? "10px" : "30px",
              ...(isSm && { m: "0 16px" }),
            },
          }}
        >
          <DialogTitle
            sx={{
              ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h1),
              color: COLORS.white,
              textAlign: "center",
            }}
          >
            Voiz FM
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              sx={{
                ...TEXT_STYLE.content1,
                color: COLORS.contentIcon,
                textAlign: "center",
              }}
            >
              {confirmDeleteModalText}
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{
              ...flexStyle("center", "center"),
              columnGap: "16px",
            }}
          >
            <Button
              onClick={handleConfirmDeleteModalClose}
              sx={{
                ...TEXT_STYLE.title1,
                color: COLORS.white,
                textTransform: "none",
                borderRadius: "8px",
                maxWidth: "192px",
                width: "calc(50% - 8px)",
                height: "48px",
                bgcolor: COLORS.bg3,
              }}
            >
              H???y
            </Button>
            <Button
              sx={{
                ...TEXT_STYLE.title1,
                color: COLORS.white,
                textTransform: "none",
                borderRadius: "8px",
                maxWidth: "192px",
                width: "calc(50% - 8px)",
                height: "48px",
                bgcolor: COLORS.main,
              }}
              onClick={handleSubmitDelete}
              autoFocus
            >
              ?????ng ??
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
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
