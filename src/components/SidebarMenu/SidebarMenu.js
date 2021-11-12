import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';


import Squircle from '../Icons/Squircle'
import UpVip from '../Icons/UpVip'
import Discover from '../Icons/Discover'

import Logo from '../Logo/Logo'

import { COLORS, TEXT_STYLE, FONT_COLOR, HEADER_HEIGHT, DRAWER_WIDTH } from '../../utils/constants'


const HomeIcon = () => {
    return (
        <SvgIcon >
            {Squircle()}
        </SvgIcon>
    )
}
const UpVipIcon = () => {
    return (
        <SvgIcon sx={{ color: FONT_COLOR }}>
            {UpVip()}
        </SvgIcon >
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



    return (
        <Drawer
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: { sm: DRAWER_WIDTH, xs: '100vw' },
                    marginTop: { xs: HEADER_HEIGHT, sm: 0 },
                    boxSizing: 'border-box',
                    backgroundColor: COLORS.bg1,
                    color: FONT_COLOR,
                    ...TEXT_STYLE.content1
                },
                ...(props.open && { backgroundColor: COLORS.bg1 }),
                height: '100vh'
            }}
            variant="persistent"
            anchor="left"
            open={props.open}
        >
            <Divider />
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
            <Divider style={{ borderColor: COLORS.blackStroker, width: '80%', alignSelf: 'center' }} />
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
        </Drawer >
    )
}
