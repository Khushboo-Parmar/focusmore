import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './auth/Slice';
const Store = configureStore({
    reducer:{
        token: tokenReducer
    }
});
export default Store