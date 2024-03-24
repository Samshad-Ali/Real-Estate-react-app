import {createSlice} from '@reduxjs/toolkit';

const estateSlice = createSlice({
    name:'estateSlice',
    initialState:{
        placeData:[]
    },
    reducers:{
        getData:(state,action)=>{
            state.placeData = action.payload;
        }
    }
})

export default estateSlice.reducer;
export const {getData} = estateSlice.actions;