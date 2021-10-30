import { TProduct } from "~/components";

export enum TActionTypes {
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  ADD_TO_CART = "ADD_TO_CART",
  INCREASE_QUANTITY = "INCREASE_QUANTITY",
  DECREASE_QUANTITY = "DECREASE_QUANTITY",
}

export interface TAction {
  payload: any;
  type: TActionTypes;
}

export const removeFromCart = (id: string): TAction => ({
  payload: id,
  type: TActionTypes.REMOVE_PRODUCT,
});

export const addToCart = (product: TProduct): TAction => ({
  payload: product,
  type: TActionTypes.ADD_TO_CART,
});

export const increaseQuantity = (
  id: string,
  priceDefault: number
): TAction => ({
  payload: {
    id,
    priceDefault,
  },
  type: TActionTypes.INCREASE_QUANTITY,
});

export const decreaseQuantity = (
  id: string,
  priceDefault: number
): TAction => ({
  payload: {
    id,
    priceDefault,
  },
  type: TActionTypes.DECREASE_QUANTITY,
});
