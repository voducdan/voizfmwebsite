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
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
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
    const [paused, setPaused] = useState(true);
    const [loopAudio, setLoopAudio] = useState(false);
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [countDownTimerStr, setCountDownTimer] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const openTimer = Boolean(anchorEl);

    useEffect(() => {
        dispatch(pauseAudio());
        setPaused(true);
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(audioUrl);
            hls.attachMedia(audio.current);
        }
        else if (audio.current.canPlayType('application/vnd.apple.mpegurl')) {
            audio.current.src = audioUrl;
            audio.current.addEventListener('loadedmetadata', function () {
                audio.current.play();
            });
        }
        audio.current.addEventListener('timeupdate', (e) => {
            const currentTime = Math.ceil(e.target.currentTime);
            setPosition(currentTime);
            if (currentTime === audioData.duration && !audio.current.loop) {
                if (mode && mode === 'all' && nextAudioId) {
                    navigate.push(`/audio-play/${nextAudioId}?mode=all`)
                }
                else {
                    setPaused(true);
                    audio.current.currentTime = 0;
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
            audio.current.pause();
        }
        else {
            audio.current.play();
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

    const handleTimerClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleTimerClose = () => {
        setAnchorEl(null);
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
        audio.current.currentTime = value;
    }

    const handleLoopAudio = () => {
        const tmpLoopAudio = !audio.current.loop;
        setLoopAudio(tmpLoopAudio);
        audio.current.loop = tmpLoopAudio;
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
                            textAlign: 'center'
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
                            textAlign: 'center'
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
                    <Popover
                        open={openTimer}
                        anchorEl={anchorEl}
                        onClose={handleTimerClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        sx={{
                            '& .MuiPopover-paper': {
                                bgcolor: '#292B32'
                            }
                        }}
                    >
                        <MenuList
                            sx={{
                                color: COLORS.contentIcon
                            }}
                        >
                            <MenuItem onClick={handleSelectTimer} value={0}>
                                <ListItemText>Không hẹn giờ</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleSelectTimer} value={5}>
                                <ListItemText>5 phút</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleSelectTimer} value={10}>
                                <ListItemText>10 phút</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleSelectTimer} value={20}>
                                <ListItemText>20 phút</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleSelectTimer} value={30}>
                                <ListItemText>30 phút</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleSelectTimer} value={60}>
                                <ListItemText>60 phút</ListItemText>
                            </MenuItem>
                        </MenuList>
                    </Popover>
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