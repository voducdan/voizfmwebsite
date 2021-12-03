// import react
import { useState } from 'react';

// import MUI components
import {
    Typography,
    Rating,
    TextField,
    Dialog,
    Button,
    Box
} from "@mui/material";

// import icons
import StarIcon from '@mui/icons-material/Star';

// import others component
import CustomDisabledButton from '../CustomDisabledButton/CustomDisabledButton';

// import utils
import { COLORS, TEXT_STYLE } from '../../utils/constants';
import { flexStyle } from '../../utils/flexStyle';

function RateModal(props) {
    const [isFormValid, setIsFormValid] = useState(true);
    const { open, setOpen, setOpenAfterRate, isSm } = props;

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = () => {
        handleClose()
        handleOpenAfterRateModal()
    }

    const handleOpenAfterRateModal = () => {
        setOpenAfterRate(true)
    }

    const onShareContentChange = (e) => {
        if (e.target.value === '') {
            setIsFormValid(true)
        }
        else {
            setIsFormValid(false)
        }
    }

    return (
        <Dialog
            sx={{
                '& .MuiDialog-paper': {
                    bgcolor: COLORS.bg1,
                    padding: isSm ? '16px' : '56px',
                    boxSizing: 'border-box',
                    borderRadius: isSm ? '10px' : '30px',
                    ...flexStyle('flex-start', 'center'),
                    width: isSm ? '95%' : '512px',
                    margin: 0
                }
            }}
            onClose={handleClose} open={open}>
            <Box>
                <Typography
                    sx={{
                        ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h1),
                        color: COLORS.white,
                        textAlign: 'center',
                        marginBottom: isSm ? '8px' : '32px'
                    }}
                >Voiz FM</Typography>
                <Typography
                    sx={{
                        ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                        color: COLORS.white,
                        textAlign: 'center'
                    }}
                >Bạn muốn chia sẻ cụ thể với Voiz không?</Typography>
                <Box
                    sx={{
                        ...flexStyle('flex-start', 'center'),
                        flexDirection: 'column',
                        rowGap: '32px',
                        margin: `${isSm ? '16px' : '48px'} 0`
                    }}
                >
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            columnGap: '15px'
                        }}
                    >
                        <Typography
                            sx={{
                                ...(isSm ? TEXT_STYLE.title3 : TEXT_STYLE.content2),
                                color: COLORS.white
                            }}
                        >Nội dung</Typography>
                        <Rating
                            sx={{
                                columnGap: '24px',
                                alignItem: 'center',
                                '& .MuiRating-iconEmpty': {
                                    color: COLORS.contentIcon
                                }
                            }}
                            emptyIcon={<StarIcon />}
                            icon={<StarIcon />}
                            name="playlist-rate" value={0.5} precision={0.5} />
                    </Box>
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            columnGap: '15px'
                        }}
                    >
                        <Typography
                            sx={{
                                ...(isSm ? TEXT_STYLE.title3 : TEXT_STYLE.content2),
                                color: COLORS.white
                            }}
                        >Giọng đọc</Typography>
                        <Rating
                            sx={{
                                columnGap: '24px',
                                alignItem: 'center',
                                '& .MuiRating-iconEmpty': {
                                    color: COLORS.contentIcon
                                }
                            }}
                            emptyIcon={<StarIcon />}
                            icon={<StarIcon />}
                            name="playlist-rate" value={1.5} precision={0.5} />
                    </Box>
                </Box>
                <TextField
                    sx={{
                        width: '100%',
                        '& .MuiOutlinedInput-input': {
                            color: COLORS.placeHolder,
                            bgcolor: COLORS.bg1,
                            ...TEXT_STYLE.content2
                        },
                        '& .MuiOutlinedInput-root': {
                            bgcolor: COLORS.bg1,
                            border: `1px solid ${COLORS.blackStroker}`
                        }
                    }}
                    onChange={onShareContentChange}
                    id="share text area" placeholder="Những đóng góp khác, ví dụ: Cảm nhận nội dung, góp ý nhạc nền, thắc mắc về sách,..." multiline rows={5} variant="outlined"
                />
                <Box
                    sx={{
                        ...flexStyle('center', 'center'),
                        columnGap: '16px',
                        width: '100%',
                        marginTop: '32px'
                    }}
                >
                    <Button
                        onClick={handleClose}
                        sx={{
                            width: '50%',
                            bgcolor: COLORS.bg3,
                            ...TEXT_STYLE.title1,
                            textTransform: 'none',
                            color: COLORS.white,
                            height: '48px',
                            borderRadius: '8px'
                        }}
                    >
                        Bỏ qua
                    </Button>
                    <CustomDisabledButton
                        onClick={handleSubmit}
                        disabled={isFormValid}
                        content='Gửi'
                        style={{
                            width: '50%',
                            bgcolor: COLORS.main,
                            ...TEXT_STYLE.title1,
                            textTransform: 'none',
                            color: COLORS.white,
                            height: '48px',
                            borderRadius: '8px'
                        }}
                    />
                </Box>
            </Box>
        </Dialog>
    )
}

function AfterRateModal(props) {
    const { open, setOpen, isSm } = props;
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Dialog
            onClose={handleClose} open={open}
            sx={{
                '& .MuiDialog-paper': {
                    bgcolor: COLORS.bg1,
                    borderRadius: isSm ? '10px' : '30px',
                    ...flexStyle('center', 'center'),
                    width: isSm ? '95%' : '512px',
                    margin: 0
                }
            }}>

            <Box
                sx={{
                    ...flexStyle('center', 'center'),
                    flexDirection: 'column',
                    width: '70%',
                    padding: '40px 0',
                    boxSizing: 'border-box'
                }}
            >
                <Typography
                    sx={{
                        ...TEXT_STYLE.h1,
                        color: COLORS.white
                    }}
                >Voiz FM</Typography>
                <Typography
                    sx={{
                        ...TEXT_STYLE.content1,
                        color: COLORS.contentIcon,
                        marginTop: '32px',
                        marginBottom: '40px',
                        textAlign: 'center'
                    }}
                >Cảm ơn đánh giá của bạn. Bạn có thể thay đổi điểm
                    đánh giá  bất cứ lúc nào.</Typography>
                <Button
                    onClick={handleClose}
                    sx={{
                        width: '50%',
                        bgcolor: COLORS.main,
                        ...TEXT_STYLE.title1,
                        textTransform: 'none',
                        color: COLORS.white,
                        height: '48px',
                        borderRadius: '8px'
                    }}
                >
                    OK
                </Button>
            </Box>

        </Dialog>
    )
}

export { RateModal, AfterRateModal }