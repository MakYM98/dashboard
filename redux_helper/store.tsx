import { configureStore } from '@reduxjs/toolkit'

import generalSlice from './features/general/general'

const store = configureStore({
  reducer: {
    general: generalSlice,
  }
})

export default store