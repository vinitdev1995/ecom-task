import { RootState } from "../store";
import { IProduct } from "./IProduct";

/**
 * Selector to get the isLoading state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the isLoading state
 */
export const selectIsLoading = (state: RootState): boolean =>
  state.products.isLoading;

/**
 * Selector to get the product list from the state.
 * @param {RootState} state the root state.
 * @returns {IProduct} the product list.
 */
export const selectAllProducts = (state: RootState): IProduct | any =>
  state.products.productList;
