export enum TActionTypes {
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}

export interface TAction {
  payload: any;
  type: TActionTypes;
}

export const removeFromCart = (id: number): TAction => ({
  payload: id,
  type: TActionTypes.REMOVE_PRODUCT,
});
