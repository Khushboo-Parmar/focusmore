// import { createSlice } from "@reduxjs/toolkit";

// const tokenSlice = createSlice({
//     name:"token" ,
//     initialState:[],
//     reducers:{
//         add(state ,action){
//             // state.push() se remove krega ...array ko empty krega 
//             state.push()
//             // then state.push(action.payload) se new value add krega 
//             state.push(action.payload)
//         }
//     }
// })

// export const {add}=tokenSlice.actions;

// export default tokenSlice.reducer;



import { createSlice } from "@reduxjs/toolkit"

const tokenSlice = createSlice({
    name:'token',
    initialState:[],
    reducers:{
        add(state,action){
            state.push();
            state.push(action.payload);
        },
        remove(state,action){
          state.length = 0
        }
    }
})

export const {add,remove} = tokenSlice.actions;
export default tokenSlice.reducer;