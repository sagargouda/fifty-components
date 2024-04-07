import {createSlice} from "@reduxjs/toolkit";

const youtubeSlice = createSlice({
    name: 'youtube',
    initialState: {
        store: []
    },
    reducers: {
        addComments: (state , action) =>{
            //  deleting user
            state.store.splice(30 , 1)
        //     adding user5
            state.store.unshift(action.payload)
        }
    }
})

export const { addComments} = youtubeSlice.actions
export default youtubeSlice.reducer