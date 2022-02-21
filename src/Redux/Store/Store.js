import { configureStore } from '@reduxjs/toolkit';
import userDetailsSlice from '../Slices/userDetailsSlice';
import CountDownSlice from '../Slices/CountDownSlice';

export default configureStore({
    reducer:{
        CountDown: CountDownSlice,
        userDetailsSlice: userDetailsSlice,
    }
})