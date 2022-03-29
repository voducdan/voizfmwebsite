import { createSlice } from '@reduxjs/toolkit'

const playAudioSlice = createSlice({
    name: 'playAudio',
    initialState: {
        playing: true,
        openPlayBar: false,
        openAudioDetail: false,
        openExpandMoreAudio: false,
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
        setAudioHls: (state, action) => {
            state.audioHls = action.payload;
        },
        setOpenPlayBar: (state, action) => {
            state.openPlayBar = action.payload;
        },
        setOpenAudioDetail: (state, action) => {
            state.openAudioDetail = action.payload;
        },
        setOpenExpandMoreAudio: (state, action) => {
            state.openExpandMoreAudio = action.payload;
        }
    }
});

export const { togglePlayAudio, pauseAudio, setAudioHls, setOpenPlayBar, setOpenAudioDetail, setOpenExpandMoreAudio } = playAudioSlice.actions;
export const selectPlayAudio = (state) => state.playAudio.playing;
export const selectUrl = (state) => state.playAudio.url;
export const selectAudioHls = (state) => state.playAudio.audioHls;
export const selectOpenAudioDetail = (state) => state.playAudio.openAudioDetail;
export const selectOpenPlayBar = (state) => state.playAudio.openPlayBar;
export const selectOpenExpandMoreAudio = (state) => state.playAudio.openExpandMoreAudio;

export default playAudioSlice.reducer;