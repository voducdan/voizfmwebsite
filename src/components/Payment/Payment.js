//import react
import { useState, useEffect } from 'react';

// import redux
import { useSelector } from 'react-redux';

// import next router
import { useRouter } from 'next/router';

// Import redux reducer, actions
import { selectPaymentInfo } from '../../redux/payment';

// import MUI components
import {
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from '@mui/material';

// import utils
import { flexStyle } from '../../utils/flexStyle';
import { COLORS } from '../../utils/constants';
import formatPrice from '../../utils/formatPrice';

// import service
import API from '../../services/api';

const tblTextStyle = {
    borderBottom: 'none',
    color: COLORS.white
}

const PaymentUI = (props) => {
    const { method, paymentInfo } = props;

    const api = new API();

    const navigate = useRouter();
    const [countDountStr, setCountDountStr] = useState('');
    const [isExpiry, setIsExpiry] = useState(false);

    const countDownExpireTime = (expireTime) => {
        const x = setInterval(function () {
            var now = new Date().getTime();
            var distance = expireTime * 1000 - now;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) {
                clearInterval(x);
                setCountDountStr('');
                setIsExpiry(true);
                return;
            }

            const str = minutes + ":" + seconds;
            setCountDountStr(str);
        })
    }

    const checkBillingStatus = async () => {
        const params = {
            request_id: paymentInfo.request_id,
            reference_id: paymentInfo.payment_reference_id,
            transaction_type: 13,
            merchant_ext_id: paymentInfo.merchant_ext_id,
            store_ext_id: paymentInfo.store_ext_id,
            amount: paymentInfo.amount,
            platform_type: paymentInfo.platform_type
        }
        const res = await api.checkBillingStatus(params);
        const data = await res.data;
    }

    useEffect(() => {
        countDownExpireTime(paymentInfo?.expiry_time);
        // checkBillingStatus();
    }, []);

    const handleExpireTime = () => {
        navigate.push('/checkout');
    }

    switch (method) {
        case 'shopee':
            return (
                <Box
                    sx={{
                        ...flexStyle('left', 'center')
                    }}
                >
                    <Box>
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableBody>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell
                                            sx={tblTextStyle}
                                            component="th"
                                            scope="row">
                                            {'Loại đơn hàng'}
                                        </TableCell>
                                        <TableCell
                                            sx={tblTextStyle}
                                        >{paymentInfo?.additional_info}</TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell
                                            sx={tblTextStyle}
                                            component="th"
                                            scope="row">
                                            {'Tổng tiền'}
                                        </TableCell>
                                        <TableCell
                                            sx={tblTextStyle}
                                        >{formatPrice(paymentInfo?.amount)}</TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell
                                            sx={tblTextStyle}
                                            component="th"
                                            scope="row">
                                            {'Đơn vị tiền tệ'}
                                        </TableCell>
                                        <TableCell
                                            sx={tblTextStyle}
                                        >{paymentInfo?.currency}</TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell
                                            sx={tblTextStyle}
                                            component="th"
                                            scope="row">
                                            {'Giao dịch hết hạn sau'}
                                        </TableCell>
                                        <TableCell
                                            sx={tblTextStyle}

                                        >
                                            {countDountStr}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell
                                            sx={tblTextStyle}
                                            component="th"
                                            scope="row">
                                            {'Mã giao dịch'}
                                        </TableCell>
                                        <TableCell
                                            sx={tblTextStyle}
                                        >{paymentInfo?.payment_reference_id}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box>
                        <img src={paymentInfo?.url || ''} alt="qrcode" />
                    </Box>
                    <Dialog
                        open={isExpiry}
                        onClose={() => { setIsExpiry(false) }}
                        PaperProps={{
                            style: {
                                backgroundColor: COLORS.bg1
                            }
                        }}
                    >
                        <DialogContent>
                            <DialogContentText
                                sx={{
                                    color: COLORS.white
                                }}
                            >
                                Giao dịch đã hết hạn, vui lòng thanh toán lại
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions
                            sx={{
                                ...flexStyle('center', 'center'),
                                'whiteSpace': 'pre-line'
                            }}
                        >
                            <Button
                                onClick={handleExpireTime}
                                autoFocus>
                                Thanh toán lại
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            );
        default:
            return <img src={paymentInfo?.url || ''} alt="qrcode" />;
    }
}

export default function Payment() {

    const { method } = useRouter().query;
    const paymentInfo = useSelector(selectPaymentInfo);

    return (
        <PaymentUI method={method} paymentInfo={paymentInfo} />
    )
} 