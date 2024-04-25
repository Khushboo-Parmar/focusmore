import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './auth/Slice';
import useridReducer from './auth/UserIdSlice'
import userReducer from './auth/UserPostion'
const Store = configureStore({
    reducer:{
        token: tokenReducer,
        uid:useridReducer,
        upostion:userReducer
        
    }
});
export default Store