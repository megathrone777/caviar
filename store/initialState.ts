import { get as getFromLocalStorage } from "local-storage";

import { TCartProduct } from "~/components";

interface TShopSettings {
  shopIsClosed: boolean;
}

export interface TState {
  cart: {
    products: TCartProduct[];
  };
  shopSettings: TShopSettings;
}

const initialState: TState = getFromLocalStorage("state")
  ? getFromLocalStorage<TState>("state")
  : {
      cart: {
        products: [],
      },
      shopSettings: {
        shopIsClosed: false,
      },
    };

export { initialState };
