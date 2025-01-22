


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leftServices: [], // Items available to be dragged
  rightServices: [], // Items added to the right side
  packageName: "",
  courseType: "IELTS General",
};

const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    setLeftServices(state, action) {
      state.leftServices = action.payload;
    },
    addToRightServices(state, action) {
      const service = action.payload;
      const exists = state.rightServices.find((item) => item._id === service._id);
      if (!exists) {
        state.rightServices.push({ ...service, quantity: 1 });
      }
    },
    removeFromRightServices(state, action) {
      const id = action.payload;
      const service = state.rightServices.find((item) => item._id === id);
      if (service) {
        state.rightServices = state.rightServices.filter((item) => item._id !== id);
        state.leftServices.push(service); // Add it back to the left side
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const service = state.rightServices.find((item) => item._id === id);
      if (service) {
        service.quantity = quantity;
      }
    },
    setPackageName(state, action) {
      state.packageName = action.payload;
    },
    setCourseType(state, action) {
      state.courseType = action.payload;
    },
  },
});

export const {
  setLeftServices,
  addToRightServices,
  removeFromRightServices,
  updateQuantity,
  setPackageName,
  setCourseType,
} = packageSlice.actions;

export default packageSlice.reducer;
