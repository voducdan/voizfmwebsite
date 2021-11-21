// import react module
import { useState } from 'react'

// import redux reducer, actions
import { useSelector, useDispatch } from 'react-redux'
import { selectOpenLogin, handleCloseLogin } from '../../redux/openLogin'
import { setToken } from '../../redux/token'

// import MUI component
import {
    Box,
    Dialog,
    Typography,
    Divider,
    FormControl,
    Select,
    MenuItem,
    TextField,
    Stack,
    Button,
} from '@mui/material'

// import others components
import CustomDisabledButton from '../../components/CustomDisabledButton/CustomDisabledButton'

// import icons
import { GreenTick, FacebookButtonIcon, GoogleButtonIcon } from '../../components/Icons/index'

// import utils
import { COLORS, TEXT_STYLE, SCREEN_BREAKPOINTS } from '../../utils/constants'
import useWindowSize from '../../utils/useWindowSize'
import { validatePhoneNumber, validateOTP } from '../../utils/validate'



const flexCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const loginInfo = (content) => (
    <Box key={content} sx={{
        ...flexCenter,
        columnGap: '9px'
    }}>
        <GreenTick />
        <Typography sx={{
            ...TEXT_STYLE.caption12,
            color: COLORS.contentIcon
        }}>{content}</Typography>
    </Box>
)



