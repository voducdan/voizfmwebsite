import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


import {
    Squircle,
    UpVip,
    Discover,
    Library,
    Adward,
    AudioBook,
    AudioStory,
    Podcast,
    SummaryBook,
    ChildrenBook,
    Book
} from '../Icons/index'

import Logo from '../Logo/Logo'

import { COLORS, TEXT_STYLE, FONT_COLOR, FONT_FAMILY, HEADER_HEIGHT, DRAWER_WIDTH } from '../../utils/constants'


const RequestsBook = () => (
    <Button sx={{
        backgroundColor: COLORS.main,
        borderRadius: '33px',
        margin: '13.5px 37px 0 25px',
        height: '48px',
        width: '188px',
        textTransform: 'inherit',
        ...TEXT_STYLE.content1
    }} variant="contained" startIcon={Book()}>
        Đề nghị sách
    </Button>
)

export default function SidebarMenu(props) {

    const navigatorLink = [
        {
            icon: Squircle,
            text: 'Trang chủ'
        },
        {
            icon: UpVip,
            text: 'Up VIP'
        },
        {
            icon: Discover,
            text: 'Khám phá'
        },
        {
            icon: Library,
            text: 'Thư viện'
        },
        {
            icon: Adward,
            text: 'Bảng xếp hạng'
        }
    ]

    const categories = [
        {
            icon: AudioBook,
            text: 'Sách nói'
        },
        {
            icon: AudioStory,
            text: 'Truyện nói'
        },
        {
            icon: Podcast,
            text: 'Podcast'
        },
        {
            icon: SummaryBook,
            text: 'Tóm tắt sách'
        },
        {
            icon: ChildrenBook,
            text: 'Thiếu nhi'
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
                    backgroundColor: COLORS.bg1
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
                    <ListItem button key={icon.text} sx={{ height: '45px', padding: '0 16px', margin: '8px 0' }}>
                        <ListItemIcon sx={{
                            color: FONT_COLOR,
                            fontFamily: FONT_FAMILY,
                            ...TEXT_STYLE.content1
                        }}>
                            {icon.icon()}
                        </ListItemIcon>
                        <ListItemText disableTypography primary={<Typography style={{
                            color: FONT_COLOR,
                            fontFamily: FONT_FAMILY,
                            ...TEXT_STYLE.content1
                        }}>{icon.text}</Typography>} />
                    </ListItem>
                ))}
            </List>
            <Divider style={{ borderColor: COLORS.blackStroker, width: '80%', alignSelf: 'center', margin: '17px 0' }} />
            <List>
                {categories.map((icon) => (
                    <ListItem button key={icon.text} sx={{ height: '45px', padding: '0 16px', margin: '8px 0' }}>
                        <ListItemIcon sx={{
                            color: FONT_COLOR,
                            fontFamily: FONT_FAMILY,
                            ...TEXT_STYLE.content1
                        }}>
                            {icon.icon()}
                        </ListItemIcon>
                        <ListItemText disableTypography primary={<Typography style={{
                            color: FONT_COLOR,
                            fontFamily: FONT_FAMILY,
                            ...TEXT_STYLE.content1
                        }}>{icon.text}</Typography>} />
                    </ListItem>
                ))}
            </List>
            {RequestsBook()}
        </Drawer >
    )
}
