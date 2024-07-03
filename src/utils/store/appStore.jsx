import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./CartSlice";
import restaurantSlice from "./restaurantSlice";
import MenuSlice from "./MenuSlice";
import signSlice from "./signSlice";

const appStore = configureStore({
  reducer: {
    cart: Cartreducer,
    restaurants: restaurantSlice,
    menu: MenuSlice,
    sign: signSlice,
  },
});

export default appStore;
