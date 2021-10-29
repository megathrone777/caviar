import { TProduct } from "~/components";

export enum TActionTypes {
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  ADD_TO_CART = "ADD_TO_CART",
}

export interface TAction {
  payload: any;
  type: TActionTypes;
}

export const removeFromCart = (id: number): TAction => ({
  payload: id,
  type: TActionTypes.REMOVE_PRODUCT,
});

export const addToCart = (product: TProduct): TAction => ({
  payload: product,
  type: TActionTypes.ADD_TO_CART,
});
