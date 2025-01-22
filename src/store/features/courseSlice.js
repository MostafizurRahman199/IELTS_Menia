import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCourses: [], // Store added courses here
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    addToCart(state, action) {
      const course = action.payload;
      const exists = state.cartCourses.find((item) => item._id === course._id);
      if (!exists) {
        state.cartCourses.push(course);
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.cartCourses = state.cartCourses.filter((item) => item._id !== id);
    },
    clearCart(state) {
      state.cartCourses = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = courseSlice.actions;
export default courseSlice.reducer;
