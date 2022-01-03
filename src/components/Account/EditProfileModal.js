// import react
import { useState, useEffect } from 'react';

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
import {
    DatePicker,
    LocalizationProvider
} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CloseIcon from '@mui/icons-material/Close';

// import icons
import { Pencil, Birthday, Account, Mobile, Email } from '../Icons';

// import date-fns
import { format } from 'date-fns'

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

    const windowSize = useWindowSize();
    const { accountData } = props;
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm;
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const user = {
            firstName: accountData?.first_name,
            lastName: accountData?.last_name,
            email: accountData?.email,
            phoneNumber: accountData?.phone_number,
            birthday: accountData?.birthday,
            avatarUrl: accountData?.avatar?.original_url,
            avatar: null
        };
        setUserInfo(user);
    }, [accountData])

    const handleClose = () => {
        props.setOpen(false);
    }

    const handleChangeUserInfo = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        let user = { ...userInfo };
        user[name] = value;
        setUserInfo({ ...user });
    }

    const handleChangeBirthday = (birthday) => {
        const formatedBirthday = format(new Date(birthday), 'yyyy-MM-dd');
        let user = { ...userInfo };
        user['birthday'] = formatedBirthday;
        setUserInfo({ ...user });
    }

    const handleSubmitEditProfile = () => {
        console.log(userInfo)
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
                <Typography
                    sx={{
                        ...(isSm ? TEXT_STYLE.h2 : TEXT_STYLE.h1),
                        color: COLORS.white
                    }}
                >
                    Thay đổi thông tin cá nhân
                </Typography>

                <Box
                    sx={{
                        width: '100%',
                        ...flexStyle('center', 'center'),
                        flexDirection: 'column',
                        rowGap: '55px',
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
                            }} alt="Remy Sharp" src={accountData?.avatar?.thumb_url}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        ...flexStyle('center', 'center'),
                        flexDirection: 'column',
                        rowGap: '55px',
                        borderTop: `1px solid ${COLORS.blackStroker}`,
                        borderBottom: `1px solid ${COLORS.blackStroker}`,
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
                            ...flexStyle('center', 'center'),
                            width: '100%'
                        }}
                    >
                        <Avatar
                            sx={{
                                width: isSm ? '100%' : '80%',
                                height: isSm ? '140px' : '210px'
                            }} variant="rounded" alt="Remy Sharp" src={accountData?.avatar?.original_url}
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
                            name='firstName'
                            onChange={handleChangeUserInfo}
                            value={userInfo.firstName}
                            placeholder="Họ tên lót" variant="outlined"
                        />
                        <TextField
                            sx={{
                                ...textFieldStyle
                            }}
                            name='lastName'
                            onChange={handleChangeUserInfo}
                            value={userInfo.lastName}
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
                            name='email'
                            onChange={handleChangeUserInfo}
                            value={userInfo.email}
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
                            name='phoneNumber'
                            onChange={handleChangeUserInfo}
                            value={userInfo.phoneNumber}
                            placeholder="Số điện thoại" variant="outlined"
                        />
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            InputAdornmentProps={{

                            }}
                            value={null}
                            onChange={handleChangeBirthday}
                            InputAdornmentProps={{
                                position: 'start'
                            }}
                            components={{
                                OpenPickerIcon: Birthday
                            }}

                            renderInput={({ inputRef, inputProps, InputProps }) => {
                                return (
                                    <Box
                                        sx={{
                                            ...flexStyle('center', 'center'),
                                            width: '100%'
                                        }}
                                    >
                                        <TextField
                                            sx={{
                                                width: '100%',
                                                ...textFieldStyle,
                                                '& .MuiButtonBase-root': {
                                                    p: 0,
                                                    ml: 0
                                                }
                                            }}
                                            ref={inputRef}
                                            InputProps={{
                                                startAdornment: InputProps?.startAdornment
                                            }}
                                            name='birthday'
                                            value={userInfo.birthday}
                                            placeholder="Ngày tháng năm sinh" variant="outlined"
                                        />
                                    </Box>
                                )
                            }}
                        />
                    </LocalizationProvider>

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
                    onClick={handleSubmitEditProfile}
                >Lưu</Button>
            </Box>
        </Dialog>
    )
}