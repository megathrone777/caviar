import { get as getFromLocalStorage } from "local-storage";

import { TProduct } from "~/components";

interface TShopSettings {
  shopIsClosed: boolean;
}

export interface TState {
  cart: {
    products: TProduct[];
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
