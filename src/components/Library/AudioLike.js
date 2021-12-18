// import react
import { useState, useEffect } from 'react';

// import MUI component
import {
    Box,
    Typography,
    Divider,
    Button,
    Radio,
    FormControlLabel
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DeleteIcon from '@mui/icons-material/Delete';

// import others components
import PlaylistThumnail from '../../components/Shared/PlaylistThumbnail'

// import utils
import { flexStyle } from '../../utils/flexStyle'
import { TEXT_STYLE, COLORS, SCREEN_BREAKPOINTS } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';
import formatDuration from '../../utils/formatDuration';

// import service
import API from '../../services/api';

function TabPanel(props) {
    const { children, isSm } = props;
    return (
        <Box
            role="tabpanel"
        >
            <Box
                sx={{
                    ...flexStyle('flex-start', 'center'),
                    columnGap: '10%',
                    rowGap: isSm ? '18px' : '40px',
                    flexWrap: 'wrap'
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

const AudioDuration = (props) => {
    const { duration, isSm } = props;
    return (
        <Box
            sx={{
                ...flexStyle('flex-start', 'center'),
                columnGap: '6px'
            }}
        >
            <AccessTimeIcon sx={{ color: COLORS.contentIcon, width: isSm ? '12px' : '16px', height: isSm ? '12px' : '16px' }} />
            <Typography
                sx={{
                    ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
                    color: COLORS.contentIcon
                }}
            >
                {formatDuration(duration)}
            </Typography>
        </Box>
    )
}

export default function AudioLike() {
    const api = new API();
    const windowSize = useWindowSize();
    const [audioPage, setAudioPage] = useState(0);
    const [audioLikes, setAudioLikes] = useState([]);
    const [deleteList, setDeleteList] = useState([]);
    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [isSelectDeleteAll, setIsSelectDeleteAll] = useState(false);
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
    const pageLimit = 10;


    useEffect(() => {
        async function fetchAudioLikes() {
            const res = await api.getAudioLikes(audioPage, pageLimit);
            const data = await res.data;
            const initDeleteList = data.map(i => ({ id: i.id, checked: false }))
            setAudioLikes(data);
            setDeleteList(initDeleteList);
        }

        fetchAudioLikes()
    }, []);

    const handleGoDelete = () => {
        const tmpIsDeleteMode = !isDeleteMode;
        setIsDeleteMode(tmpIsDeleteMode)
    }

    const handleSubmitDelete = () => {
        return 0
    }

    const handleSelectAll = (e) => {
        const tmpIsSelectDeleteAll = !isSelectDeleteAll;
        var isCheckAll = false;
        if (tmpIsSelectDeleteAll) {
            isCheckAll = true;
        }
        const tmpDeleteList = deleteList.map(i => ({ id: i.id, checked: isCheckAll }));
        setDeleteList(tmpDeleteList);
        setIsSelectDeleteAll(tmpIsSelectDeleteAll);
    }

    const handleSelectDeleteItem = (e) => {
        const tmpDeleteList = [...deleteList];
        const id = e.target.value;
        tmpDeleteList[id]['checked'] = !tmpDeleteList[id]['checked'];
        const numCheckItems = tmpDeleteList.filter(i => i.checked === true).length;
        let isDeleteAll = numCheckItems === deleteList.length ? true : false;

        setIsSelectDeleteAll(isDeleteAll)
        setDeleteList(tmpDeleteList);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Typography
                sx={{
                    ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                    color: COLORS.white,
                    textAlign: 'left',
                    ...(isSm && { mb: '32px' })
                }}
            >Thích</Typography>
            <Box
                sx={{
                    ...(!isDeleteMode ? flexStyle('flex-end', 'center') : flexStyle('space-between', 'center')),
                    mt: '27px'
                }}
            >
                {
                    !isDeleteMode && (
                        <Button
                            onClick={handleGoDelete}
                            sx={{
                                ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                color: COLORS.white,
                                textTransform: 'none'
                            }}
                            endIcon={<DeleteIcon fontSize="small" sx={{ color: COLORS.VZ_Text_content }} />}
                        >Xóa tất cả</Button>
                    )
                }
                {
                    isDeleteMode && (
                        <FormControlLabel
                            control={
                                <Radio
                                    onClick={handleSelectAll}
                                    checked={isSelectDeleteAll}
                                    sx={{
                                        color: COLORS.placeHolder,
                                        pl: 0,
                                        '&.Mui-checked': {
                                            color: COLORS.second
                                        }
                                    }}
                                />
                            }
                            label="Chọn tất cả"
                            sx={{
                                color: COLORS.white,
                                ml: 0
                            }}
                        />
                    )
                }
                {
                    isDeleteMode && (
                        <Button
                            onClick={handleSubmitDelete}
                            sx={{
                                ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                color: COLORS.white,
                                textTransform: 'none'
                            }}
                        >Xóa</Button>
                    )
                }
            </Box>
            <Divider sx={{ borderColor: COLORS.blackStroker, mt: '13px', mb: isSm ? '32px' : '40px' }} />

            <TabPanel isSm={isSm}>
                {
                    audioLikes.map((i, idx) => (
                        <Box
                            key={i?.id}
                            sx={{
                                width: isSm ? '100%' : '45%',
                                ...flexStyle('flex-start', 'center')
                            }}
                        >
                            {
                                isDeleteMode && (
                                    <Radio
                                        checked={deleteList[idx] ? deleteList[idx]['checked'] : false}
                                        onClick={handleSelectDeleteItem}
                                        value={idx}
                                        sx={{
                                            color: COLORS.placeHolder,
                                            pl: 0,
                                            '&.Mui-checked': {
                                                color: COLORS.second
                                            }
                                        }}
                                    />
                                )
                            }
                            <Box>
                                <PlaylistThumnail
                                    name={i.name}
                                    src={i?.avatar?.thumb_url}
                                    authors={i?.author?.name}
                                    hasDelete={true}
                                    children={<AudioDuration isSm={isSm} duration={i?.duration} />}
                                />
                            </Box>
                        </Box>
                    ))
                }
            </TabPanel>
        </Box>
    )
}