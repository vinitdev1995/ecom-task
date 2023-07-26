import { ICartState } from "./ICartState";
import { RootState } from "../store";

/**
 * Selector to get the cart list from the state.
 * @param {RootState} state the root state.
 * @returns {ICartState} the cart list.
 */
export const selectCart = (state: RootState): ICartState | any =>
  state.cart.cartList;
