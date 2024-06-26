import {configureStore} from "@reduxjs/toolkit";
import appReducer from '../redux/appSlice'

const appStore = configureStore({
    reducer:{
        app: appReducer
    }
})

export default appStore