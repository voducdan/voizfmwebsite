// import next
import Head from "next/head";

import { useEffect, useState } from "react";

import Cookies from "universal-cookie";

import { useSelector, useDispatch } from "react-redux";

import { setOpen, selectOpenSidebar } from "../../redux/openSidebar";
import { selectAnchorEl, handleCloseSearch } from "../../redux/OpenSearch";
import { selectAudioData } from "../../redux/audio";
import {
  selectOpenAudioDetail,
  selectOpenPlayBar,
  setOpenAudioDetail,
  setOpenPlayBar,
} from "../../redux/playAudio";
import { selectIncludeFooter, setFooter } from "../../redux/footer";

import { useRouter } from "next/router";

import { Provider } from "react-redux";

import { Box } from "@mui/material";

import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/Login/Login";
import PlayBar from "../../components/PlayBar/PlayBar";
import SearchModal from "../../components/Search/SearchModal";
import AudioPlay from "../../components/AudioPlay/AudioPlay";

import store from "../../redux/store";

import useWindowSize from "../../utils/useWindowSize";
import {
  SCREEN_BREAKPOINTS,
  HEADER_HEIGHT,
  HEADER_HEIGHT_MB,
  DRAWER_WIDTH,
} from "../../utils/constants";

import API from "../../services/api";
import { getToken } from "../../services/authentication";
import {
  removeAudioListenings,
  getAudioListenings,
} from "../../services/audioListenning";
import {
  getFooterCategoryList,
  setFooterCategoryList,
} from "../../redux/footerCategoryList";
import { get, map, reduce, size } from "lodash";
import { CATEGORIES_LEVEL1 } from "../../constants/categories.constant";

function Layout(props) {
  const api = new API();
  const { children } = props;
  const location = useRouter();

  let windowSize = useWindowSize();
  const isSm = windowSize.width > SCREEN_BREAKPOINTS.sm ? false : true;
  const openSidebar = useSelector(selectOpenSidebar);
  const includeFooter = useSelector(selectIncludeFooter);
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorSearchElId = useSelector(selectAnchorEl);
  const audio = useSelector(selectAudioData);
  const openPlayBar = useSelector(selectOpenPlayBar);
  const openAudioDetail = useSelector(selectOpenAudioDetail);
  const openSearchModal = Boolean(anchorEl);
  const dispatch = useDispatch();
  const cookies = new Cookies();

  useEffect(() => {
    async function sendTrackingAudio(audioListenings) {
      try {
        await api.trackingAudio(audioListenings);
      } catch (err) {
        console.log(err);
      }
    }
    const audioListenings = getAudioListenings();
    if (audioListenings && audioListenings.length > 0) {
      sendTrackingAudio(audioListenings);
      removeAudioListenings();
    }

    // set cookies if localstorage exists
    const tokenFromLocalStorage = getToken();
    cookies.set("token", tokenFromLocalStorage);
    Promise.all(
      map(CATEGORIES_LEVEL1, async (category) => {
        const code = get(category, "code");
        const res = await api.getCategories(code);
        return { code, data: res.data.code ? res.data.data : [] };
      })
    ).then((values) => {
      const newFooterCategoryList = reduce(
        values,
        (result, value) =>
          value.code ? { ...result, [value.code]: [...value.data] } : result,
        {}
      );
      dispatch(setFooterCategoryList(newFooterCategoryList));
    });
  }, []);

  useEffect(() => {
    if (Object.keys(audio).length > 0) {
      dispatch(setOpenAudioDetail(true));
      dispatch(setOpenPlayBar(true));
    }
  }, [audio]);

  useEffect(() => {
    if (!isSm && !openSidebar) {
      dispatch(setOpen(true));
    }
  }, [isSm, openSidebar]);

  useEffect(() => {
    dispatch(setFooter(true));
    dispatch(handleCloseSearch());
    dispatch(setOpenAudioDetail(false));
  }, [location.asPath]);

  useEffect(() => {
    getSearchAnchorEl();
  }, [anchorSearchElId]);

  const getSearchAnchorEl = () => {
    const el = document.getElementById(anchorSearchElId);
    setAnchorEl(el);
  };
  return (
    <Box
      sx={{
        ...(openPlayBar && {
          mb: isSm ? "300px" : "120px",
        }),
      }}
    >
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" sizes="16x16" href="/images/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="S??ch n??i b??n ch???y. ?????c truy???n ????m khuya. Tin t???c h??ng ng??y. Podcast h???u ??ch. C???p nh???t th?????ng xuy??n."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />

        <link rel="manifest" href="/manifest.json" />

        <title>
          S??ch n??i & Podcast Ch???t l?????ng cao. 100% B???n quy???n | Voiz FM
        </title>
      </Head>
      {(location.asPath === "/privacy" || location.asPath === "/term") && (
        <Box>{children}</Box>
      )}
      {location.asPath !== "/privacy" && location.asPath !== "/term" && (
        <Box>
          <Login />
          <Header />
          {openSearchModal && <SearchModal />}
          <SidebarMenu />

          <Box
            sx={{
              flexGrow: 1,
              height: `calc(100% - ${HEADER_HEIGHT})`,
              marginTop: !isSm ? HEADER_HEIGHT : HEADER_HEIGHT_MB,
              width: openSidebar ? `calc(100% - ${DRAWER_WIDTH}px)` : "100%",
              ...(openSidebar && !isSm && { marginLeft: `${DRAWER_WIDTH}px` }),
            }}
          >
            {children}
          </Box>
          {openPlayBar && <PlayBar />}
          {openAudioDetail && <AudioPlay audioFromApi={audio} />}
          {includeFooter && <Footer isSm={isSm} />}
        </Box>
      )}
    </Box>
  );
}
export default ({ children }) => (
  <Provider store={store}>
    <Layout children={children}></Layout>
  </Provider>
);
