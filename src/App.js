import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setOpen, selectOpenSidebar } from './redux/openSidebar';
import { selectAnchorEl, handleCloseSearch } from './redux/OpenSearch';

import Box from '@mui/material/Box';

import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import ROUTES from './Routes';

import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import PlayBar from './components/PlayBar/PlayBar';
import SearchModal from './components/Search/SearchModal';

import useWindowSize from './utils/useWindowSize'
import { SCREEN_BREAKPOINTS, HEADER_HEIGHT, HEADER_HEIGHT_MB, DRAWER_WIDTH, EXCLUDE_FOOTER } from './utils/constants'



function App() {

    const location = useLocation({});
    const [includeFooter, setIncludeFooter] = useState(null);

    let windowSize = useWindowSize()
    const openSidebar = useSelector(selectOpenSidebar);
    const [anchorEl, setAnchorEl] = useState(null);
    const anchorSearchElId = useSelector(selectAnchorEl);
    const openSearchModal = Boolean(anchorEl);
    const dispatch = useDispatch();

    useEffect(() => {
        function checkIncludeFooter() {
            if (EXCLUDE_FOOTER.includes(location.pathname)) {
                setIncludeFooter(false);
            } else {
                setIncludeFooter(true);
            }
        }
        checkIncludeFooter();
        dispatch(handleCloseSearch());

    }, [location])

    useEffect(() => {
        getSearchAnchorEl();
    }, [anchorSearchElId]);

    if (windowSize.width > SCREEN_BREAKPOINTS.sm && !openSidebar) {
        dispatch(setOpen(true))
    }

    const openPlayBar = () => {
        if (location.pathname === '/audio-play') {
            if (windowSize.width > SCREEN_BREAKPOINTS.sm) {
                return true
            }
            if (!openSidebar) {
                return true
            }
        }
        return false
    };

    const getSearchAnchorEl = () => {
        const el = document.getElementById(anchorSearchElId);
        setAnchorEl(el);
    }

    return (
        <div className="App">
            <Login />
            <Header />
            {
                openSearchModal && (
                    <SearchModal />
                )
            }
            <SidebarMenu />
            <Box sx={{
                flexGrow: 1,
                height: `calc(100% - ${HEADER_HEIGHT})`,
                marginTop: windowSize.width > SCREEN_BREAKPOINTS.sm ? HEADER_HEIGHT : HEADER_HEIGHT_MB,
                width: openSidebar ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%',
                ...(openSidebar && { marginLeft: `${DRAWER_WIDTH}px` }),
            }}>
                <Routes>
                    {
                        ROUTES.map(route => (
                            <Route path={route.path} element={route.component} key={route.key} exact={route.exact} />
                        ))
                    }
                </Routes>
            </Box>
            {
                openPlayBar() && (
                    <PlayBar />
                )
            }
            {includeFooter && <Footer />}
        </div>
    )
}

export default App;
