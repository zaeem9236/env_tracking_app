import { createSlice }  from '@reduxjs/toolkit';

export const userDetailsSlice = createSlice({
    name:'userDetailsSlice',
    initialState:{
        userDetails: {},
    },
    reducers:{
        updateUserDetails: (state, obj) => {state.userDetails = obj.payload },
    }
});

export const { updateUserDetails } = userDetailsSlice.actions;

export const getUserDetails = (state) => {return(state.userDetailsSlice.userDetails)};

export default userDetailsSlice.reducer