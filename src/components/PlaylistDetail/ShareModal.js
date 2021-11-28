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
import CustomDisabledButton from '../../components/CustomDisabledButton/CustomDisabledButton';

// import utils
import { COLORS, TEXT_STYLE } from '../../utils/constants';
import { flexStyle } from '../../utils/flexStyle';

export default function ShareModal(props) {
    const [isFormValid, setIsFormValid] = useState(true);
    const { open, setOpen } = props;

    const handleClose = () => {
        setOpen(false)
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
                    padding: '56px',
                    boxSizing: 'border-box',
                    borderRadius: '30px',
                    ...flexStyle('flex-start', 'center')
                }
            }}
            onClose={handleClose} open={open}>
            <Box>
                <Typography
                    sx={{
                        ...TEXT_STYLE.h1,
                        color: COLORS.white,
                        textAlign: 'center',
                        marginBottom: '32px'
                    }}
                >Voiz FM</Typography>
                <Typography
                    sx={{
                        ...TEXT_STYLE.title1,
                        color: COLORS.white,
                        textAlign: 'center'
                    }}
                >Bạn muốn chia sẻ cụ thể với Voiz không?</Typography>
                <Box
                    sx={{
                        ...flexStyle('flex-start', 'center'),
                        flexDirection: 'column',
                        rowGap: '32px',
                        margin: '48px 0'
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
                                ...TEXT_STYLE.content2,
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
                                ...TEXT_STYLE.content2,
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