import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {},
    reducers: {
        cacheResults: (state , action)=>{
          return {...state , ...action.payload}
        }
    }
})

export const {cacheResults} = appSlice.actions

export default appSlice.reducer