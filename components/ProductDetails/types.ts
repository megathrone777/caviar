export interface TProduct {
  id: number;
  description: string;
  image: {
    url: string;
  };
  name: string;
  priceDefault: number;
  priceDiscounted: number;
  quantity: number;
}
