import { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';

import Squircle from '../../images/icons/Squircle'
import UpVip from '../../images/icons/UpVip'
import Discover from '../../images/icons/Discover'

import Logo from '../Logo/Logo'

import { COLORS, TEXT_STYLE, FONT_COLOR } from '../../utils/constants'

const drawerWidth = 240;

const HomeIcon = () => {
    return (
        <SvgIcon >
            {Squircle()}
        </SvgIcon>
    )
}
const UpVipIcon = () => {
    return (
        <SvgIcon >
            {UpVip()}
        </SvgIcon>
    )
}
const DiscoverIcon = () => {
    return (
        <SvgIcon >
            {Discover()}
        </SvgIcon>
    )
}

export default function SidebarMenu(props) {
    const { window } = props;


    const navigatorLink = [
        {
            icon: HomeIcon,
            text: 'Trang chủ'
        },
        {
            icon: UpVipIcon,
            text: 'Up VIP'
        },
        {
            icon: DiscoverIcon,
            text: 'Khám phá'
        }
    ]

    const categories = [
        {
            icon: HomeIcon,
            text: 'Trang chủ'
        }
    ]


    const drawer = (
        <div>
            <Logo />
            <Divider />
            <List>
                {navigatorLink.map(icon => (
                    <ListItem button key={icon.text}>
                        <ListItemIcon>
                            {icon.icon()}
                        </ListItemIcon>
                        <ListItemText primary={icon.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {categories.map((icon) => (
                    <ListItem button key={icon.text}>
                        <ListItemIcon>
                            {icon.icon()}
                        </ListItemIcon>
                        <ListItemText primary={icon.text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box component="nav" aria-label="mailbox folders" sx={{ flexGrow: 1, backgroundColor: COLORS.bg1, width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} >
            <Drawer
                container={container}
                variant="temporary"
                open={props.mobileOpen}
                onClose={props.handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    )
}
