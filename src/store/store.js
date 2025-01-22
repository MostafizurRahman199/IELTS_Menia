import { configureStore } from "@reduxjs/toolkit";
import packageReducer from "./features/packageSlice";

export const store = configureStore({
  reducer: {
    package: packageReducer,
  },
});
