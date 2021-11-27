import { useSelector, useDispatch } from 'react-redux'

import { setOpen, selectOpenSidebar } from './redux/openSidebar'

import Box from '@mui/material/Box';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import ROUTES from './Routes'

import SidebarMenu from "./components/SidebarMenu/SidebarMenu"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"

import useWindowSize from './utils/useWindowSize'
import { SCREEN_BREAKPOINTS, HEADER_HEIGHT, DRAWER_WIDTH } from './utils/constants'



function App() {

    let windowSize = useWindowSize()
    const openSidebar = useSelector(selectOpenSidebar);

    const dispatch = useDispatch();

    if (windowSize.width > SCREEN_BREAKPOINTS.sm && !openSidebar) {
        dispatch(setOpen(true))
    }

    return (
        <Router>
            <div className="App">
                <Login />
                <Header />
                <SidebarMenu />
                <Box sx={{
                    flexGrow: 1,
                    height: `calc(100% - ${HEADER_HEIGHT})`,
                    marginTop: HEADER_HEIGHT,
                    width: openSidebar ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%',
                    ...(openSidebar && { marginLeft: `${DRAWER_WIDTH}px` }),
                }}>
                    <Routes>
                        {
                            ROUTES.map(route => (
                                <Route path={route.path} element={route.component()} key={route.key} exact={route.exact} />
                            ))
                        }
                    </Routes>
                </Box>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
