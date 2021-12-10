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
    Card,
    CardContent,
    CardMedia,
    FormControl,
    Select,
    InputBase,
    Paper,
    Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// import icons
import { CartEmpty } from '../../components/Icons/index';

// import utils
import { flexStyle } from '../../utils/flexStyle';
import { COLORS, TEXT_STYLE, SCREEN_BREAKPOINTS } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';
import formatPrice from '../../utils/formatPrice';

export default function Cart(props) {

    const { setStep, cart, setTotalPrice, setFinalPrice, totalPrice, finalPrice, selectedItem, setSelectedItem } = props
    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    const [checkControl, setCheckControl] = useState({});
    const [checkAllControl, setCheckAllControl] = useState(false);

    useEffect(() => {
        function initCheckControl(cart) {
            const init = {}
            cart.forEach(i => {
                const id = i.id
                init[id] = false
            })
            selectedItem.forEach(i => {
                const id = i.id
                init[id] = true
            })

            setCheckControl(init)
        }

        initCheckControl(cart)
    }, []);

    useEffect(() => {
        function calculatePrice() {
            const price = selectedItem.reduce((a, b) => ({ sale_coin_price: (a.sale_coin_price + b.sale_coin_price) }), { sale_coin_price: 0 })['sale_coin_price']
            setTotalPrice(price)
            // wait for handle discount code
            setFinalPrice(price)
        }
        calculatePrice()
    }, [selectedItem])

    const handleSelectAllItem = (event) => {
        const checked = event.target.checked
        const checkAll = {}
        cart.map(i => {
            const id = i.id
            checkAll[id] = checked
        })
        if (checked) {
            setSelectedItem(cart)
        }
        else {
            setSelectedItem([])
        }
        setCheckAllControl(checked)
        setCheckControl(checkAll)
    }
    const handleSelectCartItem = (event, id) => {
        const checked = event.target.checked
        const copyCheckedControl = { ...checkControl }
        copyCheckedControl[id] = checked
        setCheckControl(copyCheckedControl)
        if (checked) {
            const item = cart.filter(i => i.id === id)
            const currentSelect = [...selectedItem, ...item]
            const isCheckAll = currentSelect.length === cart.length
            setCheckAllControl(isCheckAll)
            setSelectedItem(currentSelect)
        }
        else {
            const remainedItem = selectedItem.filter(i => i.id !== id)
            setSelectedItem(remainedItem)
            setCheckAllControl(false)
        }
    }

    const handlePayment = () => {
        setStep(2)
    }

    return (
        <Box
            sx={{
                width: '100%',
                padding: isSm ? 0 : '32px 48px',
                boxSizing: 'border-box'
            }}
        >
            <Typography
                sx={{
                    ...TEXT_STYLE.h2,
                    color: COLORS.white,
                    mb: '32px',
                    ...(isSm && { pt: '24px', pl: '16px' })
                }}
            >Giỏ hàng</Typography>
            {
                cart.length > 0 && (
                    <Box
                        sx={{
                            ...flexStyle('flex-start', 'flex-start'),
                            width: '100%',
                            columnGap: '32px',
                            ...(isSm && {
                                flexDirection: 'column',
                                rowGap: '16px'
                            })
                        }}
                    >
                        <Box
                            sx={{
                                width: isSm ? '100%' : '70%'
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
                                        <Checkbox checked={checkAllControl} onChange={handleSelectAllItem} sx={{ color: COLORS.contentIcon }} />
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
                                                width: '100%',
                                                columnGap: '13px'
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    maxWidth: '5%',
                                                }}
                                            >
                                                <Checkbox checked={checkControl[item.id] || false} onChange={(event) => { handleSelectCartItem(event, item.id) }} sx={{ color: COLORS.contentIcon }} />
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
                                                >{formatPrice(item.sale_coin_price)}đ</Typography>
                                                <DeleteIcon sx={{ color: COLORS.contentIcon }} />
                                            </ListItemIcon>
                                        </MenuItem>
                                    ))
                                }

                            </MenuList>
                        </Box>
                        <Box
                            sx={{
                                width: isSm ? '100%' : '30%',
                                bgcolor: COLORS.bg2,
                                borderRadius: '10px',
                                padding: '32px',
                                boxSizing: 'border-box'
                            }}
                        >
                            {
                                selectedItem.length > 0 && (
                                    <Box>
                                        <Typography
                                            sx={{
                                                ...TEXT_STYLE.h3,
                                                color: COLORS.white,
                                                mb: '32px',
                                                textAlign: 'left'
                                            }}
                                        >Thông tin đơn hàng</Typography>
                                        <FormControl fullWidth>
                                            <Typography
                                                sx={{
                                                    ...TEXT_STYLE.content1,
                                                    color: COLORS.contentIcon,
                                                    mb: '16px',
                                                    textAlign: 'left'
                                                }}
                                            >
                                                Bạn đang chọn gói VIP sau
                                            </Typography>
                                            <Select
                                                defaultValue={10}
                                                inputProps={{
                                                    name: 'package',
                                                    id: 'vip-package',
                                                }}
                                                onChange={() => { console.log(1) }}
                                                sx={{
                                                    ...TEXT_STYLE.title1,
                                                    color: COLORS.white,
                                                    '& .MuiOutlinedInput-input': {
                                                        padding: '14px'
                                                    },
                                                    '& .MuiSelect-icon': {
                                                        color: COLORS.VZ_Text_content
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: COLORS.placeHolder,
                                                        height: '50px'
                                                    }
                                                }}
                                            >
                                                <MenuItem value={10}>Tiêu chuẩn</MenuItem>
                                                <MenuItem value={20}>Tiết kiệm</MenuItem>
                                                <MenuItem value={30}>VIP</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Box
                                            sx={{
                                                mt: '24px',
                                                mb: '60px',
                                                ...flexStyle('space-between', 'center')
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    ...TEXT_STYLE.content1,
                                                    color: COLORS.contentIcon
                                                }}
                                            >Số tiền</Typography>
                                            <Typography
                                                sx={{
                                                    ...TEXT_STYLE.h2,
                                                    color: COLORS.white
                                                }}
                                            >{formatPrice(totalPrice)}đ</Typography>
                                        </Box>
                                        <Paper
                                            component="form"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '100%',
                                                bgcolor: 'inherit',
                                                boxShadow: 'none',
                                                borderRadius: '4px',
                                                height: '50px'
                                            }}
                                        >
                                            <InputBase
                                                sx={{
                                                    ml: 1,
                                                    flex: 1,
                                                    ...TEXT_STYLE.content2,
                                                    color: COLORS.placeHolder,
                                                    margin: 0,
                                                    width: '80%',
                                                    border: `1px solid ${COLORS.placeHolder}`,
                                                    height: '50px',
                                                    'input': {
                                                        padding: '13px 18px'
                                                    }
                                                }}
                                                placeholder="Nhập mã giảm giá (Nếu có)"
                                                inputProps={{ 'aria-label': 'discount-code' }}
                                            />
                                            <Button
                                                sx={{
                                                    width: '20%',
                                                    textTransform: 'none',
                                                    bgcolor: COLORS.main,
                                                    ...TEXT_STYLE.title2,
                                                    color: COLORS.white,
                                                    height: '100%',
                                                    borderRadius: 0
                                                }}
                                            >Sử dụng</Button>
                                        </Paper>
                                    </Box>
                                )
                            }

                            <Box
                                sx={{
                                    mt: '32px'
                                }}
                            >
                                <Box
                                    sx={{
                                        ...flexStyle('space-between', 'center')
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            ...TEXT_STYLE.content1,
                                            color: COLORS.contentIcon
                                        }}

                                    >Tổng cộng</Typography>
                                    <Box
                                        sx={{
                                            ...flexStyle('center', 'flex-end'),
                                            flexDirection: 'column',
                                            rowGap: '16px'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...TEXT_STYLE.h2,
                                                color: COLORS.white
                                            }}
                                        >{formatPrice(finalPrice)}đ</Typography>
                                        <Typography
                                            sx={{
                                                ...TEXT_STYLE.caption12,
                                                color: COLORS.white
                                            }}
                                        >Đã bao gồm VAT(nếu có)</Typography>
                                    </Box>
                                </Box>
                                <Button
                                    sx={{
                                        width: '100%',
                                        textTransform: 'none',
                                        bgcolor: COLORS.main,
                                        ...TEXT_STYLE.title1,
                                        color: COLORS.white,
                                        height: '48px',
                                        borderRadius: '8px',
                                        mt: '24px'
                                    }}
                                    onClick={handlePayment}
                                >
                                    Thanh toán
                                </Button>
                                {
                                    selectedItem.length > 0 && (
                                        <Typography
                                            sx={{
                                                ...TEXT_STYLE.content2,
                                                color: COLORS.white,
                                                textAlign: 'right',
                                                mt: '24px'
                                            }}
                                        >
                                            Bạn có muốn chuyển khoản?
                                        </Typography>
                                    )
                                }

                            </Box>
                        </Box>
                    </Box>
                )
            }

            {
                cart.length === 0 && (
                    <Box
                        sx={{
                            textAlign: 'center',
                            width: '100%',
                            mt: isSm ? '84px' : '145px'
                        }}
                    >
                        <CartEmpty bgfill='none' fill={COLORS.placeHolder} />
                        <Typography
                            sx={{
                                ...TEXT_STYLE.content1,
                                color: COLORS.contentIcon,
                                mt: '40px'
                            }}
                        >Không có quyển sách nào trong giỏ hàng</Typography>
                    </Box>
                )
            }

        </Box>
    )
}