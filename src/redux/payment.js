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
        cart: [],
        paymentInfo: null,
        addToCartFlag: 0,
        billingInfo: null,
        numItemsInCart: 0
    },
    reducers: {
        setItems: (state, action) => {
            state.data = { ...action.payload };
        },
        setCart: (state, action) => {
            state.cart = [...action.payload];
        },
        setPaymentInfo: (state, action) => {
            state.paymentInfo = { ...action.payload };
        },
        setAddToCartFlag: (state, action) => {
            state.addToCartFlag = action.payload;
        },
        setNumItemsInCart: (state, action) => {
            state.numItemsInCart = action.payload;
        },
    }
});

export const { setItems, setCart, setPaymentInfo, setAddToCartFlag, setNumItemsInCart } = paymentSlice.actions;
export const selectPaymentData = (state) => state.payment.data;
export const selectCart = (state) => state.payment.cart;
export const selectPaymentInfo = (state) => state.payment.paymentInfo;
export const selectAddToCartFlag = (state) => state.payment.addToCartFlag;
export const selectNumItemsInCart = (state) => state.payment.numItemsInCart;

export default paymentSlice.reducer;