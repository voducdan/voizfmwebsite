// import react
import { useState, useEffect, useRef } from 'react';

// import redux
import { useDispatch, useSelector } from 'react-redux';
import { togglePlayAudio, pauseAudio } from '../../redux/playAudio';
import { selectAudioHls } from '../../redux/playAudio';
import { selectToken } from '../../redux/token';
// import next router
import { useRouter } from 'next/router';

// import hls
import Hls from 'hls.js';

// import MUI component
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    Dialog,
    ListItemText,
    Typography,
    Slider,
    IconButton,
    List,
    ListItem,
    Radio,
    Button
} from '@mui/material';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import { COLORS, TEXT_STYLE } from '../../utils/constants';
import { flexStyle } from '../../utils/flexStyle';
import formatDuration from '../../utils/formatDuration';
import { Loop, Clock } from '../Icons';

// import services
import API from '../../services/api';

const WallPaper = styled('div')({
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden'
});

const Widget = styled('div')(({ theme }) => ({
    width: '100%',
    margin: 'auto',
    position: 'relative',
    ...flexStyle('center', 'center'),
    flexDirection: 'column',
    rowGap: '20px'
}));


const TinyText = styled(Typography)({
    ...TEXT_STYLE.content2,
    color: COLORS.white
});

export default function Control(props) {
    const api = new API();

    const { audioData, audio, nextAudioId, prevAudioId } = props;
    const theme = useTheme();
    const playBtn = useRef(null);
    const navigate = useRouter();
    const { mode } = navigate.query;
    const dispatch = useDispatch();
    const audioUrl = useSelector(selectAudioHls);
    const token = useSelector(selectToken);
    const [position, setPosition] = useState(0);
    const [paused, setPaused] = useState(false);
    const [loopAudio, setLoopAudio] = useState(false);
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [countDownTimerStr, setCountDownTimer] = useState('');
    const [openTimer, setOpenTimer] = useState(false);

    const media = audio.current;

    useEffect(() => {
        if (!audioUrl) {
            return;
        }
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.attachMedia(media)
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                hls.loadSource(audioUrl);
                hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    media.muted = true;
                    const promise = media.play();
                    if (promise !== undefined) {
                        promise.then(_ => {
                            media.muted = false;
                        }).catch(error => {
                            dispatch(togglePlayAudio());
                            setPaused(true);
                        });
                    }
                });
            });;
        }
        else if (media.canPlayType('application/vnd.apple.mpegurl')) {
            media.src = audioUrl;
            media.addEventListener('loadedmetadata', function () {
                media.play();
            });
        }
        media.addEventListener('timeupdate', (e) => {
            const currentTime = Math.floor(e.target.currentTime);
            setPosition(currentTime);
            if (currentTime === audioData.duration && !media.loop) {
                if (mode && mode === 'all' && nextAudioId) {
                    navigate.push(`/audio-play/${nextAudioId}?mode=all`)
                }
                else {
                    setPaused(true);
                    media.currentTime = 0;
                    setPosition(0);
                }
            }
        });

    }, [audioUrl]);

    useEffect(() => {
        if (paused) {
            if (token) {
                addAudioToListening(audioData.id, position, audioData.playlist.id);
            }
            media.pause();
        }
        else {
            if (media.paused) {
                media.play();
            }
            media.muted = false;
        }
    }, [paused]);

    useEffect(() => {
        if (timer === 0) {
            return;
        }
        if (!paused) {
            setPaused(true);
        }
        setTimeout(() => {
            setPaused(false);
        }, timer * 1000 * 60);
        countDownTimer();
    }, [timer]);

    const countDownTimer = () => {
        let eslapseTime = 0;
        const x = setInterval(function () {
            eslapseTime++;
            const timerInSecond = timer * 60 - eslapseTime;
            if (timerInSecond < 0) {
                clearInterval(x);
                setCountDownTimer('');
                return;
            }
            setCountDownTimer(formatDuration(timerInSecond));
        }, 1000);
        setIntervalId(x);
    }

    const onPlayClick = () => {
        setPaused(!paused);
        dispatch(togglePlayAudio());
    }

    const handleTimerClick = () => {
        setOpenTimer(true);
    };

    const handleTimerClose = () => {
        setOpenTimer(false);
    };

    const handleSelectTimer = (e) => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        const selectedTimer = Number(e.currentTarget.value);
        setCountDownTimer('');
        setAnchorEl(null);
        setTimer(selectedTimer);
    }

    const addAudioToListening = async () => {
        try {
            const res = await api.addListeningPlaylists(audioData.id, position, audioData.playlist.id);
            const data = await res.data;
            if (data.error) {
                console.log(data.error);
                return;
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const onChangeAudioPosition = (value) => {
        setPosition(value);
        media.currentTime = value;
    }

    const handleLoopAudio = () => {
        const tmpLoopAudio = !media.loop;
        setLoopAudio(tmpLoopAudio);
        media.loop = tmpLoopAudio;
    }

    const handleChangeAudio = (type) => {
        if (type === 'next' && nextAudioId) {
            const nextUrl = `/audio-play/${nextAudioId}`;
            if (mode) {
                nextUrl += '?mode=all'
            }
            navigate.push(nextUrl);
        }
        if (type === 'prev' && prevAudioId) {
            const prevUrl = `/audio-play/${prevAudioId}`;
            if (mode) {
                nextUrl += '?mode=all'
            }
            navigate.push(prevUrl);
        }
    }

    const mainIconColor = COLORS.white;

    const timerItems = [
        'không hẹn giờ',
        '5 phút',
        '10 phút',
        '20 phút',
        '30 phút',
        '60 phút',
    ]

    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Widget>
                <Box
                    sx={{
                        ...flexStyle('center', 'center'),
                        columnGap: '36px',
                        width: '100%'
                    }}
                >
                    <Box
                        onClick={handleLoopAudio}
                        sx={{
                            textAlign: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <Loop
                            fill={COLORS.bg4}
                            bgcolor='none'
                        />
                        <Typography
                            sx={{
                                ...TEXT_STYLE.caption10Regular,
                                color: COLORS.contentIcon,
                                whiteSpace: 'nowrap',
                                marginTop: '9px',
                                fontWeight: loopAudio ? 'bold' : 'normal'
                            }}
                        >Lặp lại 1 bài</Typography>
                    </Box>
                    <IconButton
                        aria-label="previous song"
                        onClick={() => { handleChangeAudio('prev') }}
                    >
                        <SkipPreviousIcon
                            sx={{ width: '24px', height: '24px' }}
                            htmlColor={mainIconColor}
                        />
                    </IconButton>
                    <IconButton
                        sx={{
                            border: `1px solid ${COLORS.white}`
                        }}
                        aria-label={paused ? 'play' : 'pause'}
                        onClick={onPlayClick}
                        ref={playBtn}
                    >
                        {paused ? (
                            <PlayArrowIcon
                                sx={{ width: '24px', height: '24px' }}
                                htmlColor={mainIconColor}
                            />) : (
                            <PauseIcon sx={{ width: '24px', height: '24px' }} htmlColor={mainIconColor} />
                        )}
                    </IconButton>
                    <IconButton
                        aria-label="next song"
                        onClick={() => { handleChangeAudio('next') }}
                    >
                        <SkipNextIcon
                            sx={{ width: '24px', height: '24px' }}
                            htmlColor={mainIconColor}
                        />
                    </IconButton>
                    <Box
                        onClick={handleTimerClick}
                        sx={{
                            textAlign: 'center',
                            cursor: 'pointer'
                        }}
                    >
                        <Clock fill={COLORS.bg4} bgcolor='none' />
                        <Typography
                            sx={{
                                ...TEXT_STYLE.caption10Regular,
                                color: COLORS.contentIcon,
                                whiteSpace: 'nowrap',
                                marginTop: '4px'
                            }}
                        >{(timer === 0 || countDownTimerStr === '') ? 'Hẹn giờ' : `${countDownTimerStr}`}</Typography>
                    </Box>
                    <Dialog
                        open={openTimer}
                        onClose={handleTimerClose}
                        sx={{
                            '& .MuiDialog-paper': {
                                borderRadius: '30px',
                                bgcolor: COLORS.bg1,
                                width: '512px',
                                p: '36px 27px 32px 27px',
                                boxSizing: 'border-box',
                                ...flexStyle('center', 'center')
                            }

                        }}
                    >
                        <Typography
                            sx={{
                                ...TEXT_STYLE.h1,
                                color: COLORS.white,
                                mb: '46px'
                            }}
                        >Hẹn giờ</Typography>
                        <List
                            dense
                            sx={{
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            {timerItems.map((value, idx) => {
                                return (
                                    <ListItem
                                        key={value}
                                        secondaryAction={
                                            <Radio
                                                key={idx}
                                                // checked={}
                                                onChange={() => { handleToggle(idx) }}
                                                value={idx}
                                            />
                                        }
                                        sx={{
                                            p: 0,
                                            ...(idx > 0 && {
                                                borderTop: `1px solid ${COLORS.blackStroker}`,
                                                p: '22px 0'
                                            }),
                                            ...(idx === 0 && {
                                                pb: '22px'
                                            })
                                        }}
                                    >
                                        <ListItemText
                                            value={idx}
                                            onClick={handleSelectTimer}
                                            primary={value}
                                            sx={{
                                                ...TEXT_STYLE.h3,
                                                color: COLORS.bg4
                                            }}
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                        <Box
                            sx={{
                                ...flexStyle('center', 'center'),
                                columnGap: '16px',
                                width: '100%',
                                mt: '44px'
                            }}
                        >
                            <Button
                                sx={{
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    width: '50%',
                                    height: '48px',
                                    bgcolor: COLORS.bg3,
                                    ...TEXT_STYLE.title1,
                                    color: COLORS.white
                                }}
                                variant="contained"
                                color="error"
                            >
                                Huỷ
                            </Button>
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    borderRadius: '8px',
                                    width: '50%',
                                    height: '48px',
                                    bgcolor: COLORS.main,
                                    ...TEXT_STYLE.title1,
                                    color: COLORS.white
                                }}
                                variant="contained"
                                color="error"
                            >
                                Tiếp tục
                            </Button>
                        </Box>
                    </Dialog>
                </Box>
                <Box
                    sx={{
                        ...flexStyle('center', 'center'),
                        columnGap: '10px',
                        width: '100%',
                        mt: -2,
                        p: '0 25px',
                        boxSizing: 'border-box'
                    }}
                >
                    <TinyText>{formatDuration(position)}</TinyText>
                    <Slider
                        aria-label="time-indicator"
                        size="small"
                        value={position}
                        min={0}
                        step={1}
                        max={audioData?.duration}
                        onChange={(_, value) => { onChangeAudioPosition(value) }}
                        sx={{
                            height: 3,
                            color: '#CFD1E9',
                            '& .MuiSlider-track': {
                                color: '#754ADA'
                            },
                            '& .MuiSlider-thumb': {
                                width: 12,
                                height: 12,
                                color: COLORS.white,
                                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                '&:before': {
                                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                                        ? 'rgb(255 255 255 / 16%)'
                                        : 'rgb(0 0 0 / 16%)'
                                        }`,
                                },
                                '&.Mui-active': {
                                    width: 15,
                                    height: 15,
                                },
                            },
                            '& .MuiSlider-rail': {
                                opacity: 1,
                            },
                        }}
                    />
                    <TinyText>-{formatDuration(audioData?.duration)}</TinyText>
                </Box>
            </Widget>
            <WallPaper />
        </Box>
    )
}