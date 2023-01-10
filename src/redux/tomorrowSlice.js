import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const tomorrowSlice = createSlice({
    name: 'tomorrow',
    initialState,
    reducers: {
        addSport: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addSport } = tomorrowSlice.actions;

export default tomorrowSlice.reducer