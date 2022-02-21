import { configureStore } from '@reduxjs/toolkit';
import userDetailsSlice from '../Slices/userDetailsSlice';
import deviceDataSlice from '../Slices/deviceDataSlice';
import CountDownSlice from '../Slices/CountDownSlice';

export default configureStore({
    reducer:{
        CountDown: CountDownSlice,
        userDetailsSlice: userDetailsSlice,
        deviceDataSlice: deviceDataSlice
    }
})