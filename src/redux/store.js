// Import redux toolkit
import { configureStore } from '@reduxjs/toolkit'

// Import reducer
import openSidebarReducer from './openSidebar'
import openLoginReducer from './openLogin'
import tokenSlice from './token'

export default configureStore({
  reducer: {
    openSidebar: openSidebarReducer,
    openLogin: openLoginReducer,
    token: tokenSlice,
  },
})


