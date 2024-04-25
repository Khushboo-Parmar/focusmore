import {createSlice} from "@reduxjs/toolkit"
const useridSlice= createSlice({
    name:'userid',
    initialState:[],
    reducers:{
        userid(state, action){
            state.push()
            state.push(action.payload)
        }

    }
})
export const {userid}= useridSlice.actions;
export default useridSlice.reducer;