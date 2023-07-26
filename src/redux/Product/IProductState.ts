import { IProduct } from "./IProduct";

export interface IProductState {
  /**
   * The array of products.
   * @type {IProduct[]}
   */
  productList: IProduct[];

  /**
   * Indicates if the products are loading.
   * @type {boolean}
   */
  isLoading: boolean;
}
