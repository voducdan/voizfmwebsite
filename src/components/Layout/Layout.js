
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setOpen, selectOpenSidebar } from '../../redux/openSidebar';
import { selectAnchorEl, handleCloseSearch } from '../../redux/OpenSearch';
import { selectAudioData } from '../../redux/audio';
import { selectOpenAudioDetail, selectOpenPlayBar, setOpenAudioDetail, setOpenPlayBar } from '../../redux/playAudio';
import { selectIncludeFooter, setFooter } from '../../redux/footer';

import { useRouter } from 'next/router';

import { Provider } from 'react-redux';

import {
    Box
} from '@mui/material';

import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Login from '../../components/Login/Login';
import PlayBar from '../../components/PlayBar/PlayBar';
import SearchModal from '../../components/Search/SearchModal';
import AudioPlay from '../../components/AudioPlay/AudioPlay';

import store from '../../redux/store';

import useWindowSize from '../../utils/useWindowSize';
import { SCREEN_BREAKPOINTS, HEADER_HEIGHT, HEADER_HEIGHT_MB, DRAWER_WIDTH } from '../../utils/constants';

import API from '../../services/api';
import { removeAudioListenings, getAudioListenings } from '../../services/audioListenning';

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
    const openPlaybar = useSelector(selectOpenPlayBar);
    const openAudioDetail = useSelector(selectOpenAudioDetail);
    const openSearchModal = Boolean(anchorEl);
    const dispatch = useDispatch();

    useEffect(() => {
        async function sendTrackingAudio(audioListenings) {
            try {
                await api.trackingAudio(audioListenings);
            }
            catch (err) {
                console.log(err)
            }
        }
        const audioListenings = getAudioListenings();
        if (audioListenings && audioListenings.length > 0) {
            sendTrackingAudio(audioListenings);
            removeAudioListenings();
        }
    }, []);

    useEffect(() => {
        if (Object.keys(audio).length > 0) {
            dispatch(setOpenAudioDetail(true));
            dispatch(setOpenPlayBar(true));
        }
    }, [audio]);

    useEffect(() => {
        if (!isSm && !openSidebar) {
            dispatch(setOpen(true))
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
    }

    return (
        <Box>
            <Login />
            <Header />
            {
                openSearchModal && (
                    <SearchModal />
                )
            }
            <SidebarMenu />

            <Box
                sx={{
                    flexGrow: 1,
                    height: `calc(100% - ${HEADER_HEIGHT})`,
                    marginTop: !isSm ? HEADER_HEIGHT : HEADER_HEIGHT_MB,
                    width: openSidebar ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%',
                    ...((openSidebar && !isSm) && { marginLeft: `${DRAWER_WIDTH}px` }),
                }}
            >
                {children}
            </Box>
            {
                openPlaybar && (
                    <PlayBar />
                )
            }
            {
                openAudioDetail && (
                    <AudioPlay audioFromApi={audio} />
                )
            }
            {includeFooter && <Footer isSm={isSm} />}
        </Box>
    )
}
export default ({ children }) => (
    <Provider store={store}>
        <Layout children={children}>
        </Layout>
    </Provider>
)