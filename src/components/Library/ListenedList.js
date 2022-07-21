// import react
import { useState, useEffect } from "react";

// import redux
import { useDispatch } from "react-redux";

// import MUI component
import { Box, Tabs, Tab, Typography, Button } from "@mui/material";

// import others components
import PlaylistThumnail from "../../components/Shared/PlaylistThumbnail";
import { GraphicEQ, AccessTime } from "../../components/Icons/index";

// import utils
import { flexStyle } from "../../utils/flexStyle";
import { TEXT_STYLE, COLORS, SCREEN_BREAKPOINTS } from "../../utils/constants";
import useWindowSize from "../../utils/useWindowSize";
import formatDuration from "../../utils/formatDuration";

// import service
import API from "../../services/api";
import { LIMIT_PER_PAGE } from "../../constants/apiParam.constant";
import { isEmpty } from "lodash";

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

const AudioDuration = (props) => {
  const { duration, isSm } = props;
  return (
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

export default function PlaylistHistory() {
  const api = new API();
  const windowSize = useWindowSize();
  const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

  const [playlistHistories, setPlaylistHistories] = useState([]);
  const [audioHistories, setAudioHistories] = useState([]);
  const [value, setValue] = useState(0);
  const [audioPage, setAudioPage] = useState(1);
  const [playlistPage, setPlaylistPage] = useState(1);
  const [hasLoadMoreAudio, setHasLoadMoreAudio] = useState(true);
  const [hasLoadMorePlaylist, setHasLoadMorePlaylist] = useState(true);

  useEffect(() => {
    if (value === 0) {
      fetchPlaylistHistories(playlistPage);
    }
  }, [value, playlistPage]);

  useEffect(() => {
    if (value === 1) {
      fetchAudioHistories(audioPage);
    }
  }, [value, audioPage]);

  const fetchAudioHistories = async (audioPage) => {
    try {
      const res = await api.getAudioHistory(audioPage, LIMIT_PER_PAGE);
      const data = await res.data.data;
      setAudioHistories([...audioHistories, ...data]);
      if (data.length < 10) {
        setHasLoadMoreAudio(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPlaylistHistories = async (playlistPage) => {
    try {
      const res = await api.getPlaylistHistory(playlistPage, LIMIT_PER_PAGE);
      const data = await res.data.data;
      setPlaylistHistories([...playlistHistories, ...data]);
      if (data.length < 10) {
        setHasLoadMorePlaylist(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLoadMoreAudio = () => {
    const newAudioPage = audioPage + 1;
    setAudioPage(newAudioPage);
  };

  const handleLoadMorePlaylist = () => {
    const newPlaylistPage = playlistPage + 1;
    setPlaylistPage(newPlaylistPage);
  };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const isDisplayLoadMorePlaylistBtn = hasLoadMorePlaylist && !isEmpty(playlistHistories) && (value === 0);
  const isDisplayAudioLoadMoreBtn = hasLoadMoreAudio && !isEmpty(audioHistories) && (value === 1);

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
        Lịch sử nghe
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: COLORS.blackStroker }}>
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="tabs"
          sx={{
            "&.MuiTabs-indicator": {
              bgcolor: COLORS.main,
            },
          }}
        >
          <Tab sx={tabStyle} label="Playlist" {...a11yProps(0)} />
          <Tab sx={tabStyle} label="Audio" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} isSm={isSm}>
        {playlistHistories.map((i) => (
          <PlaylistThumnail
            key={i?.id}
            id={i?.id}
            name={i.name}
            src={i?.avatar?.thumb_url}
            authors={i?.authors}
            promotion={i?.promotion}
            children={
              <PlaylistAudioCount
                isSm={isSm}
                promotion={i?.promotion}
                audioCount={i?.playlist_counter?.audios_count}
              />
            }
          />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1} isSm={isSm}>
        {audioHistories.map((i) => (
          <PlaylistThumnail
            key={i?.id}
            id={i?.id}
            name={i.name}
            src={i?.avatar?.thumb_url}
            authors={i?.author?.name}
            hasBookmark={false}
            promotion={i?.promotion}
            isAudio={true}
            playlistId={i?.playlist?.id}
            children={<AudioDuration isSm={isSm} duration={i?.duration} />}
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
            onClick={handleLoadMorePlaylist}
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
            Tải thêm
          </Button>
        </Box>
      )}
      {isDisplayAudioLoadMoreBtn && (
        <Box
          sx={{
            ...flexStyle("center", "center"),
            width: "100%",
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
            Tải thêm
          </Button>
        </Box>
      )}
    </Box>
  );
}
