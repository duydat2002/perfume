import { IProduct } from "./product";

export interface IWishList {
  id: string | number;
  product: IProduct;
  capacity: number | string;
}
