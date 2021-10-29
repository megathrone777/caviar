export interface TProduct {
  id: number;
  description: string;
  imageSmall: {
    url: string;
  };
  name: string;
  priceDefault: number;
  priceDiscounted: number;
  quantity: number;
  totalPrice: number;
  weight: string;
}
