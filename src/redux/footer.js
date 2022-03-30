import { createSlice } from '@reduxjs/toolkit'

const footerSlice = createSlice({
    name: 'footer',
    initialState: {
        includeFooter: true
    },
    reducers: {
        setFooter: (state, action) => {
            state.includeFooter = action.payload
        }
    }
});

export const { setFooter } = footerSlice.actions;
export const selectIncludeFooter = (state) => state.footer.includeFooter;

export default footerSlice.reducer;