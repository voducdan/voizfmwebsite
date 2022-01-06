// import react
import { useEffect, useState } from 'react';

// import react router dom
import { useParams, useLocation } from "react-router-dom";

// import redux
import { useSelector, useDispatch } from 'react-redux';
import { selectPlayAudio } from '../../redux/playAudio';
import { setAudioData } from '../../redux/audio';

// import MUI components
import {
    Box,
    Avatar,
    Typography,
    TableContainer,
    Paper,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

// import others components
import InfoLabel from '../../components/Shared/InfoLabel';
import InfoValue from '../../components/Shared/InfoValue';
import ShareModal from '../../components/Shared/ShareModal';


// import services
import API from '../../services/api';

// import icons
import { Share } from '../../components/Icons/index';

// import utils
import { flexStyle } from '../../utils/flexStyle';
import { SCREEN_BREAKPOINTS, COLORS, TEXT_STYLE } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';
import convertSecondsToReadableString from '../../utils/convertSecondsToReadableString';

export default function AudioPlay() {
    const api = new API()

    const playing = useSelector(selectPlayAudio);
    const { id } = useParams();
    const { search } = useLocation();
    const playlistId = new URLSearchParams(search).get('playlist');

    const [playlist, setPlaylist] = useState({})
    const [openShareModal, setOpenShareModal] = useState(false);

    const windowSize = useWindowSize()
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    const dispatch = useDispatch();

    useEffect(() => {
        async function fectchPlaylist() {
            try {
                const res = await api.getPlaylistDetail(playlistId)
                if (res.status === 200) {
                    const data = await res.data.data;
                    setPlaylist(data);
                    dispatch(setAudioData(data));
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        fectchPlaylist();
    }, []);

    const handleOpenShareModal = () => {
        setOpenShareModal(true);
    }


    return (
        <Box
            sx={{
                ...(isSm ? flexStyle('center', 'center') : flexStyle('flex-start', 'center')),
                flexDirection: 'column',
                width: '95%',
                margin: isSm ? `0px auto 302px auto` : 'auto',
            }}
        >
            <Box
                sx={{
                    ...flexStyle('flex-end', 'center'),
                    columnGap: '36px',
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: isSm ? '20px 0 32px 0' : '35px 0'
                }}
            >
                <Box onClick={handleOpenShareModal}>
                    <Share bgfill='none' fill='none' stroke={COLORS.contentIcon} />
                </Box>
                <ShareModal isSm={isSm} open={openShareModal} setOpen={setOpenShareModal}></ShareModal>
                <ExpandMoreIcon sx={{ color: COLORS.contentIcon }} />
            </Box>
            <Box
                sx={{
                    ...(isSm ? flexStyle('center', 'center') : flexStyle('center', 'flex-start')),
                    ...(isSm && { flexDirection: 'column', rowGap: '32px' }),
                    columnGap: '75px',
                    width: '100%'
                }}
            >
                <Box>
                    <Avatar sx={{ width: isSm ? '235px' : '335px', height: isSm ? '235px' : '335px', borderRadius: '15px' }}
                        variant="rounded" alt="playlist avt" src={playlist?.avatar?.original_url} />
                </Box>
                <Box
                    sx={{
                        width: '90%'
                    }}
                >
                    <Typography
                        sx={{
                            ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h1),
                            color: COLORS.white,
                            marginBottom: '25px',
                            ...(isSm && { textAlign: 'center' })
                        }}
                    >
                        {playlist.name}
                    </Typography>
                    <TableContainer
                        sx={{
                            width: '100%',
                            bgcolor: 'transparent',
                            boxShadow: 'none'
                        }}
                        component={Paper}>
                        <Table
                            aria-label="playlist info tbl">
                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        sx={{
                                            borderBottom: 'none',
                                            padding: '0 0 21px 0'
                                        }}
                                        component="th" scope="row"
                                    >
                                        <InfoLabel title='Tác giả' />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderBottom: 'none',
                                            padding: '0 0 21px 0',
                                            textAlign: 'left'
                                        }}
                                        align="right"
                                    >
                                        <InfoValue value={playlist?.author_string} />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        sx={{
                                            borderBottom: 'none',
                                            padding: '0 0 21px 0'
                                        }}
                                        component="th" scope="row"
                                    >
                                        <InfoLabel title='Thời lượng' />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderBottom: 'none',
                                            padding: '0 0 21px 0',
                                            textAlign: 'left'
                                        }}
                                        align="right"
                                    >
                                        <Typography sx={{ ...TEXT_STYLE.content2, color: COLORS.VZ_Text_content }}>{convertSecondsToReadableString(playlist?.total_duration)}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        sx={{
                                            borderBottom: 'none',
                                            padding: '0 0 21px 0'
                                        }}
                                        component="th" scope="row"
                                    >
                                        <InfoLabel title='Kênh' />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderBottom: 'none',
                                            padding: '0 0 21px 0',
                                            textAlign: 'left'
                                        }}
                                        align="right"
                                    >
                                        <InfoValue value={playlist?.channel?.name} />
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        sx={{
                                            borderBottom: 'none',
                                            padding: '0 0 21px 0'
                                        }}
                                        component="th" scope="row"
                                    >
                                        <InfoLabel title='Người đọc' />
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            borderBottom: 'none',
                                            padding: '0 0 21px 0',
                                            textAlign: 'left'
                                        }}
                                        align="right"
                                    >
                                        <InfoValue value={playlist.voicers && playlist?.voicers[0]?.name} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {
                        (playing && !isSm) && (
                            <Button
                                sx={{
                                    ...TEXT_STYLE.title1,
                                    color: COLORS.white,
                                    textTransform: 'none',
                                    width: '280px',
                                    height: '48px',
                                    border: `1px solid ${COLORS.blackStroker}`,
                                    borderRadius: '6px',
                                    marginTop: '40px'
                                }}
                                variant="outlined"
                                endIcon={<GraphicEqIcon />}
                            >
                                Đang phát
                            </Button>
                        )
                    }
                </Box>
            </Box>
        </Box>
    )
}