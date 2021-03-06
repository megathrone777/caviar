export interface TProduct {
  id: string;
  description: string;
  imageSmall: {
    url: string;
  };
  imageMain: {
    url: string;
  };
  name: string;
  priceDefault: number;
  priceDiscounted: number;
  quantity: number;
  slug: string;
  totalPrice: number;
  weight: string;
}
