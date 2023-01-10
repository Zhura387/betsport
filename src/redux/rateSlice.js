import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const rateSlice = createSlice({
    name: 'rate',
    initialState,
    reducers: {
        addRate: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addRate } = rateSlice.actions;

export default rateSlice.reducer