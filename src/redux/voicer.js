import { createSlice } from '@reduxjs/toolkit'

const voicerSlice = createSlice({
    name: 'voicer',
    initialState: {
        voicer: {}
    },
    reducers: {
        setVoicer: (state, action) => {
            state.voicer = { ...action.payload };
        }
    }
});

export const { setVoicer } = voicerSlice.actions;
export const selectVoicer = (state) => state.voicer.voicer;

export default voicerSlice.reducer;