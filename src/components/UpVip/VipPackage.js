// import MUI components
import {
    Box,
    Typography,
    Paper,
    Button,
    Divider
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

// import utils
import { flexStyle } from '../../utils/flexStyle'
import { TEXT_STYLE, COLORS, SCREEN_BREAKPOINTS } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';
import formatPrice from '../../utils/formatPrice';

const VipPackageBenefitItem = (props) => {
    const { benefit, idx, isSm } = props
    return (
        <Box
            sx={{
                ...flexStyle('center', 'center'),
                columnGap: isSm ? '6px' : '20px'
            }}
        >
            <CheckIcon sx={{ color: '#5EC174' }} />
            <Typography
                sx={{
                    ...(isSm ? TEXT_STYLE.caption10Regular : TEXT_STYLE.content1),
                    color: idx >= 2 ? COLORS.second : COLORS.contentIcon
                }}
            >{benefit}</Typography>
        </Box >
    )
}

const VipPackageBaper = (props) => {
    const { bgcolor, elevation, height, name, price, time, benefit, isSm } = props
    return (
        <Paper
            sx={{
                bgcolor: bgcolor,
                height: `${height}px`,
                borderRadius: '10px',
                ...((height === 378 || height === 202) && { border: '2px solid #F68C2D' })
            }}
            elevation={elevation}>
            {
                !isSm && (
                    <Typography
                        sx={{
                            ...TEXT_STYLE.h2,
                            color: COLORS.white,
                            textAlign: 'center',
                            mt: '26px'
                        }}
                    >{name}</Typography>
                )
            }
            <Typography
                sx={{
                    ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.title0),
                    color: COLORS.white,
                    textAlign: 'center',
                    mt: isSm ? '23px' : '32px'
                }}
            >{formatPrice(price)}đ</Typography>
            <Typography
                sx={{
                    ...(isSm ? TEXT_STYLE.VZ_Text_content : TEXT_STYLE.h2),
                    color: isSm ? COLORS.white : COLORS.contentIcon,
                    textAlign: 'center',
                    mt: isSm ? '5px' : '16px'
                }}
            >{time}</Typography>
            <Divider
                sx={{
                    borderColor: COLORS.placeHolder,
                    margin: isSm ? '12px 8px' : '24px 52px'
                }}
            />
            <Box
                sx={{
                    ...flexStyle('center', 'flex-start'),
                    flexDirection: 'column',
                    rowGap: isSm ? '4px' : '9px',
                    ml: isSm ? '5%' : '10%',
                    mr: isSm ? '5%' : '10%',
                    mb: '22px'
                }}
            >
                {
                    benefit.map((item, idx) => (<VipPackageBenefitItem isSm={isSm} key={idx} benefit={item} idx={idx} />))
                }
            </Box>
        </Paper>
    )
}

const vipPackages = [
    {
        name: 'Tiêu chuẩn',
        price: 99000,
        time: '1 tháng',
        benefit: [
            'Nghe thoải mái',
            'Được tải về đt'
        ]
    },
    {
        name: 'Tiết kiệm',
        price: 199000,
        time: '3 tháng',
        benefit: [
            'Nghe thoải mái',
            'Được tải về đt',
            'Tiết kiệm 33%'
        ]
    },
    {
        name: 'Tiết kiệm',
        price: 9000,
        time: '60 phút',
        benefit: [
            'Nghe thoải mái',
            'Được tải về đt',
            'Tiết kiệm 33%'
        ]
    }

]

export default function VipPackage() {

    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    return (
        <Box>
            <Box
                sx={{
                    pt: isSm ? '24px' : '32px',
                    mb: isSm ? '24px' : '62px'
                }}
            >
                <Typography
                    sx={{
                        ...TEXT_STYLE.h1,
                        color: COLORS.white,
                        textAlign: 'center'
                    }}
                >Các gói thành viên VIP</Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    padding: isSm ? '0 16px' : '0 49px',
                    textAlign: 'center',
                    boxSizing: 'border-box'
                }}
            >
                <Box
                    sx={{
                        ...flexStyle('center', 'center'),
                        width: '100%',
                        '& > :not(style)': {
                            width: isSm ? 'calc(100% / 3)' : 'calc(100% / 4)',
                            maxHeight: 378
                        },
                    }}
                >
                    {
                        vipPackages.map((p, idx) => (
                            <VipPackageBaper
                                isSm={isSm}
                                key={idx}
                                bgcolor={idx === 1 ? COLORS.bg3 : COLORS.bg2}
                                elevation={idx === 1 ? 1 : 2}
                                height={isSm ? (idx === 1 ? 202 : 194) : (idx === 1 ? 378 : 348)}
                                name={p.name}
                                price={p.price}
                                time={p.time}
                                benefit={p.benefit}
                            />
                        ))
                    }
                </Box>

                <Button
                    sx={{
                        textTransform: 'none',
                        bgcolor: COLORS.error,
                        ...TEXT_STYLE.title1,
                        color: COLORS.white,
                        borderRadius: '8px',
                        height: '48px',
                        width: isSm ? '100%' : 'calc(100% / 4)',
                        margin: isSm ? '32px auto 32px auto' : '56px auto 32px auto'
                    }}
                >Đăng ký ngay
                </Button>

            </Box>
            <Box
                sx={{
                    width: '100%',
                    textAlign: 'center'
                }}
            >
                <Typography
                    sx={{
                        ...TEXT_STYLE.title1,
                        color: COLORS.white
                    }}
                >Nghe thoải mái *, trừ dần theo thực tế sử dụng</Typography>
                <Typography
                    sx={{
                        ...TEXT_STYLE.content1,
                        color: COLORS.VZ_Text_content,
                        mt: '8px'
                    }}
                >Không tự động gia hạn, phù hợp cho người mới bắt đầu</Typography>
                <Typography
                    sx={{
                        ...TEXT_STYLE.content1,
                        color: COLORS.bg4,
                        mt: '40px',
                        textDecoration: 'underline'
                    }}
                >Hỗ trợ khi gặp vấn đề trong thanh toán</Typography>

            </Box>
        </Box>
    )
}