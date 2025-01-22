import { configureStore } from "@reduxjs/toolkit";
import packageReducer from "./features/packageSlice";
import courseReducer from "./features/courseSlice";

export const store = configureStore({
  reducer: {
    package: packageReducer,
    course: courseReducer,
  },
});
