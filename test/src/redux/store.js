import { configureStore } from '@reduxjs/toolkit'
import lifeSlice from './lifeSlice'
import tomorrowSlice from './tomorrowSlice'

export const store = configureStore({

    reducer: {
        life: lifeSlice,
        tomorrow: tomorrowSlice,
    }
})