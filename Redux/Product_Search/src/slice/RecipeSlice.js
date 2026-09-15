import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: []
}
const RecipeSlice = createSlice({
    name: "Recipe",
    initialState,
    reducers: {
        addToCart: {

        },
        removeFromCart: {

        }
    }
})