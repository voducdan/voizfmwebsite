// import react module
import { useEffect, useState } from 'react';

// import MUI package 
import { styled } from '@mui/material/styles';
import {
    Box,
    Avatar,
    Typography,
    Tabs,
    Tab,
    Button,
    Menu,
    MenuItem
} from '@mui/material';


// Import icons
import {
    VipMedal,
    Pencil,
    HorizontalMore,
    RightArrow,
    Save,
    Share,
    Feedback,
    Rate
} from '../../components/Icons/index';

// import others components
import TabPanel from '../../components/TabPanel/TabPanel';

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


const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-flexContainer': {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 110,
        width: '100%',
        backgroundColor: COLORS.main,
    },
});


const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        marginRight: theme.spacing(1),
        color: COLORS.contentIcon,
        ...TEXT_STYLE.title2,
        padding: '12px 16px',
        margin: 0,
        '&.Mui-selected': {
            color: COLORS.white,
        },
        '&.Mui-focusVisible': {
            backgroundColor: COLORS.main,
        },
    }),
);

export default function Account() {

    const [value, setValue] = useState(0);
    const [accAnchorEl, setAccAnchorEl] = useState(null);
    const openMore = Boolean(accAnchorEl);

    // User id from params
    const userId = '5ZOQS5'

    let [accountData, setAccountData] = useState({})

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickMore = (event) => {
        setAccAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAccAnchorEl(null);
    };

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
            sx={{
                ...flexStyle('center', 'center'),
                flexDirection: 'column'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: isSm ? HEADER_HEIGHT_MB : HEADER_HEIGHT,
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
                    width: '95%',
                    position: 'relative'
                }}
            >
                <Box
                    sx={{
                        marginTop: `${coverImgHeight}px`,
                        transform: 'translate(0, -50%)',
                        backgroundColor: COLORS.bg2,
                        borderRadius: '30px'
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
                                >Bạn đang có  {new Intl.NumberFormat('en-IN').format(accountData.coin)} xu</Typography>
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
                </Box>

            </Box>
            <Box
                sx={{
                    width: '95%',
                    borderRadius: '10px'
                }}
            >
                <StyledTabs
                    value={value}
                    onChange={handleTabChange}
                    aria-label="account tab"
                >
                    <StyledTab label="Lịch sử giao dịch" />
                    <StyledTab label="Thông tin ứng dụng" />
                    <StyledTab label="Mời bạn bè" />
                    <StyledTab label="Trở thành creator" />
                    <StyledTab label="Quét mã QR" />
                    <Box sx={{
                        width: '30%',
                        marginLeft: '16px'
                    }}>
                        <Button
                            sx={{
                                width: '100%',
                                height: '36px',
                                bgcolor: COLORS.bg2,
                                color: COLORS.contentIcon,
                                textTransform: 'none',
                                ...TEXT_STYLE.title2
                            }}
                            startIcon={<Pencil />}
                        >Thay đổi thông tin cá nhân</Button>
                    </Box>
                    <Box
                        sx={{
                            width: '81px',
                            height: '36px',
                            marginLeft: '11px',
                            bgcolor: COLORS.bg2,
                            borderRadius: '4px',
                            ...flexStyle('center', 'center')
                        }}
                    >
                        <Button
                            id="account-more-button"
                            aria-controls="account-more"
                            aria-haspopup="true"
                            aria-expanded={openMore ? 'true' : undefined}
                            onClick={handleClickMore}
                        >
                            <HorizontalMore />
                        </Button>
                        <Menu
                            sx={{
                                '& .MuiMenu-paper': {
                                    padding: '24px',
                                    width: '360px',
                                    bgcolor: COLORS.bg2
                                }
                            }}
                            id="account-more"
                            anchorEl={accAnchorEl}
                            open={openMore}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'account-more'
                            }}
                        >
                            <MenuItem
                                onClick={() => { console.log(1) }}
                            >
                                <Button sx={{
                                    ...TEXT_STYLE.content2,
                                    color: COLORS.white,
                                    textTransform: 'none',
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    '& .MuiButton-endIcon': {
                                        marginLeft: '113px',
                                        position: 'absolute',
                                        right: 0
                                    },
                                    '& .MuiButton-startIcon': {
                                        marginRight: '34px'
                                    }
                                }}
                                    endIcon={<RightArrow fill={COLORS.contentIcon} />}
                                    startIcon={<Save />}
                                >Điều khoản sử dụng
                                </Button>
                            </MenuItem>
                            <MenuItem>
                                <Button sx={{
                                    ...TEXT_STYLE.content2,
                                    color: COLORS.white,
                                    textTransform: 'none',
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    '& .MuiButton-endIcon': {
                                        marginLeft: '113px',
                                        position: 'absolute',
                                        right: 0
                                    },
                                    '& .MuiButton-startIcon': {
                                        marginRight: '34px'
                                    }
                                }}
                                    endIcon={<RightArrow fill={COLORS.contentIcon} />}
                                    startIcon={<Feedback />}
                                >Phản hồi cho chúng tôi
                                </Button>
                            </MenuItem>
                            <MenuItem>
                                <Button sx={{
                                    ...TEXT_STYLE.content2,
                                    color: COLORS.white,
                                    textTransform: 'none',
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    '& .MuiButton-endIcon': {
                                        marginLeft: '113px',
                                        position: 'absolute',
                                        right: 0
                                    },
                                    '& .MuiButton-startIcon': {
                                        marginRight: '34px'
                                    }
                                }}
                                    endIcon={<RightArrow fill={COLORS.contentIcon} />}
                                    startIcon={<Share />}
                                >Chia sẻ Voiz cho bạn bè
                                </Button>
                            </MenuItem>
                            <MenuItem>
                                <Button sx={{
                                    ...TEXT_STYLE.content2,
                                    color: COLORS.white,
                                    textTransform: 'none',
                                    width: '100%',
                                    justifyContent: 'flex-start',
                                    '& .MuiButton-endIcon': {
                                        marginLeft: '113px',
                                        position: 'absolute',
                                        right: 0
                                    },
                                    '& .MuiButton-startIcon': {
                                        marginRight: '34px'
                                    }
                                }}
                                    endIcon={<RightArrow fill={COLORS.contentIcon} />}
                                    startIcon={<Rate />}
                                >Đánh giá Voiz tại store
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                </StyledTabs>
                <TabPanel value={value} index={0}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Three
                </TabPanel>
                <Box />
            </Box >
        </Box >
    )
}