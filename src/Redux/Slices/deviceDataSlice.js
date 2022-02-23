import { createSlice } from '@reduxjs/toolkit';

export const deviceDataSlice = createSlice({
    name: 'deviceDataSlice',
    initialState: {
        deviceData: {
            temperature : '0',
            humidity : '0',
            vibration : '0',
            number1 : '',
            number2 : '',
            lat : 33.52142875797687,
            lon: 73.1588459122573
        },
    },
    reducers: {
        updateDeviceData: (state, obj) => { state.deviceData = obj.payload },
    }
});

export const { updateDeviceData } = deviceDataSlice.actions;

export const getDeviceData = (state) => { return (state.deviceDataSlice.deviceData) };

export default deviceDataSlice.reducer