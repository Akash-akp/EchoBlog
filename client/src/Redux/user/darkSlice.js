import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode : false
}

const darkSlice = createSlice({
    name: "dark",
    initialState,
    reducers:{
        changeMode:(state,action)=>{
            state.mode = !state.mode;
        }
    }
})

export const {changeMode} = darkSlice.actions;

export default darkSlice.reducer;