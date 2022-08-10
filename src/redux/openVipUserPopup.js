import { createSlice } from '@reduxjs/toolkit'

const openVipUserPopupSlice = createSlice({
    name: 'openVipUserPopup',
    initialState: {
        open: false
    },
    reducers: {
        setOpenVipUserPopup: (state, action) => {
            state.open = action.payload
        },
        handleCloseOpenVipUserPopup: (state) => {
            state.open = false
        },
        handleOpenVipUserPopup: (state) => {
            state.open = true
        }
    }
});

export const { setOpenVipUserPopup, handleCloseOpenVipUserPopup, handleOpenVipUserPopup } = openVipUserPopupSlice.actions;
export const selectOpenVipUserPopup = (state) => state.openVipUserPopup.open;

export default openVipUserPopupSlice.reducer;