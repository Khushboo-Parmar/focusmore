import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name:'location',
    initialState:[],
    reducers:{
        addlocation(state, action){
            // state.length=0
            state.unshift(action.payload)
        }
    }
})

export const {addlocation} = locationSlice.actions ;
export default locationSlice.reducer;
