import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./prouctSlice";

export const store=configureStore({
    reducer:{
        products:productSlice.reducer
    },
    
})