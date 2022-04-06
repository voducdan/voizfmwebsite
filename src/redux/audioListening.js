import { createSlice } from '@reduxjs/toolkit'

const AudioListeningSlice = createSlice({
    name: 'audioListening',
    initialState: {
        audioListenings: true
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