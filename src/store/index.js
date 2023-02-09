import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'



export const store = configureStore({
    reducer:{
        counter:counterReducer,
        // You can add more reducer here with keyname like "counter"
    }

})
