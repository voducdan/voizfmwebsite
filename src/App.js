import { useState } from 'react'

import { useTheme } from '@mui/material/styles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import ROUTES from './Routes'

import SidebarMenu from "./components/SidebarMenu/SidebarMenu"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import useWindowSize from './utils/useWindowSize'
import { SCREEN_BREAKPOINTS } from './/utils/constants';


function App() {

    let windowSize = useWindowSize()

    const theme = useTheme();
    const [open, setOpen] = useState(true);
    if (windowSize.width > SCREEN_BREAKPOINTS.sm && !open) {
        setOpen(true)
    }

    return (
        <Router>
            <div className="App">
                <Header open={open} setOpen={setOpen} windowSize={windowSize}></Header>
                <SidebarMenu open={open} theme={theme} windowSize={windowSize}></SidebarMenu>
                <Routes>
                    {
                        ROUTES.map(route => (
                            <Route path={route.path} element={route.component({ open, windowSize })} key={route.key} exact={route.exact} />
                        ))
                    }
                </Routes>
                <Footer open={open} />
            </div>)
        </Router>
    )
}

export default App;
