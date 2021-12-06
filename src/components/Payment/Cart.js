// import react
import { useState, useEffect } from 'react';

// import MUI components
import {
    Typography,
    Box,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Checkbox,
    CardActionArea,
    Card,
    CardContent,
    CardMedia
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// import utils
import { flexStyle } from '../../utils/flexStyle';
import { COLORS, TEXT_STYLE, SCREEN_BREAKPOINTS } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

// import service
import API from '../../services/api';

export default function Cart() {

    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    const [cart, setCart] = useState([])

    useEffect(() => {
        const api = new API()
        async function fetchCart() {
            const res = await api.getCart()
            const data = await res.data
            setCart(data)
        }

        fetchCart()
    }, [])

    return (
        <Box
            sx={{
                width: '100%',
                padding: '32px 48px',
                boxSizing: 'border-box'
            }}
        >
            <Typography
                sx={{
                    ...TEXT_STYLE.h2,
                    color: COLORS.white,
                    mb: '32px'
                }}
            >Giỏ hàng</Typography>
            <Box
                sx={{
                    ...flexStyle('flex-start', 'flex-start'),
                    width: '100%',
                    columnGap: '32px'
                }}
            >
                <Box
                    sx={{
                        width: '70%'
                    }}
                >
                    <MenuList
                        sx={{
                            bgcolor: COLORS.bg2,
                            boxSizing: 'border-box'
                        }}
                    >
                        <MenuItem>
                            <ListItemIcon>
                                <Checkbox sx={{ color: COLORS.contentIcon }} />
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    ...TEXT_STYLE.content1,
                                    color: COLORS.contentIcon
                                }}
                            >Chọn tất cả (4 sản phẩm)</ListItemText>
                            <ListItemIcon
                                sx={{
                                    alignItems: 'center',
                                    columnGap: '14px'
                                }}
                            >
                                <DeleteIcon sx={{ color: COLORS.contentIcon }} />
                                <Typography
                                    sx={{
                                        ...TEXT_STYLE.content1,
                                        color: COLORS.contentIcon
                                    }}
                                >Xóa</Typography>
                            </ListItemIcon>
                        </MenuItem>
                        <Divider sx={{ borderColor: COLORS.bg3 }} />

                        {
                            cart.map((item) => (
                                <MenuItem key={item.id}
                                    sx={{
                                        width: '100%'
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            width: '5%'
                                        }}
                                    >
                                        <Checkbox sx={{ color: COLORS.contentIcon }} />
                                    </ListItemIcon>
                                    <Card
                                        sx={{
                                            ...flexStyle('flex-start', 'center'),
                                            columnGap: '13px',
                                            bgcolor: 'inherit',
                                            boxShadow: 'none',
                                            width: '75%'
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '83px', height: '83px' }}
                                            image={item.avatar.thumb_url}
                                            alt="Live from space album cover"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '70%' }}>
                                            <CardContent sx={{
                                                ...flexStyle('center', 'flex-start'),
                                                flexDirection: 'column',
                                                flex: '1 0 auto',
                                                rowGap: '6px'
                                            }}
                                            >
                                                <Typography
                                                    sx={{
                                                        ...TEXT_STYLE.title1,
                                                        color: COLORS.white,
                                                        whiteSpace: 'break-spaces'
                                                    }}
                                                >
                                                    {item.name}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        ...TEXT_STYLE.content2,
                                                        color: COLORS.contentIcon
                                                    }}
                                                >
                                                    Tác giả: {item.authors.map(author => author.name).join(',')}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        ...TEXT_STYLE.content2,
                                                        color: COLORS.contentIcon
                                                    }}
                                                >
                                                    Thời lượng: {item.total_duration}
                                                </Typography>
                                            </CardContent>
                                        </Box>

                                    </Card>
                                    <ListItemIcon
                                        sx={{
                                            alignItems: 'center',
                                            columnGap: '50px',
                                            width: '20%',
                                            justifyContent: 'flex-end'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...TEXT_STYLE.content1,
                                                color: COLORS.contentIcon
                                            }}
                                        >{item.sale_coin_price}</Typography>
                                        <DeleteIcon sx={{ color: COLORS.contentIcon }} />
                                    </ListItemIcon>
                                </MenuItem>
                            ))
                        }

                    </MenuList>
                </Box>
                <Box
                    sx={{
                        width: '30%'
                    }}
                >
                    Tổng cộng
                </Box>
            </Box>
        </Box>
    )
}