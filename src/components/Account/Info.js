// import MUI package 
import {
    Box,
    Avatar,
    Typography
} from '@mui/material';


// Import icons
import {
    VipMedal
} from '../../components/Icons/index';

// import utils
import { flexStyle } from '../../utils/flexStyle';
import { SCREEN_BREAKPOINTS, COLORS, TEXT_STYLE } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';



export default function Info(props) {

    const windowSize = useWindowSize()
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm
    const coverImgHeight = isSm ? 260 : 380
    const infoPanelHeight = isSm ? 340 : 200

    return (
        <Box
            sx={{
                width: '95%',
                position: 'relative',
                marginBottom: '35px'
            }}
        >
            <Box
                sx={{
                    marginTop: isSm ? '182px' : `${coverImgHeight + 10 - (infoPanelHeight / 2)}px`,
                    backgroundColor: COLORS.bg2,
                    borderRadius: '30px'
                }}
            >
                <Box sx={{
                    padding: '20px',
                    ...(isSm ? {
                        ...flexStyle('center', 'flex-start'),
                        flexDirection: 'column'

                    } : {
                        ...flexStyle('flex-start', 'center')
                    })
                }}>
                    <Box
                        sx={{
                            ...flexStyle('flex-start', 'center'),
                            width: isSm ? '100%' : '50%',
                            columnGap: '40px'
                        }}
                    >
                        <Box>
                            <Avatar
                                sx={{
                                    width: isSm ? '160px' : '120px',
                                    height: isSm ? '160px' : '120px'
                                }} alt="Remy Sharp" src={props.accountData.avtImgSrc}
                            />
                        </Box>
                        <Box
                            sx={{
                                ...flexStyle('center', 'flex-start'),
                                flexDirection: 'column',
                                rowGap: isSm ? '16px' : '25px'
                            }}
                        >
                            <Typography
                                sx={{
                                    ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                                    color: COLORS.white
                                }}>{props.accountData.name}</Typography>
                            <Typography
                                sx={{
                                    ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.h3),
                                    color: COLORS.bg4
                                }}
                            >ID: {props.accountData.id}</Typography>
                            {
                                props.accountData.isVip && (
                                    <Box
                                        sx={{
                                            ...flexStyle('flex-start', 'center'),
                                            columnGap: '20px'
                                        }}
                                    >
                                        <VipMedal />
                                        <Typography
                                            sx={{
                                                ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.content2),
                                                color: COLORS.contentIcon
                                            }}
                                        >
                                            {`VIP (Còn ${Math.round((new Date(props.accountData.vipExpire) - new Date()) / (24 * 60 * 60 * 1000))} ngày)`}
                                        </Typography>
                                    </Box>

                                )
                            }
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            ...flexStyle('center', 'flex-end'),
                            flexDirection: 'column',
                            rowGap: '16px',
                            width: isSm ? '100%' : '50%',
                            ...(isSm && { marginTop: '40px' })
                        }}
                    >
                        <Box
                            sx={{
                                width: isSm ? '100%' : '80%',
                                paddingTop: '17px',
                                paddingLeft: isSm ? '16px' : '37px',
                                paddingBottom: '17px',
                                paddingRight: '20px',
                                ...flexStyle('space-between', 'center'),
                                backgroundColor: COLORS.error,
                                borderRadius: '6px',
                                height: '60px',
                                boxSizing: 'border-box'
                            }}
                        >
                            <Typography
                                sx={{
                                    ...TEXT_STYLE.h3,
                                    color: COLORS.white
                                }}
                            >Nâng cấp thành viên</Typography>
                            <button
                                style={{
                                    color: COLORS.error,
                                    borderRadius: '20px',
                                    border: 'none',
                                    padding: '10px 20px',
                                    backgroundColor: COLORS.white,
                                    texTransform: 'none',
                                    ...TEXT_STYLE.title2
                                }}
                            >Nâng cấp</button>
                        </Box>
                        <Box
                            sx={{
                                width: isSm ? '100%' : '80%',
                                paddingTop: '17px',
                                paddingLeft: isSm ? '16px' : '37px',
                                paddingBottom: '17px',
                                paddingRight: '20px',
                                ...flexStyle('space-between', 'center'),
                                backgroundColor: COLORS.main,
                                borderRadius: '6px',
                                height: '60px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Typography
                                sx={{
                                    ...TEXT_STYLE.h3,
                                    color: COLORS.white
                                }}
                            >Bạn đang có  {new Intl.NumberFormat('en-IN').format(props.accountData.coin)} xu</Typography>
                            <button
                                style={{
                                    color: COLORS.main,
                                    borderRadius: '20px',
                                    border: 'none',
                                    padding: '10px 20px',
                                    backgroundColor: COLORS.white,
                                    texTransform: 'none',
                                    ...TEXT_STYLE.title2
                                }}
                            >Nạp thêm</button>
                        </Box>
                    </Box>
                </Box>
            </Box >

        </Box >
    )
}