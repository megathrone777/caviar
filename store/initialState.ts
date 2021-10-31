import { get as getFromLocalStorage } from "local-storage";

import { TCartProduct } from "~/components";

export interface TState {
  cart: {
    products: TCartProduct[];
  };
}

const initialState: TState = getFromLocalStorage("state")
  ? getFromLocalStorage<TState>("state")
  : {
      cart: {
        products: [],
      },
    };

export { initialState };
