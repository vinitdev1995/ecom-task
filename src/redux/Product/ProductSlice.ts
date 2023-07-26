import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "./ProductThunks";
import { IProductState } from "./IProductState";

const initialState: IProductState = {
  productList: [],
  isLoading: false
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductList: (state, action: PayloadAction<[]>) => {
      state.productList = action.payload;
    }
  },
  extraReducers: {
    [getProducts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled.type]: (state, action) => {
      state.productList = action.payload;
      state.isLoading = false;
    },
    [getProducts.rejected.type]: (state) => {
      state.isLoading = false;
    }
  }
});

/**
 * Actions
 */
export const { setProductList } = productSlice.actions;

/**
 * Reducers
 */
export const productsReducer = productSlice.reducer;
