import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from './features/cart/cartSlice'
import modalSlice from "./features/modal/modalSlice";

export const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
        modal: modalSlice
    }
});