export default function Login() {

    let windowSize = useWindowSize()
    const openLogin = useSelector(selectOpenLogin);
    const [isPhoneValid, setIsPhoneValid] = useState(false)
    const [isOTPValid, setIsOTPValid] = useState(false)
    const [waitForOTP, setWaitForOTP] = useState(false)
    const [loginSuccess, setLoginSuccess] = useState(false)

    const dispatch = useDispatch();

    const phonePrefix = 84
    const phonePrefixList = [84, 32, 27]

    const onClose = () => {
        dispatch(handleCloseLogin())
        setLoginSuccess(false)
        setIsPhoneValid(false)
        setIsOTPValid(false)
        setWaitForOTP(false)
    };
    const onPhoneChange = (event) => {
        if (validatePhoneNumber(event.target.value)) {
            setIsPhoneValid(true)
        }
        else {
            setIsPhoneValid(false)
        }
    }

    const onOTPChange = (event) => {
        if (validateOTP(event.target.value)) {
            setIsOTPValid(true)
        }
        else {
            setIsOTPValid(false)
        }
    }

    const onEnterPhone = () => {
        // Post phone to server here
        setWaitForOTP(true)
    }
    const onEnterOTP = () => {
        // Post OTP to server here
        setLoginSuccess(true)
        dispatch(setToken('token'))
    }

    return (
        <div>
            <Dialog
                open={openLogin}
                onClose={onClose}
                aria-labelledby="login-form-modal"
                aria-describedby="login-form-modal"
                PaperProps={{
                    style: {
                        backgroundColor: COLORS.bg1,
                        boxShadow: 'none',
                        borderRadius: '30px',
                        margin: 0,
                        width: windowSize.width > SCREEN_BREAKPOINTS.sm ? '512px' : '100%',
                        height: windowSize.width > SCREEN_BREAKPOINTS.sm ? 'auto' : '100%',
                        paddingTop: '40px',
                        paddingBottom: '56px',
                        display: flexCenter.display,
                        alignItems: flexCenter.alignItems
                    }
                }}
                sx={{
                    '& .MuiDialog-container': {
                        alignItems: windowSize.width > SCREEN_BREAKPOINTS.sm ? 'center' : 'flex-end'
                    }
                }}
            >
                <FormControl sx={{
                    backgroundColor: COLORS.bg1,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    ...flexCenter
                }}>
                    <Box sx={{
                        ...flexCenter,
                        flexDirection: 'column',
                        width: '80%',
                        ...(loginSuccess && { display: 'none' })
                    }}>
                        <Typography sx={{
                            ...(windowSize.width > SCREEN_BREAKPOINTS.sm ? TEXT_STYLE.h1 : TEXT_STYLE.h2),
                            color: COLORS.white
                        }}>
                            Đăng nhập hoặc đăng ký
                        </Typography>
                        <Box sx={{
                            display: flexCenter.display,
                            alignItems: 'flex-start',
                            justifyContent: flexCenter.justifyContent,
                            rowGap: '10px',
                            flexDirection: 'column',
                            marginTop: '24px',
                            marginBottom: '26px'
                        }}>
                            {
                                [
                                    'Tránh gặp vấn đề về tài khoản khi đổi điện thoại',
                                    'Gợi ý riêng những nội dung phù hợp với sở thích nghe',
                                    'Đồng bộ tài khoản, đăng nhập trên tất cả các thiết bị'
                                ].map(content => (
                                    loginInfo(content)
                                ))
                            }
                        </Box>
                        <Divider sx={{
                            backgroundColor: COLORS.blackStroker,
                            width: '100%'
                        }} />
                        <Box sx={{
                            display: waitForOTP ? 'none' : flexCenter.display,
                            alignItems: flexCenter.alignItems,
                            flexDirection: 'column',
                        }}>
                            <Box sx={{
                                marginTop: '32px',
                                width: '100%',
                                ...flexCenter,
                                flexDirection: 'column',
                                rowGap: '24px',
                                marginBottom: '24px',
                            }}>
                                <Typography sx={{
                                    ...TEXT_STYLE.title1,
                                    color: COLORS.white,
                                }}>Nhập số điện thoại của bạn để tiếp tục</Typography>
                                <Box sx={{
                                    width: '100%',
                                    display: flexCenter.display,
                                    columnGap: '16px',
                                    height: '49px'
                                }}>
                                    <Select
                                        id="select-phone-prefix"
                                        value={phonePrefix}
                                        label="phonePrefix"
                                        sx={{
                                            border: '1px solid #353535',
                                            borderRadius: '4px',
                                            color: COLORS.white,
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                border: "none"
                                            },
                                            '& .MuiSelect-icon': {
                                                color: COLORS.white
                                            }
                                        }}
                                    >
                                        {
                                            phonePrefixList.map(prefix => (
                                                <MenuItem key={prefix} value={prefix}>+{prefix}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                    <TextField
                                        sx={{
                                            borderRadius: '4px',
                                            border: '1px solid #353535',
                                            justifyContent: 'center',
                                            height: '100%',
                                            '& .MuiOutlinedInput-root': {
                                                height: '100%'
                                            },
                                            '& .MuiOutlinedInput-input': {
                                                color: COLORS.white,
                                                ...(windowSize.width > SCREEN_BREAKPOINTS.sm ? TEXT_STYLE.h2 : TEXT_STYLE.h3)
                                            }
                                        }} id="phone-number" placeholder="098775432" variant="outlined" onChange={onPhoneChange} />
                                </Box>
                                <CustomDisabledButton
                                    disabled={!isPhoneValid}
                                    onClick={onEnterPhone}
                                    style={{
                                        width: '100%',
                                        textTransform: 'none',
                                        marginBottom: windowSize.width > SCREEN_BREAKPOINTS.sm ? '20px' : '30px',
                                        height: '48px',
                                        ...(windowSize.width > SCREEN_BREAKPOINTS.sm ? TEXT_STYLE.title1 : TEXT_STYLE.title2),
                                    }} content={'Tiếp tục'} />
                            </Box>
                            <Typography sx={{
                                ...TEXT_STYLE.title1,
                                color: COLORS.white,
                                marginBottom: '24px'
                            }}>hoặc tiếp tục với</Typography>
                            <Stack sx={{ width: '100%' }} spacing={3} direction="column">
                                <Button sx={{ textTransform: 'none', height: '48px' }} variant="contained" color="primary" startIcon={<FacebookButtonIcon />}>Facebook</Button>
                                <Button sx={{ textTransform: 'none', height: '48px' }} variant="contained" color="error" startIcon={<GoogleButtonIcon />}>Google</Button>
                            </Stack>
                        </Box>
                        <Box sx={{
                            display: waitForOTP ? flexCenter.display : 'none',
                            alignItems: flexCenter.alignItems,
                            flexDirection: 'column',
                            rowGap: '25px'
                        }}>
                            <Typography sx={{
                                ...TEXT_STYLE.title1,
                                color: COLORS.white,
                            }}>Nhập số điện thoại của bạn để tiếp tục</Typography>
                            <TextField
                                sx={{
                                    borderRadius: '4px',
                                    border: '1px solid #353535',
                                    justifyContent: 'center',
                                    height: '49px',
                                    '& .MuiOutlinedInput-root': {
                                        height: '100%'
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: COLORS.white,
                                        ...(windowSize.width > SCREEN_BREAKPOINTS.sm ? TEXT_STYLE.h2 : TEXT_STYLE.h3)
                                    }
                                }} id="phone-number" placeholder="123456" variant="outlined" onChange={onOTPChange} />
                            <CustomDisabledButton
                                disabled={!isOTPValid}
                                onClick={onEnterOTP}
                                style={{
                                    width: '100%',
                                    textTransform: 'none',
                                    marginBottom: windowSize.width > SCREEN_BREAKPOINTS.sm ? '50px' : '40px',
                                    height: '48px'
                                }} content={'Tiếp tục'} />
                        </Box>
                    </Box>'
                    <Box
                        sx={{
                            display: loginSuccess ? flexCenter.display : 'none',
                            alignItems: flexCenter.alignItems,
                            flexDirection: 'column',
                            rowGap: '25px'
                        }}
                    >
                        <img src="/images/login_success.png" alt="login success img" />
                        <Typography sx={{
                            ...(windowSize.width > SCREEN_BREAKPOINTS.sm ? TEXT_STYLE.h2 : TEXT_STYLE.h3),
                            color: COLORS.white,
                        }}>Chúc mừng bạn!</Typography>
                        <Typography sx={{
                            ...(windowSize.width > SCREEN_BREAKPOINTS.sm ? TEXT_STYLE.content1 : TEXT_STYLE.content2),
                            color: COLORS.contentIcon,
                            textAlign: 'center',
                            width: '277px'
                        }}>Bạn đã đăng nhập thành công,
                            hãy trải nghiệm ứng dụng ngay bây giờ </Typography>
                    </Box>
                </FormControl>

            </Dialog>
        </div >
    )
}