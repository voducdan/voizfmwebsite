
// import redux
import { useSelector } from 'react-redux';

// Import redux reducer, actions
import { selectPaymentInfo } from '../../redux/payment';

export default function Payment() {

    const paymentInfo = useSelector(selectPaymentInfo);

    return (
        <img src={paymentInfo.url} alt="qrcode" />
    )
} 