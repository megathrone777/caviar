import React from "react";
import { set as setToLocalStorage } from "local-storage";

import { TProduct } from "~/components/ProductDetails/types";
import { TAction, TActionTypes } from "./actions";
import { TState } from "./initialState";

const setStateToLocalStorage = (currentState: TState): TState => {
  setToLocalStorage<TState>("state", currentState);

  return currentState;
};

const reducer: React.Reducer<TState, TAction> = (state, { payload, type }) => {
  const actions = {
    [TActionTypes.REMOVE_PRODUCT]: (): TState => {
      const products = [...state.cart.products].filter(
        (product: TProduct) => product.id !== payload.id
      );

      return setStateToLocalStorage({
        ...state,
        cart: {
          ...state.cart,
          products,
        },
      });
    },

    [TActionTypes.ADD_TO_CART]: (): TState => {
      const products = [...state.cart.products];
      const productIndex = products.findIndex(
        (product: TProduct) => product.id === payload.id
      );

      const isProductInCart = productIndex > -1;

      if (isProductInCart) {
        products[productIndex].quantity = products[productIndex].quantity + 1;
      } else {
        products.push(payload);
      }

      return setStateToLocalStorage({
        ...state,
        cart: {
          ...state.cart,
          products,
        },
      });
    },

    DEFAULT: (): TState => {
      return state;
    },
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
