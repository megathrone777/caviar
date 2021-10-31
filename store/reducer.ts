import React from "react";
import { set as setToLocalStorage } from "local-storage";

import { TCartProduct } from "~/components";
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
        (product: TCartProduct) => product.id !== payload
      );

      return setStateToLocalStorage({
        ...state,
        cart: {
          ...state.cart,
          products,
        },
      });
    },

    [TActionTypes.INCREASE_QUANTITY]: (): TState => {
      const products = [...state.cart.products];

      const foundIndex = products.findIndex(
        (product: TCartProduct) => product.id === payload.id
      );
      products[foundIndex].quantity = products[foundIndex].quantity + 1;
      products[foundIndex].totalPrice =
        products[foundIndex].totalPrice + products[foundIndex].priceDefault;

      return setStateToLocalStorage({
        ...state,
        cart: {
          ...state.cart,
          products,
        },
      });
    },

    [TActionTypes.DECREASE_QUANTITY]: (): TState => {
      const products = [...state.cart.products];

      const foundIndex = products.findIndex(
        (product: TCartProduct) => product.id === payload.id
      );
      products[foundIndex].quantity = products[foundIndex].quantity - 1;
      products[foundIndex].totalPrice =
        products[foundIndex].totalPrice - products[foundIndex].priceDefault;

      return setStateToLocalStorage({
        ...state,
        cart: {
          ...state.cart,
          products,
        },
      });
    },

    [TActionTypes.ADD_TO_CART]: (): TState => {
      console.log(payload);
      const products = [...state.cart.products];
      const foundIndex = products.findIndex(
        (product: TCartProduct) => product.id === payload.id
      );

      if (products[foundIndex]) {
        products[foundIndex].quantity++;
        products[foundIndex].totalPrice += parseInt(payload.priceDefault);
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
