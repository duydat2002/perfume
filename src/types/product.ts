export interface IProductPrice {
  capacity: number | string;
  price: number;
}

export interface IProduct {
  id: string;
  name: string;
  slug: string;
  image: string;
  quantity: number;
  prices: IProductPrice[];
  gender: string;
  season: string;
}
