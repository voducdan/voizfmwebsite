
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setOpen, selectOpenSidebar } from '../../redux/openSidebar';
import { selectAnchorEl, handleCloseSearch } from '../../redux/OpenSearch';
import { selectAudioData } from '../../redux/audio';
import { selectOpenAudioDetail, selectOpenPlayBar, setOpenAudioDetail, setOpenPlayBar } from '../../redux/playAudio';
import { selectIncludeFooter, setFooter } from '../../redux/footer';
import { setCart } from '../../redux/payment';

import { useRouter } from 'next/router';

import { Provider } from 'react-redux';

import {
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
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
import { flexStyle } from '../../utils/flexStyle';
import { SCREEN_BREAKPOINTS, HEADER_HEIGHT, HEADER_HEIGHT_MB, DRAWER_WIDTH, COLORS } from '../../utils/constants';

import API from '../../services/api';

function Layout(props) {
    const { children } = props;
    const api = new API();
    const location = useRouter();

    let windowSize = useWindowSize();
    const isSm = windowSize.width > SCREEN_BREAKPOINTS.sm ? false : true;
    const openSidebar = useSelector(selectOpenSidebar);
    const includeFooter = useSelector(selectIncludeFooter);
    const [anchorEl, setAnchorEl] = useState(null);
    const [isPaymentFinish, setIsPaymentFinish] = useState(false);
    const [paymentStatusMessage, setPaymentStatusMessage] = useState('');
    const anchorSearchElId = useSelector(selectAnchorEl);
    const audio = useSelector(selectAudioData);
    const openPlaybar = useSelector(selectOpenPlayBar);
    const openAudioDetail = useSelector(selectOpenAudioDetail);
    const openSearchModal = Boolean(anchorEl);
    const dispatch = useDispatch();

    useEffect(() => {
        const { message } = location.query;
        if (!message) {
            return;
        }
        removeCartItem();
        setIsPaymentFinish(true);
        setPaymentStatusMessage(message);
        localStorage.removeItem('paymentData');
        localStorage.removeItem('localPaymentData');

    }, [location.query]);

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

    const removeCartItem = async () => {
        try {
            const cartItems = JSON.parse(localStorage.getItem('localPaymentData'));
            let promises = [];
            for (let i of cartItems.selectedItem) {
                promises.push(api.removeCartItem(i.id));
            }

            await Promise.all(promises);
            const res = await api.getCart();
            const data = await res.data.data;
            dispatch(setCart([...data]));
        }
        catch (err) {
            const errList = err.response.data.error;
            if (errList instanceof Object) {
                let errMessage = '';
                for (let e in errList) {
                    const key = Object.keys(errList[e])[0];
                    const value = errList[e][key]
                    errMessage += `${value} \n`
                }
                setPaymentStatusMessage(errMessage);
                return;
            }
            setPaymentStatusMessage(errList);
        }
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
            <Dialog
                open={isPaymentFinish}
                onClose={() => { setIsPaymentFinish(false) }}
                PaperProps={{
                    style: {
                        backgroundColor: COLORS.bg1
                    }
                }}
            >
                <DialogContent>
                    <DialogContentText
                        sx={{
                            color: COLORS.white
                        }}
                    >
                        {paymentStatusMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    sx={{
                        ...flexStyle('center', 'center'),
                        'whiteSpace': 'pre-line'
                    }}
                >
                    <Button
                        onClick={() => { setIsPaymentFinish(false) }}
                        autoFocus>
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}
export default ({ children }) => (
    <Provider store={store}>
        <Layout children={children}>
        </Layout>
    </Provider>
)