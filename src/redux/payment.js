import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        data: {
            selectedItem: [],
            discountCode: '',
            totalPrice: 0,
            finalPrice: 0
        },
        cart: []
    },
    reducers: {
        setItems: (state, action) => {
            state.data = { ...action.payload }
        },
        setCart: (state, action) => {
            state.cart = [...action.payload]
        }
    }
});

export const { setItems, setCart } = paymentSlice.actions;
export const selectPaymentData = (state) => state.payment.data;
export const selectCart = (state) => state.payment.cart;

export default paymentSlice.reducer;