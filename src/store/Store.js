import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './auth/Slice';
import useridReducer from './auth/UserIdSlice'
import userReducer from './auth/UserPostion'
import locationReducer from './location/Location'
const Store = configureStore({
    reducer:{
        token: tokenReducer,
        uid:useridReducer,
        upostion:userReducer,
        location:locationReducer
        
    }
});
export default Store