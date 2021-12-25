// import react 
import { useState } from 'react';

// import redux
import { useSelector } from 'react-redux'
import { selectOpenSidebar } from '../../redux/openSidebar'

// import react router dom
import { useNavigate, useLocation } from "react-router-dom";

// import MUI components
import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Button,
    Box
} from '@mui/material';

// import icons
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

// import images
import Logo from '../Logo/Logo'

// import utils
import { COLORS, TEXT_STYLE, FONT_COLOR, DRAWER_WIDTH, HEADER_HEIGHT, SCREEN_BREAKPOINTS, HEADER_HEIGHT_MB } from '../../utils/constants'
import useWindowSize from '../../utils/useWindowSize'

const RequestsBook = () => (
    <Button sx={{
        backgroundColor: COLORS.main,
        borderRadius: '33px',
        margin: '13.5px 37px 31px 25px',
        height: '48px',
        width: '188px',
        textTransform: 'inherit',
        ...TEXT_STYLE.content1
    }} variant="contained" startIcon={Book()}>
        Đề nghị sách
    </Button>
)

export default function SidebarMenu() {

    const windowSize = useWindowSize();
    const navigate = useNavigate();
    const location = useLocation();
    const [current, setCurrent] = useState(null)
    const openSidebar = useSelector(selectOpenSidebar);

    let open = windowSize.width > SCREEN_BREAKPOINTS.sm ? true : openSidebar

    const navigatorLink = [
        {
            id: 1,
            icon: Squircle,
            text: 'Trang chủ',
            url: '/'
        },
        {
            id: 2,
            icon: UpVip,
            text: 'Up VIP',
            url: '/up-vip'
        },
        {
            id: 3,
            icon: Discover,
            text: 'Khám phá',
            url: '/discoveries'
        },
        {
            id: 4,
            icon: Library,
            text: 'Thư viện',
            url: 'library'
        },
        {
            id: 5,
            icon: Adward,
            text: 'Bảng xếp hạng',
            url: '/charts'
        }
    ]
    const categories = [
        {
            id: 6,
            icon: <AudioBook />,
            text: 'Sách nói',
            url: '/audio-book'
        },
        {
            id: 7,
            icon: <AudioStory />,
            text: 'Truyện nói',
            url: '/story-book'
        },
        {
            id: 8,
            icon: <Podcast />,
            text: 'Podcast',
            url: '/podcast'
        },
        {
            id: 9,
            icon: <SummaryBook />,
            text: 'Tóm tắt sách',
            url: '/summary-book'
        },
        {
            id: 10,
            icon: <ChildrenBook />,
            text: 'Thiếu nhi',
            url: '/children-book'
        }
    ]

    const handleClickSidebar = (e) => {
        const id = Number(e.currentTarget.id);
        const allItems = [...navigatorLink, ...categories];
        const item = allItems.filter(i => i.id === id);
        setCurrent(id);
        navigate(`../${item[0].url}`, { replace: true });
        e.stopPropagation();
    }

    return (
        <Drawer
            sx={{
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 'inherit',
                    backgroundColor: COLORS.bg1,
                    top: { sm: 0, xs: HEADER_HEIGHT_MB },
                    paddingBottom: { sm: 0, xs: HEADER_HEIGHT },
                    overflowX: 'hidden',
                    boxSizing: 'border-box',
                    borderRight: `1px solid ${COLORS.blackStroker}`
                },
                width: { sm: DRAWER_WIDTH, xs: '100vw' },
                ...(!open && { display: 'none' }),
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <div style={{ display: 'block' }}>
                <Logo windowWidth={windowSize.width} />
            </div>
            <Divider />
            <List>
                {navigatorLink.map(icon => (
                    <Box
                        key={icon.id}
                        sx={{
                            m: '8px 0',
                            ...((icon.id === current || location.pathname === icon.url) && {
                                bgcolor: COLORS.bg2
                            })
                        }}
                    >
                        <ListItem
                            button
                            sx={{
                                height: '45px',
                                padding: '0 0 0 49px',
                                width: '100%',
                            }}
                            id={icon.id}
                            onClick={handleClickSidebar}
                        >
                            <ListItemIcon sx={{
                                color: FONT_COLOR,
                                ...TEXT_STYLE.content1,
                            }}
                            >
                                {icon.icon({ stroke: (icon.id === current || location.pathname === icon.url) ? '#FFFFFF' : '#ACACAC', fill: (icon.id === current || location.pathname === icon.url) ? '#FFFFFF' : '#ACACAC' })}
                            </ListItemIcon>
                            <ListItemText disableTypography primary={<Typography sx={{
                                color: FONT_COLOR,
                                ...TEXT_STYLE.content1,
                                ...((icon.id === current || location.pathname === icon.url) && {
                                    color: COLORS.white
                                })
                            }}>{icon.text}</Typography>} />
                        </ListItem>
                    </Box>
                ))}
            </List>
            <Divider style={{ borderColor: COLORS.blackStroker, width: '80%', alignSelf: 'center', margin: '17px 0' }} />
            <List>
                {categories.map((icon) => (
                    <Box
                        key={icon.id}
                        sx={{
                            m: '8px 0',
                            ...((icon.id === current || location.pathname === icon.url) && {
                                bgcolor: COLORS.bg2
                            })
                        }}
                    >
                        <ListItem
                            button
                            sx={{
                                height: '45px',
                                padding: '0 0 0 49px',
                                width: '100%',
                            }}
                            onClick={handleClickSidebar}
                            id={icon.id}
                        >
                            <ListItemIcon sx={{
                                color: FONT_COLOR,
                                ...TEXT_STYLE.content1
                            }}>
                                {icon.icon}
                            </ListItemIcon>
                            <ListItemText disableTypography primary={<Typography style={{
                                color: FONT_COLOR,
                                ...TEXT_STYLE.content1,
                                ...((icon.id === current || location.pathname === icon.url) && {
                                    color: COLORS.white
                                })
                            }}>{icon.text}</Typography>} />
                        </ListItem>
                    </Box>
                ))}
            </List>
            {RequestsBook()}
        </Drawer >
    )
}
