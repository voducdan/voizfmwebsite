// import react
import { useState, useRef, useEffect } from 'react';

// import next router
import { useRouter } from 'next/router';

// import MUI components
import {
    Box,
    Avatar,
    Typography,
    Button,
    Slider,
    Stack,
    Divider,
    Snackbar,
    Alert
} from '@mui/material';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FilterListIcon from '@mui/icons-material/FilterList';

// import others components
import Control from './Control';
import AudioList from '../../components/AudioPlay/AudioListModals';

// import utils
import { flexStyle } from '../../utils/flexStyle';
import { SCREEN_BREAKPOINTS, COLORS, TEXT_STYLE } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

// import services
import API from '../../services/api';

export default function PlayBar() {
    const api = new API();

    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
    const audio = useRef(null);
    const router = useRouter()
    const { id } = router.query;
    const [volume, setVolume] = useState(60);
    const [audioData, setAudioData] = useState({});
    const [anchorAudioList, setAnchorAudioList] = useState(null);
    const [isLiked, setIsLiked] = useState(audioData?.meta_data?.is_liked);
    const [audiosList, setAudiosList] = useState([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [nextAudioId, setNextAudioId] = useState(undefined);
    const [prevAudioId, setPrevAudioId] = useState(undefined);

    useEffect(() => {
        async function fetchAudio() {
            const res = await api.getAudio(id);
            const audio = await res.data.data;
            setAudioData(audio)
        };
        if (id) {
            fetchAudio();
        }
    }, [router.asPath]);

    useEffect(() => {
        function compare(a, b) {
            if (a.position < b.position) {
                return -1;
            }
            if (a.position > b.position) {
                return 1;
            }
            return 0;
        }

        async function fetchPlaylistAudios() {
            const res = await api.getPlaylistAudios(audioData?.playlist?.id);
            const data = res.data.data;
            data.sort(compare);
            setAudiosList(data);
        };
        audio.current.volume = volume / 100;
        if (audioData?.playlist?.id) {
            fetchPlaylistAudios();
        }
    }, [audioData]);

    useEffect(() => {
        if (audiosList.length > 0) {
            assignAudioId();
        }
    }, [router.asPath, audiosList]);

    const assignAudioId = () => {
        if (audiosList.length === 1) {
            setNextAudioId(null);
            setPrevAudioId(null);
            return;
        }
        const audioIdx = audiosList.findIndex(i => i.id === Number(id));
        const nextIdx = audioIdx + 1;
        const prevIdx = audioIdx - 1;

        const nextId = nextIdx < audiosList.length ? audiosList[nextIdx].id : null;
        const prevId = prevIdx >= 0 ? audiosList[prevIdx].id : null;
        setNextAudioId(nextId);
        setPrevAudioId(prevId);
    }

    const openAudioList = (event) => {
        setAnchorAudioList(event.currentTarget);
    }

    const onCloseAudioList = () => {
        setAnchorAudioList(null);
    }

    const handleLikeAudio = () => {
        async function likeAudio() {
            try {
                const audioId = audioData.id;
                const res = await api.likeAudio(audioId);
                const data = await res.data;
                if (!data.error) {
                    setIsLiked(data.data['is_liked']);
                }
            }
            catch (err) {
                console.log(err);
                setOpenSnackbar(true);
            }
        }

        likeAudio();
    }

    const handleChangeVolumn = (value) => {
        setVolume(value);
        audio.current.volume = value / audioData.duration;
    }

    return (
        <Box
            id='play-audio-bar'
            sx={{
                bgcolor: COLORS.bg1,
                ...flexStyle('center', 'center'),
                columnGap: '3%',
                boxSizing: 'border-box',
                padding: `${isSm ? 24 : 0}px 0`,
                width: '100%',
                zIndex: 1201,
                position: 'fixed',
                bottom: 0,
                borderTop: `1px solid ${COLORS.blackStroker}`,
                height: isSm ? 'auto' : '100px',
                ...(isSm && { flexDirection: 'column-reverse', rowGap: '16px' })
            }}
        >
            <audio
                id='audio'
                hidden
                preload="auto"
                ref={audio}
            />
            {
                isSm && (
                    <Button
                        sx={{
                            bgcolor: COLORS.bg2,
                            ...TEXT_STYLE.content2,
                            color: COLORS.contentIcon,
                            textTransform: 'none',
                            width: isSm ? '100%' : '157px',
                            ...(!isSm && { maxWidth: '50%' }),
                            height: '36px',
                            borderRadius: '4px'
                        }}
                        startIcon={<FilterListIcon />}
                        onClick={openAudioList}
                    >
                        Danh sách audio
                    </Button>
                )
            }
            <Box
                sx={{
                    width: isSm ? '100%' : '30%',
                    ...flexStyle('flex-start', 'center'),
                    columnGap: '15px'
                }}
            >
                <Avatar
                    sx={{ width: isSm ? '65px' : '65px', height: isSm ? '65px' : '65px' }}
                    alt="audio avt"
                    src={audioData?.avatar?.original_url || audioData?.playlist?.avatar?.original_url}
                />
                <Box
                    sx={{
                        ...flexStyle('center', 'flex-start'),
                        columnGap: '28px'
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                color: COLORS.white,
                                marginBottom: `${isSm ? 4 : 8}px`,
                                display: '-webkit-box',
                                textOverflow: 'ellipsis',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}
                        >
                            {audioData?.playlist?.name}
                        </Typography>
                        <Typography
                            sx={{
                                ...TEXT_STYLE.content3,
                                color: COLORS.contentIcon
                            }}
                        >
                            Tác giả: {audioData?.playlist?.author_string}
                        </Typography>
                    </Box>
                    {
                        isLiked && (
                            <FavoriteIcon
                                onClick={handleLikeAudio}
                                sx={{
                                    color: COLORS.main
                                }}
                            />
                        )
                    }
                    {
                        !isLiked && (
                            <FavoriteBorderIcon
                                sx={{
                                    color: COLORS.contentIcon
                                }}
                                onClick={handleLikeAudio}
                            />
                        )
                    }
                </Box>
            </Box>
            {isSm && (<Divider sx={{ borderColor: COLORS.blackStroker, margin: '5px 0', width: '100%', borderWidth: '1px' }} />)}
            {(Object.keys(audioData).length > 0 && nextAudioId !== undefined && prevAudioId !== undefined) && (<Box
                sx={{
                    width: isSm ? '100%' : '40%',
                }}
            >
                <Control
                    audioData={audioData}
                    audio={audio}
                    nextAudioId={nextAudioId}
                    prevAudioId={prevAudioId}
                    isSm={isSm}
                />
            </Box>)
            }
            {
                !isSm && (
                    <Box
                        sx={{
                            width: '30%',
                            ...flexStyle('center', 'flex-end')
                        }}
                    >
                        <Button
                            sx={{
                                bgcolor: COLORS.bg2,
                                ...TEXT_STYLE.content2,
                                color: COLORS.contentIcon,
                                textTransform: 'none',
                                width: '157px',
                                maxWidth: '50%',
                                height: '36px',
                                borderRadius: '4px'
                            }}
                            startIcon={<FilterListIcon />}
                            onClick={openAudioList}
                        >
                            Danh sách audio
                        </Button>

                        <Divider sx={{ color: COLORS.blackStroker, margin: '0 24px' }} orientation="vertical" flexItem />
                        <Stack spacing={2} direction="row" sx={{ mb: 1, width: '50%', }} alignItems="center" justifyContent="flex-start">
                            {volume > 0 && (<VolumeUp onClick={() => { setVolume(0) }} sx={{ color: COLORS.contentIcon }} />)}
                            {volume === 0 && (<VolumeOffIcon onClick={() => { setVolume(60) }} sx={{ color: COLORS.contentIcon }} />)}
                            <Slider
                                sx={{
                                    height: 2,
                                    width: '100px',
                                    maxWidth: '100%',
                                    color: COLORS.blackStroker,
                                    '& .MuiSlider-track': {
                                        color: COLORS.white
                                    },
                                    '& .MuiSlider-thumb': {
                                        width: 12,
                                        height: 12,
                                        color: COLORS.white,
                                        '&.Mui-active': {
                                            width: 15,
                                            height: 15,
                                        },
                                    },
                                    '& .MuiSlider-rail': {
                                        opacity: 1,
                                    },
                                }}
                                aria-label="Volume"
                                value={volume}
                                onChange={(_, value) => handleChangeVolumn(value)}
                            />
                        </Stack>
                    </Box>
                )
            }
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => { setOpenSnackbar(false) }}
            >
                <Alert onClose={() => { setOpenSnackbar(false) }} severity="error" sx={{ width: '100%' }}>
                    Thích audio không thành công, vui lòng thử lại sau!
                </Alert>
            </Snackbar>
            <AudioList
                anchorAudioList={anchorAudioList}
                onCloseAudioList={onCloseAudioList}
                playlistId={audioData?.playlist?.id}
                audioId={Number(id)}
                audiosList={audiosList}
            />
        </Box>
    )
}