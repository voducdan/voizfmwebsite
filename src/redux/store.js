// Import redux toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import reducer
import openSidebarReducer from './openSidebar';
import openLoginReducer from './openLogin';
import tokenSlice from './token';
import playAudioReducer from './playAudio';
import audioReducer from './audio';
import openSearchReducer from './OpenSearch';
import paymentReducer from './payment';
import userReducer from './user';
import voicerReducer from './voicer';
import footerReducer from './footer';
import audioListening from './audioListening';

export default configureStore({
    reducer: {
        openSidebar: openSidebarReducer,
        openLogin: openLoginReducer,
        token: tokenSlice,
        playAudio: playAudioReducer,
        audio: audioReducer,
        openSearch: openSearchReducer,
        payment: paymentReducer,
        user: userReducer,
        voicer: voicerReducer,
        footer: footerReducer,
        audioListening: audioListening
    },
})


