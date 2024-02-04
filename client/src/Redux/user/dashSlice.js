import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dashTab : null,
    error: null
}

const dashSlice = createSlice({
    name: 'dash',
    initialState,
    reducers:{
        setDashTab :(state,action) => {
            state.dashTab = action.payload;
            state.error = null;
        }
    }
})

export const {setDashTab} = dashSlice.actions;
export default dashSlice.reducer;