
// import MUI components
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Popover
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// import utils
import { SCREEN_BREAKPOINTS, COLORS, TEXT_STYLE } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';
import { flexStyle } from '../../utils/flexStyle';

export default function AudioList(props) {

    const { anchorAudioList, onCloseAudioList } = props
    const open = Boolean(anchorAudioList);
    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    const audiosList = [
        {
            id: 1,
            title: 'Cách Nghĩ Để thành công trong cuộc sống thời hiện tại',
            duration: '14.24'
        },
        {
            id: 2,
            title: 'Trở về thôn quê',
            duration: '14.24'
        },
        {
            id: 3,
            title: '01.4 Tiến tới nghề nông Không-Làm-Gì-Cả',
            duration: '14.24'
        },
        {
            id: 4,
            title: 'Cách Nghĩ Để thành công trong cuộc sống thời hiện tại',
            duration: '14.24'
        },
        {
            id: 5,
            title: 'Trở về cuội nguồn',
            duration: '14.24'
        },
        {
            id: 6,
            title: 'Một lý do kiến nông nghiệp tự nhiên chưa được tốt',
            duration: '14.24'
        },
        {
            id: 7,
            title: 'Khi con người không hiểu được tự nhiên',
            duration: '14.24'
        },
        {
            id: 8,
            title: 'Bốn nguyên tắc',
            duration: '14.24'
        },
        {
            id: 9,
            title: 'Cách nghĩ để thành công trong cuộc sống hiện đại',
            duration: '14.24'
        }
    ]

    return (
        <Popover
            anchorEl={anchorAudioList}
            open={open}
            onClose={onCloseAudioList}
            anchorReference="anchorPosition"
            anchorPosition={{ top: isSm ? (windowSize.height - 67) : (windowSize.height - 105), left: isSm ? 0 : (windowSize.width - (windowSize.width / 4)) }}
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
                    bgcolor: COLORS.bg2,
                    maxHeight: isSm ? '70%' : 'calc(100% - 210px)'
                }
            }}
        >
            <Box
                sx={{
                    bgcolor: COLORS.bg2,
                    width: '100%',
                    height: '100%',
                    padding: isSm ? '26px 15px 0 15px' : '26px 32px 0 26px',
                    boxSizing: 'border-box',
                    borderRadius: '10px'
                }}
            >
                <Box
                    sx={{
                        ...flexStyle('space-between', 'flex-start'),
                        width: '100%'
                    }}
                >
                    <Typography
                        sx={{
                            ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                            color: COLORS.white,
                            marginBottom: isSm ? '26px' : '32px'
                        }}
                    >Danh sách audios</Typography>
                    <CloseIcon sx={{ color: COLORS.white }} onClick={onCloseAudioList} />
                </Box>
                <Box>
                    <List sx={{ width: '100%' }}>
                        {audiosList.map((value) => {
                            return (
                                <ListItem
                                    sx={{
                                        paddingLeft: 0,
                                        paddingRight: '20px',
                                        borderTop: `.5px solid ${COLORS.placeHolder}`,
                                        height: '72px'
                                    }}
                                    key={value.id}
                                >
                                    <ListItemButton role={undefined} onClick={() => (1)} dense>
                                        <ListItemIcon sx={{ minWidth: '22px' }}>
                                            <Typography
                                                sx={{
                                                    ...TEXT_STYLE.title1,
                                                    color: COLORS.bg4
                                                }}
                                            >{value.id}</Typography>
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                'span': {
                                                    ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                                    color: COLORS.white
                                                }
                                            }}
                                            id={`label-${value.id}`} primary={value.title} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Box>
        </Popover>

    )
}