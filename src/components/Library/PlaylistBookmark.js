// import react
import { useState, useEffect } from 'react';

// import MUI component
import {
    Box,
    Tabs,
    Tab,
    Typography,
    Avatar,
    Button
} from '@mui/material';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// import swiper
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss';

// import others components
import PlaylistThumnail from '../../components/Shared/PlaylistThumbnail'
import Thumbnail from '../../components/Thumbnail/Thumbnail';

// import utils
import { flexStyle } from '../../utils/flexStyle'
import { TEXT_STYLE, COLORS, SCREEN_BREAKPOINTS } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

// import service
import API from '../../services/api';

SwiperCore.use([Navigation]);

function TabPanel(props) {
    const { children, value, index, isSm } = props;
    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && (
                <Box
                    sx={{
                        p: '40px 0',
                        ...flexStyle('flex-start', 'center'),
                        columnGap: '10%',
                        rowGap: isSm ? '18px' : '40px',
                        flexWrap: 'wrap'
                    }}
                >
                    {children}
                </Box>
            )}
        </Box>
    );
}

const PlaylistAudioCount = (props) => {
    const { audioCount, isSm } = props;
    return (
        <Box
            sx={{
                ...flexStyle('flex-start', 'center'),
                columnGap: '6px'
            }}
        >
            <GraphicEqOutlinedIcon sx={{ color: COLORS.contentIcon, width: isSm ? '12px' : '16px', height: isSm ? '12px' : '16px' }} />
            <Typography
                sx={{
                    ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
                    color: COLORS.contentIcon
                }}
            >
                {audioCount} audios
            </Typography>
        </Box>
    )
}

const ChannelBookmark = (props) => {
    const { data, isSm } = props;
    const playlists = data.playlists;
    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Box
                sx={{
                    ...flexStyle('space-between', 'flex-start'),
                    width: '100%',
                    ...(isSm && { columnGap: '8px' })
                }}
            >
                <Box
                    sx={{
                        ...flexStyle('flex-start', 'center'),
                        columnGap: isSm ? '8px' : '16px'
                    }}
                >
                    <Avatar
                        sx={{
                            width: isSm ? '32px' : '40px',
                            height: isSm ? '32px' : '40px'
                        }}
                        alt="img"
                        // src={data.avatar.thumb_url}
                        src="https://picsum.photos/420/420?img=4"
                    />
                    <Typography
                        sx={{
                            ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.h3),
                            color: COLORS.white
                        }}
                    >
                        {data.name}
                    </Typography>
                    <ChevronRightIcon sx={{ color: COLORS.white }} />
                </Box>
                <Button
                    sx={{
                        ...(isSm ? TEXT_STYLE.VZ_Caption_2 : TEXT_STYLE.title2),
                        textTransform: 'none',
                        color: COLORS.white,
                        bgcolor: COLORS.bg3,
                        borderRadius: '22px',
                        maxWidth: '144px',
                        width: '50%',
                        height: '32px',
                        '& .MuiButton-startIcon': {
                            mr: '2px'
                        }
                    }}
                    startIcon={<CheckIcon sx={{ color: COLORS.white, ...(isSm && { width: '12px', height: '12px' }) }} />}
                >Hủy theo dõi</Button>
            </Box>

            <Swiper slidesPerView={isSm ? 2.5 : 5} spaceBetween={isSm ? 8 : 22} style={{ marginTop: '10px' }}>
                {playlists.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Thumbnail
                            style={{ width: '100%', height: isSm ? '145px' : '186px', borderRadius: '4px' }}
                            // avtSrc={item.avatar.thumb_url}
                            avtSrc={`https://picsum.photos/420/420?img=${item.id}`}
                            alt={`images ${item.id}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}

const tabStyle = () => ({
    '&.MuiTab-root': {
        ...TEXT_STYLE.title1,
        color: COLORS.contentIcon,
        textTransform: 'none'
    },
    '&.Mui-selected': {
        color: COLORS.white
    }
})


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function PlaylistBookmark() {
    const api = new API();
    const windowSize = useWindowSize();
    const pageLimit = 10;
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    const [playlistBookmarks, setPlaylistBookmarks] = useState([]);
    const [channelBookmarks, setChannelBookmarks] = useState([]);
    const [playlistPage, setPlaylistPage] = useState(0);
    const [channelPage, setChannelPage] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        async function fetchPlaylistBookmarks() {
            const res = await api.getPlaylistBookmarks(playlistPage, pageLimit);
            const data = await res.data;
            setPlaylistBookmarks(data)
        }
        async function fetchChannelBookmarks() {
            const res = await api.getChannelBookmarks(channelPage, pageLimit);
            const data = await res.data;
            setChannelBookmarks(data)
        }

        fetchChannelBookmarks()
        fetchPlaylistBookmarks()
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Typography
                sx={{
                    ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                    color: COLORS.white,
                    textAlign: 'left',
                    mb: '32px'
                }}
            >Đánh dấu</Typography>
            <Box sx={{ borderBottom: 1, borderColor: COLORS.blackStroker }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="tabs"
                    sx={{
                        '&.MuiTabs-indicator': {
                            bgcolor: COLORS.main
                        }
                    }}
                >
                    <Tab sx={tabStyle} label="Playlist" {...a11yProps(0)} />
                    <Tab sx={tabStyle} label="Kênh" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} isSm={isSm}>
                {
                    playlistBookmarks.map(i => (
                        <PlaylistThumnail
                            key={i?.id}
                            name={i.name}
                            src={i?.avatar?.thumb_url}
                            authors={i?.author_string}
                            isBookmark={true}
                            children={<PlaylistAudioCount isSm={isSm} audioCount={i?.playlist_counter?.audios_count} />}
                        />
                    ))
                }
            </TabPanel>
            <TabPanel value={value} index={1} isSm={isSm}>
                {
                    channelBookmarks.map(i => (
                        <ChannelBookmark key={i.id} isSm={isSm} data={i} />
                    ))
                }
            </TabPanel>
        </Box>
    )
}