/* eslint-disable @typescript-eslint/no-explicit-any */
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./Product/ProductSlice";
import { cartReducer } from "./Cart/CartSlice";

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage // define which storage to use
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: [thunk]
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
