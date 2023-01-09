import { configureStore } from '@reduxjs/toolkit'
import lifeSlice from './lifeSlice'
import tomorrowSlice from './tomorrowSlice'
import choiseSlice from './choiseSlice'
import rateSlice from './rateSlice'
import winsSlice from './winsSlice'

export const store = configureStore({

    reducer: {
        life: lifeSlice,
        tomorrow: tomorrowSlice,
        choise: choiseSlice,
        rate:rateSlice,
        wins:winsSlice
    }
})