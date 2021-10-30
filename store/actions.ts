import { TCartProduct } from "~/components";

export enum TActionTypes {
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  ADD_TO_CART = "ADD_TO_CART",
}

export interface TAction {
  payload: any;
  type: TActionTypes;
}

export const addToCart = (product: TCartProduct): TAction => ({
  payload: product,
  type: TActionTypes.ADD_TO_CART,
});

export const removeFromCart = (id: string): TAction => ({
  payload: id,
  type: TActionTypes.REMOVE_PRODUCT,
});
