import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const winsSlice = createSlice({
    name: 'wins',
    initialState,
    reducers: {
        addWins: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addWins } = winsSlice.actions;

export default winsSlice.reducer