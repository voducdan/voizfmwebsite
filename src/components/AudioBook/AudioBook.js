// import react
import { useEffect, useState } from 'react';

// import MUI components
import {
    Typography,
    Box,
    Divider,
    Button
} from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// import others components
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import CategoryBarWithoutSwiper from '../../components/Shared/CategoryBarWithoutSwiper';
import PublisherComponent from '../../components/Shared/PublisherComponent';


// import icons
import { RightArrow, CarouselPrev, CarouselNext } from '../../components/Icons/index';

// import utils
import { SCREEN_BREAKPOINTS, TEXT_STYLE, COLORS, DRAWER_WIDTH } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';
import { flexStyle } from '../../utils/flexStyle'

// import service
import API from '../../services/api';

const Title = (props) => {
    const { isSm, content, haveArrow } = props
    return (
        < Box sx={{
            ...flexStyle('flex-start', 'center'),
            marginBottom: '24px'
        }}>
            <Typography sx={{
                ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                color: COLORS.white
            }}>
                {content}
            </Typography>
            {
                haveArrow && (
                    <Box sx={{ marginLeft: '11.3px', marginTop: '6px' }}>
                        <RightArrow fill={COLORS.white} />
                    </Box>
                )
            }

        </ Box >
    )
}

const RandomPlayList = (props) => {
    const { data, isSm } = props;
    return (
        <Box
            sx={{
                ...flexStyle('center', 'center'),
                columnGap: '18px',
                width: 'calc(50% - 14px)',
                height: '200px',
                bgcolor: COLORS.bg2,
                borderRadius: '4px'
            }}
        >

            <img src={data.avatar.thumb_url} style={{ width: '200px', height: '200px' }} />
            <Box
                sx={{
                    width: 'calc(100% - 200px)',
                    p: '20px 0',
                    boxSizing: 'border-box',

                }}
            >
                <Typography
                    sx={{
                        ...TEXT_STYLE.h3,
                        color: COLORS.white,
                        textAlign: 'left',
                        display: '-webkit-box',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        mb: '6px'
                    }}
                >{data.name}</Typography>
                <Box
                    sx={{
                        ...flexStyle('flex-start', 'center'),
                        columnGap: '6px',
                        mb: '6px'
                    }}
                >
                    <AccountCircleOutlinedIcon sx={{ color: COLORS.contentIcon, width: isSm ? '12px' : '16px', height: isSm ? '12px' : '16px' }} />
                    <Typography
                        sx={{
                            ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
                            color: COLORS.contentIcon
                        }}
                    >
                        Author
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        ...TEXT_STYLE.content2,
                        color: COLORS.VZ_Text_content,
                        textAlign: 'left',
                        display: '-webkit-box',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {data.description}
                </Typography>
            </Box>
        </Box>
    )
}

