import { createSlice } from '@reduxjs/toolkit'

const playAudioSlice = createSlice({
    name: 'playAudio',
    initialState: {
        playing: false,
        url: ''
    },
    reducers: {
        togglePlayAudio: (state) => {
            state.playing = !state.playing
        },
        setAudioUrl: (state, action) => {
            state.url = action.payload;
        }
    }
});

export const { togglePlayAudio, setAudioUrl } = playAudioSlice.actions;
export const selectPlayAudio = (state) => state.playAudio.playing;
export const selectUrl = (state) => state.playAudio.url;

export default playAudioSlice.reducer;