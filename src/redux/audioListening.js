import { createSlice } from '@reduxjs/toolkit'

const AudioListeningSlice = createSlice({
    name: 'audioListening',
    initialState: {
        audioListenings: []
    },
    reducers: {
        setAudioListenings: (state, action) => {
            state.audioListenings = [...action.payload]
        }
    }
});

export const { setAudioListenings } = AudioListeningSlice.actions;
export const selectAudioListenings = (state) => state.audioListening.audioListenings;

export default AudioListeningSlice.reducer;