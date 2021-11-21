// import MUI package 
import {
    Box,
    Avatar,
    Typography
} from '@mui/material';

// import utils
import { SCREEN_BREAKPOINTS, HEADER_HEIGHT_MB, HEADER_HEIGHT, COLORS } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

import { accountData } from '../../mockData/AccountData';

export default function Account() {

    const windowSize = useWindowSize()
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm
    const coverImgHeight = isSm ? 260 : 380

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
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
                    width: '80%',
                    // position: 'relative'
                }}
            >
                <Box
                    sx={{
                        marginTop: `${coverImgHeight}px`,
                        transform: 'translate(-50 %, 0)',
                        backgroundColor: COLORS.bg2
                    }}
                >
                    <Box sx={{
                        padding: '32px'
                    }}>
                        <Avatar
                            sx={{
                                width: isSm ? '160px' : '120px',
                                height: isSm ? '160px' : '120px'
                            }} alt="Remy Sharp" src={accountData.avtImgSrc}
                        />
                        <Box>
                            <Typography>{accountData.name}</Typography>
                            <Typography>ID: {accountData.id}</Typography>
                            <Typography>{accountData.isVip && `VIP (Còn ${Math.round((new Date(accountData.vipExpire) - new Date()) / (24 * 60 * 60 * 1000))} ngày)`}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}