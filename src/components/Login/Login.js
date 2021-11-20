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
    Button
} from '@mui/material'

import CustomDisabledButton from '../../components/CustomDisabledButton/CustomDisabledButton'

import { GreenTick, SelectDownArrow, FacebookButtonIcon, GoogleButtonIcon } from '../../components/Icons/index'

import { COLORS, TEXT_STYLE, SCREEN_BREAKPOINTS } from '../../utils/constants'



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

export default function Login(props) {

    const phonePrefix = 84
    const phonePrefixList = [84, 32, 27]

    return (
        <div>
            <Dialog
                open={props.openLogin}
                onClose={props.handleCloseLogin}
                aria-labelledby="login-form-modal"
                aria-describedby="login-form-modal"
                PaperProps={{
                    style: {
                        backgroundColor: COLORS.bg1,
                        boxShadow: 'none',
                        borderRadius: '30px',
                        margin: 0,
                        width: props.windowSize.width > SCREEN_BREAKPOINTS.sm ? '512px' : '100vw',
                        height: props.windowSize.width > SCREEN_BREAKPOINTS.sm ? '646px' : '100vh',
                        ...flexCenter,

                    },
                }}
            >
                <FormControl sx={{
                    backgroundColor: COLORS.bg1,
                    width: { sm: '100%', xs: '100vw' },
                    height: { sm: '100%', xs: '100vh' },
                    border: 'none',
                    ...flexCenter
                }}>
                    <Box sx={{
                        ...flexCenter,
                        flexDirection: 'column',
                        width: '80%'
                    }}>
                        <Typography sx={{
                            ...(props.windowSize.width > SCREEN_BREAKPOINTS.sm ? TEXT_STYLE.h1 : TEXT_STYLE.h2),
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
                            marginTop: '32px',
                            ...flexCenter,
                            flexDirection: 'column',
                            rowGap: '24px',
                            marginBottom: '24px'
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
                                    IconComponent={SelectDownArrow}
                                    onChange={() => { console.log('alo') }}
                                    sx={{
                                        border: '1px solid #353535',
                                        borderRadius: '4px',
                                        color: COLORS.white,
                                        'div': {
                                            padding: '16.5px 14px'
                                        }
                                    }}
                                >
                                    {
                                        phonePrefixList.map(prefix => (
                                            <MenuItem key={prefix} value={prefix}>+{prefix}</MenuItem>
                                        ))
                                    }
                                </Select>
                                <TextField sx={{
                                    borderRadius: '4px',
                                    border: '1px solid #353535',
                                    justifyContent: 'center',
                                    height: '100%',
                                    'div': {
                                        height: '100%'
                                    },
                                    'input': {
                                        color: COLORS.placeHolder,
                                        ...TEXT_STYLE.h2
                                    }
                                }} id="phone-number" placeholder="098775432" variant="outlined" />
                            </Box>
                            <CustomDisabledButton
                                style={{
                                    width: '100%',
                                    textTransform: 'none',
                                    marginBottom: props.windowSize.width > SCREEN_BREAKPOINTS.sm ? '50px' : '40px',
                                    height: '48px'
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
                </FormControl>
            </Dialog>
        </div >
    )
}