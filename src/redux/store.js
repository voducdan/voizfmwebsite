import { configureStore } from '@reduxjs/toolkit'

import openSidebarReducer from './openSidebar'
import openLoginReducer from './openLogin'

export default configureStore({
  reducer: {
    openSidebar: openSidebarReducer,
    openLogin: openLoginReducer
  },
})


