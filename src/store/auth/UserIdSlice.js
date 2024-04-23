import {createSlice} from "@reduxjs/toolkit"
const useridSlice= createSlice({
    name:'userid',
    initialState:null,
    reducers:{
        userid(state, action){
            return action.payload; //directly assign payload to state
        }

    }
})
export const {userid}= useridSlice.actions;
export default useridSlice.reducer;