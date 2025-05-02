import{configureStore} from "@reduxjs/toolkit"
import cartReducer from "./CartSlice"
export const store = configureStore({

    reducer:{
        // define your reducers here
        cart: cartReducer, // add your cart slice here

    },
    
})