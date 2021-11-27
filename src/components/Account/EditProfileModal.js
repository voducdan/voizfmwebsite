// import mui components
import {
    Typography,
    Dialog,
    Box,
    IconButton,
    Button,
    Avatar,
    FormControl,
    TextField,
    InputAdornment
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// import icons
import { Pencil, Birthday, Account, Mobile, Email } from '../Icons';

// import utils
import { flexStyle } from '../../utils/flexStyle';
import { COLORS, TEXT_STYLE, SCREEN_BREAKPOINTS, HEADER_HEIGHT_MB } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

const textFieldStyle = {
    width: '100%',
    '& .MuiOutlinedInput-input': {
        bgcolor: COLORS.bg2,
        color: COLORS.white,
        ...TEXT_STYLE.content1,
        height: '50px',
        boxSizing: 'border-box'
    },
    '& .MuiOutlinedInput-root': {
        bgcolor: COLORS.bg2,
    }
}

export default function EditProfileModal(props) {

    const windowSize = useWindowSize()
    const { accountData } = props
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm


    const handleClose = () => {
        props.setOpen(false)
    }

    return (
        < Dialog
            sx={{
                left: '50%',
                top: isSm ? HEADER_HEIGHT_MB : 0,
                width: isSm ? '100%' : '920px',
                transform: 'translateX(-50%)',
                '& .MuiDialog-paper': {
                    bgcolor: COLORS.bg1,
                    maxWidth: '100%',
                    width: '100%',
                    margin: 0
                }

            }}
            open={props.open} onClose={handleClose}
        >
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: COLORS.white,
                    bgcolor: COLORS.bg2
                }}
            >
                <CloseIcon />
            </IconButton>
            <Box
                sx={{
                    ...flexStyle('flex-start', 'center'),
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    padding: '40px 16px 20px 16px',
                    boxSizing: 'border-box'
                }}
            >
                <Typography sx={{
                    marginTop: '40px',
                    ...(isSm ? TEXT_STYLE.h2 : TEXT_STYLE.h1),
                    color: COLORS.white
                }}>Thay đổi thông tin cá nhân</Typography>

                <Box
                    sx={{
                        width: '100%',
                        ...flexStyle('center', 'center'),
                        flexDirection: 'column',
                        rowGap: '45px',
                        borderTop: `1px solid ${COLORS.blackStroker}`,
                        margin: '32px 0',
                        paddingTop: '32px',
                        boxSizing: 'border-box'

                    }}
                >
                    <Box
                        sx={{
                            ...flexStyle('space-between', 'center'),
                            width: '100%'
                        }}
                    >
                        <Typography sx={{
                            ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.h3),
                            color: COLORS.white
                        }}>Ảnh đại diện</Typography>
                        <Button
                            sx={{
                                bgcolor: COLORS.bg2,
                                color: COLORS.contentIcon,
                                textTransform: 'none',
                                ...TEXT_STYLE.title2
                            }}
                            startIcon={<Pencil />}
                        >Chỉnh sửa</Button>
                    </Box>
                    <Box>
                        <Avatar
                            sx={{
                                width: isSm ? '140px' : '210px',
                                height: isSm ? '140px' : '210px'
                            }} alt="Remy Sharp" src={accountData.avtImgSrc}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        ...flexStyle('center', 'center'),
                        flexDirection: 'column',
                        rowGap: '45px',
                        borderTop: `1px solid ${COLORS.blackStroker}`,
                        borderBottom: `1px solid ${COLORS.blackStroker}`,
                        marginTop: '32px',
                        padding: '32px 0',
                        boxSizing: 'border-box'
                    }}
                >
                    <Box
                        sx={{
                            ...flexStyle('space-between', 'center'),
                            width: '100%'
                        }}
                    >
                        <Typography sx={{
                            ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.h3),
                            color: COLORS.white
                        }}>Ảnh bìa</Typography>
                        <Button
                            sx={{
                                bgcolor: COLORS.bg2,
                                color: COLORS.contentIcon,
                                textTransform: 'none',
                                ...TEXT_STYLE.title2
                            }}
                            startIcon={<Pencil />}
                        >Chỉnh sửa</Button>
                    </Box>
                    <Box
                        sx={{
                            ...flexStyle('center', 'center')
                        }}
                    >
                        <Avatar
                            sx={{
                                width: isSm ? '100%' : '80%',
                                height: isSm ? '140px' : '210px'
                            }} variant="rounded" alt="Remy Sharp" src={accountData.avtImgSrc}
                        />
                    </Box>
                </Box>
                <FormControl
                    sx={{
                        width: isSm ? '100%' : '80%',
                        ...flexStyle('center', 'center'),
                        flexDirection: 'column',
                        rowGap: '24px',
                        marginTop: '32px',
                        paddingBottom: '48px',
                        borderBottom: `1px solid ${COLORS.blackStroker}`
                    }}
                >
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            columnGap: '24px',
                            width: '100%'
                        }}
                    >
                        <TextField
                            sx={{
                                ...textFieldStyle
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Account />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Họ tên lót" variant="outlined"
                        />
                        <TextField
                            sx={{
                                ...textFieldStyle
                            }}
                            placeholder="Tên" variant="outlined"
                        />
                    </Box>
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            width: '100%'
                        }}
                    >
                        <TextField
                            sx={{
                                width: '100%',
                                ...textFieldStyle
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Địa chỉ email" variant="outlined"
                        />
                    </Box>
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            width: '100%'
                        }}
                    >
                        <TextField
                            sx={{
                                width: '100%',
                                ...textFieldStyle
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Mobile />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Số điện thoại" variant="outlined"
                        />
                    </Box>
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            width: '100%'
                        }}
                    >
                        <TextField
                            sx={{
                                width: '100%',
                                ...textFieldStyle
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Birthday />
                                    </InputAdornment>
                                ),
                            }}
                            placeholder="Ngày tháng năm sinh" variant="outlined"
                        />
                    </Box>
                </FormControl>
                <Button
                    sx={{
                        textTransform: 'none',
                        ...TEXT_STYLE.title1,
                        color: COLORS.white,
                        bgcolor: COLORS.main,
                        width: isSm ? '100%' : '50%',
                        height: '48px',
                        borderRadius: '8px',
                        margin: '21px 0'
                    }}
                >Lưu</Button>
            </Box>
        </Dialog>
    )
}