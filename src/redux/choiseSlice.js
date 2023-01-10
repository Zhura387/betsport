import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const choiseSlice = createSlice({
    name: 'choise',
    initialState,
    reducers: {
        addChoise: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addChoise } = choiseSlice.actions;

export default choiseSlice.reducer