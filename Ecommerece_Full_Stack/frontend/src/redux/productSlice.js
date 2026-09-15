import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ================= FETCH PRODUCTS =================

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ name = "", category = "" } = {}, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:3000/products?name=${encodeURIComponent(
          name,
        )}&category=${encodeURIComponent(category)}`,
      );

      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data.message);
      }

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// ================= DELETE PRODUCT =================

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data.message);
      }

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// ================= ADD PRODUCT =================

export const addProducts = createAsyncThunk(
  "products/createProduct",
  async (data, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const answer = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(answer.message);
      }

      return answer.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// ================= UPDATE PRODUCT =================

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(result.message);
      }

      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// ================= PRODUCT DETAIL =================

export const getProductDetail = createAsyncThunk(
  "products/getProductDetail",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);

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

// ================= TOGGLE LIKE =================

export const toggleLikeProduct = createAsyncThunk(
  "products/toggleLikeProduct",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${id}/liked`,
        {
          method: "PATCH",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        return thunkAPI.rejectWithValue(data.message);
      }

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// ================= SLICE =================

const productSlice = createSlice({
  name: "products",

  initialState: {
    products: [],
    productDetails: null,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p._id !== action.payload);
      })

      // ADD
      .addCase(addProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      // UPDATE
      .addCase(updateProduct.fulfilled, (state, action) => {
        const product = action.payload;

        const index = state.products.findIndex((p) => p._id === product._id);

        if (index !== -1) {
          state.products[index] = product;
        }
      })

      // PRODUCT DETAIL
      .addCase(getProductDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })

      .addCase(getProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // TOGGLE LIKE
      .addCase(toggleLikeProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;

        const index = state.products.findIndex(
          (product) => product._id === updatedProduct._id,
        );

        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      });
  },
});

export default productSlice.reducer;
