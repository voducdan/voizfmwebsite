// import react module
import { useEffect, useState } from 'react';

// import MUI package 
import {
    Box,
    Avatar,
    Typography
} from '@mui/material';

// Import icons
import { VipMedal } from '../../components/Icons/index';

// import utils
import { SCREEN_BREAKPOINTS, HEADER_HEIGHT_MB, HEADER_HEIGHT, COLORS, TEXT_STYLE } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

// import services
import API from '../../services/api'

const flexStyle = (justifyContent, alignItems) => {
    return {
        display: 'flex',
        justifyContent: justifyContent,
        alignItems: alignItems
    }
}

export default function Account() {

    // User id from params
    const userId = '5ZOQS5'

    let [accountData, setAccountData] = useState({})

    useEffect(() => {
        const api = new API()

        function getUser() {
            api.getUser(userId)
                .then(res => {
                    setAccountData(res.data)
                })
                .catch(err => { console.log(err) })
        }
        getUser()
    }, [])

    const windowSize = useWindowSize()
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm
    const coverImgHeight = isSm ? 260 : 380


    return (
        <Box
            sx={flexStyle('center', 'center')}
        >
            <Box
                sx={{
                    position: 'fixed',
                    top: isSm ? HEADER_HEIGHT_MB : HEADER_HEIGHT,
                    width: '100%',
                    height: `${coverImgHeight}px`
                }}
            >
                <img style={{
                    objectFit: 'cover',
                    width: `100%`,
                    height: '100%',
                    left: 0,
                }} alt="cover img alt" src={accountData.coverImgSrc}></img>
            </Box>
            <Box
                sx={{
                    width: '90%',
                    position: 'relative'
                }}
            >
                <Box
                    sx={{
                        marginTop: `${coverImgHeight}px`,
                        transform: 'translate(0, -50%)',
                        backgroundColor: COLORS.bg2
                    }}
                >
                    <Box sx={{
                        padding: '20px',
                        ...flexStyle('flex-start', 'center'),
                        columnGap: '40px'
                    }}>
                        <Box sx={{ width: '15%' }}>
                            <Avatar
                                sx={{
                                    width: isSm ? '160px' : '120px',
                                    height: isSm ? '160px' : '120px'
                                }} alt="Remy Sharp" src={accountData.avtImgSrc}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: '30%',
                                ...flexStyle('center', 'flex-start'),
                                flexDirection: 'column',
                                rowGap: isSm ? '16px' : '25px'
                            }}
                        >
                            <Typography
                                sx={{
                                    ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                                    color: COLORS.white
                                }}>{accountData.name}</Typography>
                            <Typography
                                sx={{
                                    ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.h3),
                                    color: COLORS.bg4
                                }}
                            >ID: {accountData.id}</Typography>
                            {
                                accountData.isVip && (
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
                                            {`VIP (Còn ${Math.round((new Date(accountData.vipExpire) - new Date()) / (24 * 60 * 60 * 1000))} ngày)`}
                                        </Typography>
                                    </Box>

                                )
                            }
                        </Box>
                        <Box
                            sx={{
                                ...flexStyle('center', 'flex-end'),
                                flexDirection: 'column',
                                rowGap: '16px',
                                width: '50%'
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
                                        padding: '12px 15px',
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
                                    boxSizing: 'border-box'
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...TEXT_STYLE.h3,
                                        color: COLORS.white
                                    }}
                                >Bạn đang có  {new Intl.NumberFormat('en-IN').format(accountData.coin)} xu</Typography>
                                <button
                                    style={{
                                        color: COLORS.main,
                                        borderRadius: '20px',
                                        border: 'none',
                                        padding: '12px 15px',
                                        backgroundColor: COLORS.white,
                                        texTransform: 'none',
                                        ...TEXT_STYLE.title2
                                    }}
                                >Nạp thêm</button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}