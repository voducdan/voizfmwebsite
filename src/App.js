import { useState } from 'react'

import { useTheme } from '@mui/material/styles';
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

    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [openLogin, setOpenLogin] = useState(false);

    const handleOpenLogin = () => setOpenLogin(true);
    const handleCloseLogin = () => setOpenLogin(false);


    if (windowSize.width > SCREEN_BREAKPOINTS.sm && !open) {
        setOpen(true)
    }

    return (
        <Router>
            <div className="App">
                <Login openLogin={openLogin} handleCloseLogin={handleCloseLogin} />
                <Header open={open} setOpen={setOpen} handleOpenLogin={handleOpenLogin} windowSize={windowSize}></Header>
                <SidebarMenu open={open} theme={theme} windowSize={windowSize}></SidebarMenu>
                <Box sx={{
                    flexGrow: 1,
                    height: `calc(100% - ${HEADER_HEIGHT})`,
                    marginTop: HEADER_HEIGHT,
                    width: open ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%',
                    ...(open && { marginLeft: `${DRAWER_WIDTH}px` }),
                }}>
                    <Routes>

                        {
                            ROUTES.map(route => (
                                <Route path={route.path} element={route.component({ windowSize })} key={route.key} exact={route.exact} />
                            ))
                        }
                    </Routes>
                </Box>
                <Footer open={open} />
            </div>)
        </Router>
    )
}

export default App;
