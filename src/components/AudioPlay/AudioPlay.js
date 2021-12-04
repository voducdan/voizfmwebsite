// import react
import { useEffect, useState } from 'react';

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
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// import others components
import InfoLabel from '../../components/Shared/InfoLabel';
import InfoValue from '../../components/Shared/InfoValue';

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

    const [audioData, setAudioData] = useState({})
    const [playing] = useState(true)
    const windowSize = useWindowSize()
    const audioId = 1;
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    useEffect(() => {
        const api = new API()

        async function getAudio() {
            try {
                const res = await api.getAudio(audioId)
                if (res.status === 200) {
                    const data = await res.data.data
                    // fake missing data
                    data.avatar.original_url = 'https://picsum.photos/335/335?img=16'
                    data.avatar.thumb_url = 'https://picsum.photos/65/65?img=16'
                    data.voicer = 'Ngyễn lan Anh'
                    data.channel = {
                        id: 38,
                        name: "NXB Tổng Hợp TP.HCM"
                    }
                    console.log(data)
                    setAudioData(data)

                }
            }
            catch (err) {
                console.log(err)
            }
        }
        getAudio()
    }, [])



    return (
        <Box
            sx={{
                ...flexStyle('flex-start', 'center'),
                flexDirection: 'column'
            }}
        >
            <Box
                sx={{
                    ...flexStyle('flex-end', 'center'),
                    columnGap: '36px',
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '35px 60px'
                }}
            >
                <Share bgfill='none' fill='none' stroke={COLORS.contentIcon} />
                <ExpandMoreIcon sx={{ color: COLORS.contentIcon }} />
            </Box>
            <Box
                sx={{
                    ...flexStyle('center', 'flex-start'),
                    columnGap: '75px',
                    width: '100%'
                }}
            >
                <Box>
                    <Avatar sx={{ width: isSm ? '235px' : '335px', height: isSm ? '235px' : '335px', borderRadius: '15px' }}
                        variant="rounded" alt="audio avt" src={audioData?.avatar?.original_url} />
                </Box>
                <Box>
                    <Typography
                        sx={{
                            ...TEXT_STYLE.h1,
                            color: COLORS.white,
                            marginBottom: '25px'
                        }}
                    >
                        {audioData.name}
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
                                        <InfoValue value={audioData?.author?.name} />
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
                                        <Typography sx={{ ...TEXT_STYLE.content2, color: COLORS.VZ_Text_content }}>{convertSecondsToReadableString(audioData?.duration)}</Typography>
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
                                        <InfoValue value={audioData?.channel?.name} />
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
                                        <InfoValue value={audioData?.voicer} />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {
                        playing && (
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
                            >
                                Đang phát
                            </Button>
                        )
                    }
                </Box>
            </Box>
            <Box
                sx={{
                    ...flexStyle('center', 'center'),
                    boxSizing: 'border-box',
                    padding: '0 50px',
                    position: 'absolute',
                    width: '100%',
                    bottom: 0,
                    left: 0,
                    zIndex: 9999,
                    borderTop: `1px solid ${COLORS.blackStroker}`,
                    height: '100px'
                }}
            >
                <Box
                    sx={{
                        width: '30%',
                        ...flexStyle('flex-start', 'center'),
                        columnGap: '15px'
                    }}
                >
                    <Avatar sx={{ width: isSm ? '65px' : '65px', height: isSm ? '65px' : '65px' }} alt="audio avt" src={audioData?.avatar?.thumb_url} />
                    <Box
                        sx={{
                            ...flexStyle('center', 'flex-start'),
                            columnGap: '28px'
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    ...TEXT_STYLE.title1,
                                    color: COLORS.white,
                                    marginBottom: '8px'
                                }}
                            >
                                {audioData?.name}
                            </Typography>
                            <Typography
                                sx={{
                                    ...TEXT_STYLE.content3,
                                    color: COLORS.contentIcon
                                }}
                            >
                                Tác giả: {audioData?.author?.name}
                            </Typography>
                        </Box>
                        <FavoriteBorderIcon sx={{ color: COLORS.contentIcon }} />
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '40%'
                    }}
                >
                    <Box>

                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '15%'
                    }}
                >Danh sách audio</Box>
                <Box
                    sx={{
                        width: '15%'
                    }}
                >Danh sách audio</Box>
            </Box>
        </Box>
    )
}