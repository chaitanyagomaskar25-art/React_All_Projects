import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"
import cartReducer from "./cartSlice"
import likedReducer from "./likedSlice"

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        liked: likedReducer,

    }
})

export default store