// import react
import { useEffect, useState } from 'react';

// import MUI components
import {
    Typography,
    Box,
    Divider
} from '@mui/material';

// import others components
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import CategoryBarWithoutSwiper from '../../components/Shared/CategoryBarWithoutSwiper';

// import icons
import { RightArrow, CarouselPrev, CarouselNext } from '../../components/Icons/index';

// import utils
import { SCREEN_BREAKPOINTS, TEXT_STYLE, COLORS } from '../../utils/constants';
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

export default function AudioBook() {

    const api = new API();
    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
    const [categories, setCategoryies] = useState([]);
    const [categoryCode, setCategoryCode] = useState(null)
    const [categoryName, setCategoryName] = useState(null);
    const [playlists, setPlaylists] = useState([]);
    const [initPlaylists, setInitPlaylists] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            const res = await api.getCategories('audio_book', 'Audiobook');
            const data = await res.data.data;
            setCategoryies(data)
        }
        fetchCategories();
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
                    p: '0 48px'
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
                                                <Thumbnail key={item.id} style={{ width: 'calc(100% / 5 - 19.2px)', borderRadius: 3 }} avtSrc={item.avatar.thumb_url} alt={`images ${item.name}`} />
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
                                            <Thumbnail key={item.id} style={{ width: 'calc(100% / 5 - 19.2px)', borderRadius: 3 }} avtSrc={item.avatar.thumb_url} alt={`images ${item.name}`} />
                                        ))}
                                    </Box>
                                </Box>

                            }
                        </Box>
                    )
                }
            </Box>
        </Box >
    )
}