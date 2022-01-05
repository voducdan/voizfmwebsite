// import MUI package 
import {
    Box,
    Avatar,
    Typography,
    Button
} from '@mui/material';

// import react router dom
import { Link } from 'react-router-dom';

// Import icons
import {
    VipMedal
} from '../../components/Icons/index';

// import utils
import { flexStyle } from '../../utils/flexStyle';
import { SCREEN_BREAKPOINTS, COLORS, TEXT_STYLE } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

export default function Info(props) {

    const { accountData } = props;
    const windowSize = useWindowSize()
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
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
                            columnGap: isSm ? '26px' : '40px'
                        }}
                    >
                        <Box>
                            <Avatar
                                sx={{
                                    width: isSm ? '160px' : '120px',
                                    height: isSm ? '160px' : '120px'
                                }} alt="Remy Sharp" src={accountData?.avatar?.thumb_url}
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
                                }}>{`${accountData?.first_name} ${accountData?.last_name}`}</Typography>
                            <Box
                                sx={{
                                    ...flexStyle('flex-start', 'center'),
                                    columnGap: '20px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.h3),
                                        color: COLORS.bg4
                                    }}
                                >ID: </Typography>
                                <Typography
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.h3),
                                        color: COLORS.bg4
                                    }}
                                >{accountData?.id}</Typography>
                            </Box>

                            <Box
                                sx={{
                                    ...flexStyle('flex-start', 'center'),
                                    columnGap: '18px'
                                }}
                            >
                                <VipMedal />
                                <Typography
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.content2),
                                        color: COLORS.contentIcon
                                    }}
                                >
                                    {`${accountData?.promotion?.toUpperCase()} (Còn ${Math.floor(accountData?.user_resource?.remaining_minutes / 60)} ngày)`}
                                </Typography>
                            </Box>

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
                                width: '100%',
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
                            <Link
                                to='/up-vip'
                                style={{
                                    textDecoration: 'none'
                                }}
                            >
                                <Button
                                    style={{
                                        color: COLORS.error,
                                        borderRadius: '20px',
                                        border: 'none',
                                        backgroundColor: COLORS.white,
                                        textTransform: 'none',
                                        ...TEXT_STYLE.title2
                                    }}
                                >Nâng cấp
                                </Button>
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                                paddingTop: '17px',
                                paddingLeft: isSm ? '16px' : '37px',
                                paddingBottom: '17px',
                                paddingRight: '20px',
                                ...flexStyle('space-between', 'center'),
                                backgroundColor: COLORS.main,
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
                            >Bạn đang có  {new Intl.NumberFormat('en-IN').format(accountData?.user_resource?.remaining_coins)} xu</Typography>
                            <Button
                                style={{
                                    color: COLORS.main,
                                    borderRadius: '20px',
                                    border: 'none',
                                    backgroundColor: COLORS.white,
                                    textTransform: 'none',
                                    ...TEXT_STYLE.title2
                                }}
                            >Nạp thêm
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box >

        </Box >
    )
}