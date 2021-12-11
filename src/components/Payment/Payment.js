// import react
import { useState, useEffect } from 'react';

// import others components
import Cart from './Cart';
import PaymentInfo from './PaymentInfo';

// import MUI components
import {
    Box
} from '@mui/material';

// import service
import API from '../../services/api';


export default function Payment() {

    const [step, setStep] = useState(1)
    const [cart, setCart] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);

    useEffect(() => {
        const api = new API()
        async function fetchCart() {
            const res = await api.getCart()
            const data = await res.data
            setCart(data)
        }

        fetchCart()
    }, []);

    const renderBaseOnStep = (step) => {
        switch (step) {
            case 1:
                return (<Cart
                    cart={cart}
                    setCart={setCart}
                    setStep={setStep}
                    totalPrice={totalPrice}
                    finalPrice={finalPrice}
                    setTotalPrice={setTotalPrice}
                    setFinalPrice={setFinalPrice}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                />)
            case 2:
                return (<PaymentInfo
                    selectedItems={selectedItem}
                    setStep={setStep}
                    totalPrice={totalPrice}
                    finalPrice={totalPrice}
                />)
            default:
                return (<Cart
                    cart={cart}
                    setCart={setCart}
                    setStep={setStep}
                    totalPrice={totalPrice}
                    finalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}
                    setFinalPrice={setTotalPrice}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                />)
        }
    }

    return (
        <Box>
            {renderBaseOnStep(step)}
        </Box>
    )
}