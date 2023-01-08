import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const lifeSlice = createSlice({
    name: 'life',
    initialState,
    reducers: {
        addLife: (state, action) => {
            state.value=action.payload
console.log(action.payload)
}}})

export const { addLife } = lifeSlice.actions;

export default lifeSlice.reducer