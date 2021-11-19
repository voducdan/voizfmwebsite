import {
    Box,
    Modal,
    Typography,
    Divider,
    FormControl,
    Select,
    MenuItem,
    TextField,
    Stack,
    Button
} from '@mui/material'

import { GreenTick, SelectDownArrow } from '../../components/Icons/index'

import { COLORS, TEXT_STYLE } from '../../utils/constants'



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
            <Modal
                open={props.openLogin}
                onClose={props.handleCloseLogin}
                aria-labelledby="login-form-modal"
                aria-describedby="login-form-modal"
                sx={flexCenter}
            >
                <FormControl sx={{
                    backgroundColor: COLORS.bg1,
                    width: '512px',
                    height: '646px',
                    borderRadius: '30px',
                    ...flexCenter
                }}>
                    <Box sx={{
                        ...flexCenter,
                        flexDirection: 'column',
                        width: '400px'
                    }}>
                        <Typography sx={{ ...TEXT_STYLE.h1, color: COLORS.white }}>
                            Đăngn nhập hoặc đăng ký
                        </Typography>
                        <Box sx={{
                            display: flexCenter.display,
                            alignItems: 'flex-start',
                            justifyContent: flexCenter.justifyContent,
                            rowGap: '10px',
                            flexDirection: 'column'
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
                        <Divider />
                        <Box>
                            <Typography sx={{
                                ...TEXT_STYLE.title1,
                                color: COLORS.white
                            }}>Nhập số điện thoại của bạn để tiếp tục</Typography>
                            <Box sx={{
                                width: '100%',
                                display: flexCenter.display,
                                columnGap: '16px',
                                height: '50px'
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
                            <button disabled>Tiếp tục</button>
                        </Box>
                        <Typography>Hoặc tiếp tục với</Typography>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained">Facebook</Button>
                            <Button variant="contained">Google</Button>
                        </Stack>
                    </Box>
                </FormControl>
            </Modal>
        </div >
    )
}