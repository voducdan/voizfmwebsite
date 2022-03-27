// import react
import { useEffect, useState } from 'react';

// import next router
import { useRouter } from 'next/router';

// import redux
import { useSelector } from 'react-redux';
import { selectPlayAudio } from '../../redux/playAudio';

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
import ShareModal from '../../components/Shared/ShareModal';

// import icons
import { Share } from '../../components/Icons/index';

// import utils
import { flexStyle } from '../../utils/flexStyle';
import { SCREEN_BREAKPOINTS, COLORS, TEXT_STYLE } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';
import convertSecondsToReadableString from '../../utils/convertSecondsToReadableString';

export default function AudioPlay({ audio }) {
    const playing = useSelector(selectPlayAudio);

    const router = useRouter();

    const [id, setId] = useState(null);
    const [url, setUrl] = useState(null);
    const [openShareModal, setOpenShareModal] = useState(false);

    const windowSize = useWindowSize()
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    useEffect(() => {
        if (id) {
            setUrl(window.location.href);
        }
    }, [id]);

    useEffect(() => {
        const { id } = router.query;
        setId(id);
    }, [router.query]);

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
                '&::before': {
                    content: "''",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: "url('/images/audioplaybg.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    opacity: 0.4
                }
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
                <Box
                    sx={{
                        cursor: 'pointer'
                    }}
                    onClick={handleOpenShareModal}
                >
                    <Share bgfill='none' fill='none' stroke={COLORS.contentIcon} />
                </Box>
                <ShareModal url={url} isSm={isSm} open={openShareModal} setOpen={setOpenShareModal}></ShareModal>
                <ExpandMoreIcon sx={{ color: COLORS.contentIcon }} />
            </Box>
            <Box
                sx={{
                    ...(isSm ? flexStyle('center', 'center') : flexStyle('center', 'flex-start')),
                    ...(isSm && { flexDirection: 'column', rowGap: '32px' }),
                    width: '100%',
                    columnGap: '75px',
                    mb: '100px'
                }}
            >
                <Box
                    sx={{
                        width: isSm ? '70%' : '45%',
                        ...(isSm ? flexStyle('center', 'flex-start') : flexStyle('flex-end', 'flex-start'))
                    }}
                >
                    <Avatar
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: isSm ? '235px' : '335px',
                            height: isSm ? '235px' : '335px',
                            borderRadius: '15px',
                            'img': {
                                objectFit: 'fill'
                            }
                        }}
                        variant="rounded"
                        alt="playlist avt"
                        src={audio?.avatar?.original_url || audio?.playlist?.avatar?.original_url} />
                </Box>
                <Box
                    sx={{
                        width: '55%'
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
                        {audio?.playlist?.name}
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
                                            width: isSm ? '50%' : '25%',
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
                                        <Typography
                                            sx={{
                                                ...TEXT_STYLE.content2,
                                                color: COLORS.VZ_Text_content
                                            }}
                                        >{audio?.playlist?.author_string}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        sx={{
                                            width: isSm ? '50%' : '25%',
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
                                        <Typography sx={{ ...TEXT_STYLE.content2, color: COLORS.VZ_Text_content }}>{convertSecondsToReadableString(audio?.playlist?.total_duration)}</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        sx={{
                                            width: isSm ? '50%' : '25%',
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
                                        <Typography
                                            sx={{
                                                ...TEXT_STYLE.content2,
                                                color: COLORS.VZ_Text_content
                                            }}
                                        >{audio?.playlist?.channel?.name}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell
                                        sx={{
                                            width: isSm ? '50%' : '25%',
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
                                        <Typography
                                            sx={{
                                                ...TEXT_STYLE.content2,
                                                color: COLORS.VZ_Text_content
                                            }}
                                        >{audio?.playlist?.voicers[0]?.name}
                                        </Typography>
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
                                    marginTop: '40px',
                                    cursor: 'text'
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