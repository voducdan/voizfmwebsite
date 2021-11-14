import { useState } from 'react'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import SidebarMenu from "../../components/SidebarMenu/SidebarMenu"
import Header from "../../components/Header/Header"
import HomeContent from "../../components/HomeContent/HomeContent"

import useWindowSize from '../../utils/useWindowSize'
import { COLORS } from '../../utils/constants'





export default function Home() {

    let windowSize = useWindowSize()

    const theme = useTheme();
    const [open, setOpen] = useState(true);

    return (

        <Box sx={{ display: 'flex', backgroundColor: COLORS.bg1 }}>
            <Header open={open} setOpen={setOpen} windowSize={windowSize}></Header>
            <SidebarMenu open={open} theme={theme} windowSize={windowSize}></SidebarMenu>
            <HomeContent open={open} windowSize={windowSize}></HomeContent>
        </Box>
    )
}
