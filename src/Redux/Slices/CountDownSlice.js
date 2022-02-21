import { createSlice }  from '@reduxjs/toolkit';

export const CountDownSlice = createSlice({
    name:'CountDown',
    initialState:{
        count: 1
    },
    reducers:{
        countUp: (state) => {state.count++},
        countDown: (state) => {state.count--}
    }
});

export const {countUp, countDown} = CountDownSlice.actions;

export const getCount = (state) => {return(state.CountDown.count)};

export default CountDownSlice.reducer