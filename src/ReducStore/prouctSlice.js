import { createSlice } from "@reduxjs/toolkit";
 import axios from 'axios'
 
const initialState={
    products:[],
    selectedProduct:null
}
export const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts:(state,action)=>{
             state.products=action.payload
        },
        setSelectedProduct:(state,action)=>{
            const productId=action.payload
            state.selectedProduct=state.products.find((p)=>p.id===productId)

        } 

    }
})

export const fetchingProduct=()=>async(dispatch)=>{
    try{
        const response=await axios.get('https://dummyjson.com/products')
        const products=response.data.products
          dispatch(productSlice.actions.setProducts(products)
        )
    }catch(err){
        console.log(err)
    }
}

  