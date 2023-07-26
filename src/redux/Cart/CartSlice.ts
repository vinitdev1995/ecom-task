import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICartState } from "./ICartState";

const initialState: ICartState = {
  cartList: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      let cloneCartList: any | [] = [...state.cartList];
      const findExistingProductIndex = cloneCartList.findIndex(
        (ele: any) => ele.id === action.payload?.id
      );
      if (findExistingProductIndex !== -1) {
        cloneCartList[findExistingProductIndex].quantity += 1;
      } else {
        cloneCartList.push({ ...action.payload, quantity: 1 });
      }
      state.cartList = cloneCartList;
    },

    decrementQuantity: (state, action: PayloadAction<any>) => {
      let cloneCartList = JSON.parse(JSON.stringify(state.cartList));
      const findProductIndex = cloneCartList.findIndex(
        (ele: any) => ele.id === action.payload.productId
      );
      if (findProductIndex !== -1) {
        if (cloneCartList[findProductIndex].quantity === 1) {
          cloneCartList.splice(findProductIndex, 1);
        } else if (cloneCartList[findProductIndex].quantity > 1) {
          cloneCartList[findProductIndex].quantity -= 1;
        }
      }
      state.cartList = cloneCartList;
    },

    orderCheckout: (state) => {
      state.cartList = [];
    },

    removeProductFromCart: (state, action: PayloadAction<any>) => {
      let cloneCartList = JSON.parse(JSON.stringify(state.cartList));
      const findProductIndex = cloneCartList.findIndex(
        (ele: any) => ele.id === action.payload.productId
      );
      if (findProductIndex !== -1) {
        cloneCartList.splice(findProductIndex, 1);
      }
      state.cartList = cloneCartList;
    }
  }
});

/**
 * Actions
 */
export const {
  addToCart,
  decrementQuantity,
  removeProductFromCart,
  orderCheckout
} = cartSlice.actions;

/**
 * Reducers
 */
export const cartReducer = cartSlice.reducer;
