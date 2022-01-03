// import react
import { useEffect, useState } from 'react';

// import react router dom
import { Link, useParams } from "react-router-dom";

// import MUI components
import {
    Typography,
    Box,
    Button,
    IconButton
} from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

// import utils
import { SCREEN_BREAKPOINTS, TEXT_STYLE, COLORS, DRAWER_WIDTH } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';
import { flexStyle } from '../../utils/flexStyle'

// import service
import API from '../../services/api';

export default function ChannelDetail() {

    const api = new API();
    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
    const { id } = useParams();
    const [channel, setChannel] = useState([]);

    useEffect(() => {
        async function fetchChannel() {
            const res = await api.getChannel(id);
            const data = await res.data.data;
            setChannel(data);
        }

        fetchChannel();
    }, [])

    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    minHeight: '40vh',
                    ...flexStyle('flex-end', 'center'),
                    background: '#222530',
                    p: '50px 0',
                    boxSizing: 'border-box'
                }}
            >
                <Box
                    sx={{
                        width: '95%',
                        ...flexStyle('center', 'center'),
                        columnGap: '48px',
                        height: '210px',
                        pr: '50px',
                        boxSizing: 'border-box'
                    }}
                >
                    <img
                        style={{
                            width: isSm ? '39px' : '210px',
                            height: isSm ? '39px' : '100%',
                        }} alt={`image ${channel?.name}`} src={channel?.avatar?.thumb_url}
                    />
                    <Box
                        sx={{
                            height: '100%',
                            width: 'calc(100% - 210px)',
                            ...flexStyle('flex-start', 'flex-start'),
                            columnGap: '20%'
                        }}
                    >
                        <Box
                            sx={{
                                ...flexStyle('space-between', 'center'),
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        width: '100%',
                                        ...TEXT_STYLE.h2,
                                        color: COLORS.white
                                    }}
                                >{channel?.name}</Typography>
                                <Box
                                    sx={{
                                        ...flexStyle('flex-start', 'center'),
                                        borderLeft: `1px solid ${COLORS.white}`,
                                        pl: '8px',
                                        columnGap: '4px',
                                        mt: '16px'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            ...TEXT_STYLE.h3,
                                            color: COLORS.second
                                        }}
                                    >{channel?.channel_counter?.bookmarks_count}</Typography>
                                    <Typography
                                        sx={{
                                            ...TEXT_STYLE.h3,
                                            color: COLORS.contentIcon
                                        }}
                                    >theo dõi</Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: '100%'
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...TEXT_STYLE.content1,
                                        color: COLORS.VZ_Text_content
                                    }}
                                >{channel?.description}</Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                ...flexStyle('center', 'center'),
                                columnGap: '10%'
                            }}
                        >
                            <IconButton>
                                <ShareOutlinedIcon sx={{ color: COLORS.contentIcon }} />
                            </IconButton>
                            <Button
                                // onClick={() => { handleBookmark(channel.is_bookmark, channel.id) }}
                                sx={{
                                    ...TEXT_STYLE.title1,
                                    color: COLORS.white,
                                    borderRadius: '22px',
                                    height: isSm ? '28px' : '48px',
                                    textTransform: 'none',
                                    bgcolor: channel?.is_bookmark ? COLORS.bg3 : COLORS.main,
                                    whiteSpace: 'nowrap',
                                    pl: '24px',
                                    pr: '24px',
                                    ':hover': {
                                        bgcolor: channel?.is_bookmark ? COLORS.bg3 : COLORS.main
                                    }
                                }}
                                startIcon={channel?.is_bookmark ? <CheckIcon /> : <AddIcon />}
                            >{channel?.is_bookmark ? 'Hủy theo dõi' : 'Theo dõi'}</Button>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}