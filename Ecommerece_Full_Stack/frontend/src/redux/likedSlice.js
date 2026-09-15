import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toggleLikeProduct } from "./productSlice";

export const getLikedProducts = createAsyncThunk(
  "liked/getLikedProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3000/liked-products");

      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data.message);
      }

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);


const likedSlice = createSlice({
  name: "liked",
  initialState: {
    loading: false,
    likedProducts: [],
    error: null,
  },
  reducers: {
    // toggleLike: (state, action) => {
    //   const exists = state.likedProducts.find(
    //     (p) => p._id === action.payload._id,
    //   );

    //   if (exists) {
    //     state.likedProducts = state.likedProducts.filter(
    //       (p) => p._id !== action.payload._id,
    //     );
    //   } else {
    //     state.likedProducts.push(action.payload);
    //   }
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getLikedProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLikedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.likedProducts = action.payload;
      })
      .addCase(getLikedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Please try again..";
      })
     .addCase(toggleLikeProduct.fulfilled, (state, action) => {
  const updatedProduct = action.payload;

  if (updatedProduct.isLiked) {
    // Product was liked
    const exists = state.likedProducts.some(
      (product) => product._id === updatedProduct._id
    );

    if (!exists) {
      state.likedProducts.push(updatedProduct);
    }
  } else {
    // Product was unliked
    state.likedProducts = state.likedProducts.filter(
      (product) => product._id !== updatedProduct._id
    );
  }
})
  },
});

export const { toggleLike } = likedSlice.actions;
export default likedSlice.reducer;
