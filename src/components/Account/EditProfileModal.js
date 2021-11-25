// import mui components
import {
    Typography,
    Dialog,
    Box,
    IconButton,
    Button,
    Avatar
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// import icons
import { Pencil } from '../Icons';

// import utils
import { flexStyle } from '../../utils/flexStyle';
import { COLORS, TEXT_STYLE, SCREEN_BREAKPOINTS } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

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
                '& .MuiDialog-paper': {
                    bgcolor: COLORS.bg1,
                    width: '512px',
                    height: '646px'
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
                    padding: '40px 49px 20px 50px',
                    boxSizing: 'border-box'
                }}
            >
                <Typography sx={{
                    marginTop: '40px',
                    ...TEXT_STYLE.h1,
                    color: COLORS.white
                }}>Thay đổi thông tin cá nhân</Typography>

                <Box
                    sx={{
                        width: '100%',
                        ...flexStyle('center', 'center'),
                        flexDirection: 'column',
                        rowGap: '45px'
                    }}
                >
                    <Box
                        sx={{
                            ...flexStyle('space-between', 'center'),
                            width: '100%'
                        }}
                    >
                        <Typography sx={{
                            ...TEXT_STYLE.h3,
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
                                width: isSm ? '160px' : '120px',
                                height: isSm ? '160px' : '120px'
                            }} alt="Remy Sharp" src={accountData.avtImgSrc}
                        />
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}