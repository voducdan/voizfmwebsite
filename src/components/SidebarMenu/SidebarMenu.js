// import react 
import { useState, useEffect, useRef } from 'react';

// import redux
import { useSelector, useDispatch } from 'react-redux';
import { selectOpenSidebar, setOpen } from '../../redux/openSidebar';
import { selectToken } from '../../redux/token';
import { setOpenLogin } from '../../redux/openLogin';
import { selectUser } from '../../redux/user';

// import next router
import { useRouter } from 'next/router';

// import next link
import Link from 'next/link';

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
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText
} from '@mui/material';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';

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
} from '../Icons/index';

// import images
import Logo from '../Logo/Logo';

// import utils
import { COLORS, TEXT_STYLE, FONT_COLOR, DRAWER_WIDTH, HEADER_HEIGHT, SCREEN_BREAKPOINTS, HEADER_HEIGHT_MB } from '../../utils/constants';
import { flexStyle } from '../../utils/flexStyle';
import useWindowSize from '../../utils/useWindowSize';

const RequestsBook = ({ handleClickRequestBook }) => (
    <Button
        onClick={handleClickRequestBook}
        sx={{
            backgroundColor: COLORS.main,
            borderRadius: '33px',
            margin: '13.5px 37px 31px 25px',
            height: '48px',
            width: '188px',
            textTransform: 'inherit',
            ...TEXT_STYLE.content1
        }}
        variant="contained"
        startIcon={Book()}>
        Đề nghị sách
    </Button>
)

export default function SidebarMenu() {

    const windowSize = useWindowSize();
    const isSm = windowSize.width > SCREEN_BREAKPOINTS.sm ? false : true;
    const navigate = useRouter();
    const sidebar = useRef(null);
    const [current, setCurrent] = useState(null);
    const [navigatorLink, setNavigatorLink] = useState([]);
    const [categories, setCategories] = useState([]);
    const [openIsVip, setOpenIsVip] = useState(false);
    const openSidebar = useSelector(selectOpenSidebar);
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    let open = openSidebar

    useEffect(() => {
        let navigatorLink = [];
        let categories = [];
        if (!!token) {
            navigatorLink = [
                {
                    id: 1,
                    icon: Squircle,
                    text: 'Trang chủ',
                    url: ''
                },
                {
                    id: 2,
                    icon: UpVip,
                    text: 'Up VIP',
                    url: 'up-vip'
                },
                {
                    id: 3,
                    icon: Discover,
                    text: 'Cộng đồng',
                    url: 'discoveries'
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
                    url: 'playlists/rankings'
                },
                {
                    id: 6,
                    icon: () => (<HeadphonesOutlinedIcon />),
                    text: 'Nội dung đang nghe',
                    url: 'listenings'
                }
            ];
        }
        else {
            navigatorLink = [
                {
                    id: 1,
                    icon: Squircle,
                    text: 'Trang chủ',
                    url: ''
                },
                {
                    id: 2,
                    icon: UpVip,
                    text: 'Up VIP',
                    url: 'up-vip'
                },
                {
                    id: 3,
                    icon: Discover,
                    text: 'Cộng đồng',
                    url: 'discoveries'
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
                    url: 'playlists/rankings'
                }
            ];
        }

        categories = [
            {
                id: 7,
                icon: <AudioBook />,
                text: 'Sách nói',
                url: 'audio-book'
            },
            {
                id: 8,
                icon: <AudioStory />,
                text: 'Truyện nói',
                url: 'story-book'
            },
            {
                id: 9,
                icon: <Podcast />,
                text: 'Podcast',
                url: 'podcast'
            },
            {
                id: 10,
                icon: <SummaryBook />,
                text: 'Sách tóm tắt',
                url: 'summary-book'
            },
            {
                id: 11,
                icon: <ChildrenBook />,
                text: 'Thiếu nhi',
                url: 'children-book'
            }
        ];
        setNavigatorLink(navigatorLink);
        setCategories(categories);
    }, []);

    const handleClickSidebar = (e) => {
        const id = Number(e.currentTarget.id);
        const allItems = [...navigatorLink, ...categories];
        const item = allItems.filter(i => i.id === id);
        setCurrent(id);
        if (isSm) {
            dispatch(setOpen(false));
        }
        if (item[0].url === 'up-vip' && user && user.promotion === 'vip') {
            setOpenIsVip(true);
            return;
        }

        navigate.push(`/${item[0].url}`);
        e.stopPropagation();
    }

    const handleClickRequestBook = () => {
        if (!token) {
            dispatch(setOpenLogin(true));
            return;
        }
        navigate.push('/book-request')
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
                    boxSizing: 'border-box',
                    borderRight: `1px solid ${COLORS.blackStroker}`,
                    overflowX: 'hidden',
                    scrollbarGutter: 'stable',
                    ...(!isSm && {
                        overflowY: 'hidden',
                    }),
                    '::-webkit-scrollbar': {
                        width: '4px'
                    },

                    '::-webkit-scrollbar-track': {
                        borderRadius: '5px',
                    },

                    '::-webkit-scrollbar-thumb': {
                        background: COLORS.bg3,
                        borderRadius: '5px'
                    },
                    ':hover': {
                        overflowY: 'auto'
                    }
                },
                width: { sm: DRAWER_WIDTH, xs: '100vw' },
                ...(!open && { display: 'none' }),
            }}
            variant="persistent"
            anchor="left"
            open={open}
            ref={sidebar}
        >
            <Box>
                <Link
                    href='/'
                >
                    <a>
                        <Logo windowWidth={windowSize.width} />
                    </a>
                </Link>
            </Box>
            <Divider />
            <List>
                {navigatorLink.map(icon => (
                    <Box
                        key={icon.id}
                        sx={{
                            m: '8px 0',
                            ...((icon.id === current || navigate.pathname === icon.url) && {
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
                                {icon.icon({ stroke: (icon.id === current || navigate.pathname === icon.url) ? '#FFFFFF' : '#ACACAC', fill: (icon.id === current || navigate.pathname === icon.url) ? '#FFFFFF' : '#ACACAC' })}
                            </ListItemIcon>
                            <ListItemText disableTypography primary={<Typography sx={{
                                color: FONT_COLOR,
                                ...TEXT_STYLE.content1,
                                ...((icon.id === current || navigate.pathname === icon.url) && {
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
                            ...((icon.id === current || navigate.pathname === icon.url) && {
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
                                ...((icon.id === current || navigate.pathname === icon.url) && {
                                    color: COLORS.white
                                })
                            }}>{icon.text}</Typography>} />
                        </ListItem>
                    </Box>
                ))}
            </List>
            <Box>
                <RequestsBook
                    handleClickRequestBook={handleClickRequestBook}
                />
            </Box>
            <Dialog
                open={openIsVip}
                onClose={() => { setOpenIsVip(false) }}
                PaperProps={{
                    style: {
                        backgroundColor: COLORS.bg1
                    }
                }}
            >
                <DialogContent>
                    <DialogContentText
                        sx={{
                            color: COLORS.white
                        }}
                    >
                        Bạn đã là thành viên VIP
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    sx={{
                        ...flexStyle('center', 'center'),
                        'whiteSpace': 'pre-line'
                    }}
                >
                    <Button
                        onClick={() => { setOpenIsVip(false) }}
                        autoFocus>
                        Đóng
                    </Button>
                </DialogActions>
            </Dialog>
        </Drawer >
    )
}
