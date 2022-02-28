import { createSlice } from '@reduxjs/toolkit'

const playAudioSlice = createSlice({
    name: 'playAudio',
    initialState: {
        playing: false,
        audioHls: null,
        url: ''
    },
    reducers: {
        togglePlayAudio: (state) => {
            state.playing = !state.playing
        },
        pauseAudio: (state) => {
            state.playing = false;
        },
        setAudioUrl: (state, action) => {
            state.url = action.payload;
        },
        setAudioHls: (state, action) => {
            state.audioHls = action.payload;
        }
    }
});

export const { togglePlayAudio, pauseAudio, setAudioUrl, setAudioHls } = playAudioSlice.actions;
export const selectPlayAudio = (state) => state.playAudio.playing;
export const selectUrl = (state) => state.playAudio.url;
export const selectAudioHls = (state) => state.playAudio.audioHls;

export default playAudioSlice.reducer;