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

import { COLORS, TEXT_STYLE, FONT_COLOR, FONT_FAMILY, DRAWER_WIDTH, HEADER_HEIGHT } from '../../utils/constants'


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
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 'inherit',
                    height: '100vh',
                    boxSizing: 'border-box',
                    backgroundColor: COLORS.bg1,
                    marginTop: { sm: 0, xs: HEADER_HEIGHT },
                    overflowX: 'hidden'
                },
                ...(props.open && { backgroundColor: COLORS.bg1 }),
                width: { sm: DRAWER_WIDTH, xs: '100vw' },
                height: '100vh'
            }}
            variant="persistent"
            anchor="left"
            open={props.open}
        >
            <div style={{ display: 'block' }}>
                <Logo windowWidth={props.windowSize.width} />
            </div>
            <Divider />
            <List>
                {navigatorLink.map(icon => (
                    <ListItem button key={icon.text} sx={{ height: '45px', padding: '0 16px', margin: '8px 0 8px 33px', width: 'auto' }}>
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
                    <ListItem button key={icon.text} sx={{ height: '45px', padding: '0 16px', margin: '8px 0 8px 33px', width: 'auto' }}>
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
