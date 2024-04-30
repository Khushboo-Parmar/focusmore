import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'userposition',
    initialState:[],
    reducers:{
        setinfo(state,action){
            state.length=0
            state.push(action.payload)
        }
    }
})

export const {setinfo} = userSlice.actions;
export default userSlice.reducer;