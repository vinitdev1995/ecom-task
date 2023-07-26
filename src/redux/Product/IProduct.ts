export interface IProduct {
  /**
   * The unique identifier for the item.
   * @type {number}
   */
  id: number;

  /**
   * The title identifies the item.
   * @type {string}
   */
  title: string;

  /**
   * Item price identifier.
   * @type {string}
   */
  price: string;

  /**
   * Item category identifier.
   * @type {string}
   */
  category: string;

  /**
   * Item description identifier.
   * @type {string}
   */
  description: string;

  /**
   * Item image identifier.
   * @type {string}
   */
  image: string;
}
