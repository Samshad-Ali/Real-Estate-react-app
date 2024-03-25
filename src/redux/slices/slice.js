import {createSlice} from '@reduxjs/toolkit';

const estateSlice = createSlice({
    name:'estateSlice',
    initialState:{
        listdatas:[],
        singaldata:null,
        userdata:null
    },
    reducers:{
        getData:(state,action)=>{
            state.listdatas = action.payload;
        },
        singaldata:(state,action)=>{
            state.singaldata=action.payload;
        },
        userdata:(state,action)=>{
            state.userdata = action.payload;
        }
    }
})

export default estateSlice.reducer;
export const {getData,singaldata,userdata} = estateSlice.actions;