export default function AudioBook() {

    const api = new API();
    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
    const NUMBER_ITEMS_PER_LINE = 5;
    const SIDE_PADDING = isSm ? 19 : 48;
    const [categories, setCategoryies] = useState([]);
    const [categoryCode, setCategoryCode] = useState(null)
    const [categoryName, setCategoryName] = useState(null);
    const [playlists, setPlaylists] = useState([]);
    const [playlistsRandom, setPlaylistsRandom] = useState([]);
    const [initPlaylists, setInitPlaylists] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            const res = await api.getCategories('audio_book', 'Audiobook');
            const data = await res.data.data;
            setCategoryies(data)
        };
        async function fetchPlaylistsRandom() {
            const res = await api.getPlaylistsRandom(12);
            const data = await res.data.data;
            setPlaylistsRandom(data);
        }

        fetchCategories();
        fetchPlaylistsRandom();
    }, []);

    useEffect(() => {
        async function initPlaylists() {
            const initCategories = categories.filter(i => i.sub_name !== '');
            const resultPromise = [];
            initCategories.forEach(i => {
                const res = api.getCategoryPlaylists(i.code, 5);
                resultPromise.push(res);
            })
            const data = await Promise.all(resultPromise);
            const results = data.map((i, idx) => ({ name: initCategories[idx]['sub_name'], data: i.data.data }));
            setInitPlaylists(results);
        }
        initPlaylists();
    }, [categories]);

    useEffect(() => {
        async function fetchPlaylists() {
            if (categoryCode === null || categoryCode === '') {
                return;
            }
            else {
                const res = await api.getCategoryPlaylists(categoryCode, 35);
                const results = await res.data.data;
                setPlaylists(results);
            }
        }

        fetchPlaylists();
    }, [categoryCode])

    const getPlaylistImgWidth = () => {
        const width = windowSize.width;
        const height = (width - DRAWER_WIDTH - SIDE_PADDING * 2) / NUMBER_ITEMS_PER_LINE - 19.2;
        return height;
    }

    const onSelectCategory = (categoryCode) => {
        if (categoryCode !== null && categoryCode !== '') {
            const category = categories.filter(i => i.code === categoryCode)[0];
            const categoryName = !!category.sub_name ? category.sub_name : category.name
            setCategoryName(categoryName);
        }
        setCategoryCode(categoryCode);
    }

    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <HomeCarousel windowWidth={windowSize.width} />
            <Box
                sx={{
                    p: `0 ${SIDE_PADDING}px`
                }}
            >
                <CategoryBarWithoutSwiper categoryList={categories} isSm={isSm} onSelectCategory={onSelectCategory} />
                <Divider sx={{ borderColor: COLORS.bg2, mt: '24px', mb: '48px' }} />
                {
                    (categoryCode === null || categoryCode === '') && (
                        <Box>
                            {
                                initPlaylists.map(i => (
                                    <Box key={i.name}>
                                        {<Title content={i.name} isSm={isSm} haveArrow={true} />}
                                        <Box
                                            sx={{
                                                ...flexStyle('flex-start', 'center'),
                                                columnGap: '24px',
                                                mb: '56px'
                                            }}
                                        >
                                            {i.data.map((item) => (
                                                <Thumbnail key={item.id} style={{ width: `calc(100% / ${NUMBER_ITEMS_PER_LINE} - 19.2px)`, height: `${getPlaylistImgWidth()}px`, borderRadius: 3 }} avtSrc={item.avatar.thumb_url} alt={`images ${item.name}`} />
                                            ))}
                                        </Box>
                                    </Box>
                                ))

                            }
                        </Box>
                    )
                }
                {
                    (categoryCode !== null && categoryCode !== '') && (
                        <Box>
                            {
                                <Box>
                                    {<Title content={categoryName} isSm={isSm} haveArrow={false} />}
                                    <Box
                                        sx={{
                                            ...flexStyle('flex-start', 'center'),
                                            columnGap: '24px',
                                            mb: '56px',
                                            flexWrap: 'wrap',
                                            rowGap: '32px'
                                        }}
                                    >
                                        {playlists.map((item) => (
                                            <Thumbnail key={item.id} style={{ width: `calc(100% / ${NUMBER_ITEMS_PER_LINE} - 19.2px)`, height: `${getPlaylistImgWidth()}px`, borderRadius: 3 }} avtSrc={item.avatar.thumb_url} alt={`images ${item.name}`} />
                                        ))}
                                    </Box>
                                </Box>

                            }
                        </Box>
                    )
                }
            </Box>
            <Box
                sx={{
                    width: '100%'
                }}
            >
                <img src='https://picsum.photos/1190/420?img=2' style={{ width: '100%', height: '260px' }} />
            </Box>
            <Box
                sx={{
                    p: `0 ${SIDE_PADDING}px`,
                    mt: '58px',
                    ...flexStyle('flex-start', 'center'),
                    columnGap: '28px',
                    rowGap: '22px',
                    flexWrap: 'wrap'
                }}
            >
                {
                    playlistsRandom.map(i => (
                        <RandomPlayList key={i.id} data={i} isSm={isSm} />
                    ))
                }
                <Box
                    sx={{
                        mt: '26px',
                        mb: '80px',
                        textAlign: 'center',
                        width: '100%'
                    }}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: 'none',
                            color: COLORS.white,
                            ...TEXT_STYLE.title1,
                            borderRadius: '8px',
                            height: '48px',
                            width: '142px',
                            border: `1px solid ${COLORS.blackStroker}`
                        }}
                    >
                        Xem thêm
                    </Button>
                </Box>
            </Box>
            <PublisherComponent isSm={isSm} />
        </Box >
    )
}