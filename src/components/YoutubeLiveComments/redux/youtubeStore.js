import {configureStore} from "@reduxjs/toolkit";
import youtubeReducer from '../redux/youtubeSlice'

const youtubeStore = configureStore({
    reducer: {
        youtube: youtubeReducer
    }
})
export default youtubeStore