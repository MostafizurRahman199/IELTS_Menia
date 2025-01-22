// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   leftServices: [],
//   rightServices: [],
//   packageName: "",
//   courseType: "IELTS General",
//   searchQuery: "",
//   selectedCategory: "all",
// };

// const packageSlice = createSlice({
//   name: "package",
//   initialState,
//   reducers: {
//     setLeftServices: (state, action) => {
//       state.leftServices = action.payload.map((service) => ({
//         ...service,
//         quantity: 1, // Initialize quantity for all services
//       }));
//     },
//     addToRightServices: (state, action) => {
//       const service = action.payload;
//       if (!state.rightServices.find((item) => item._id === service._id)) {
//         state.rightServices.push({ ...service, quantity: 1 }); // Add with default quantity 1
//         state.leftServices = state.leftServices.filter(
//           (item) => item._id !== service._id
//         );
//       }
//     },
//     removeFromRightServices: (state, action) => {
//       const service = action.payload;
//       if (!state.leftServices.find((item) => item._id === service._id)) {
//         state.leftServices.push({ ...service, quantity: 1 }); // Reset quantity to default when moved back
//         state.rightServices = state.rightServices.filter(
//           (item) => item._id !== service._id
//         );
//       }
//     },
//     updateQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       const service = state.rightServices.find((item) => item._id === id);
//       if (service) {
//         service.quantity = quantity;
//       }
//     },
//     setPackageName: (state, action) => {
//       state.packageName = action.payload;
//     },
//     setCourseType: (state, action) => {
//       state.courseType = action.payload;
//     },
//     setSearchQuery: (state, action) => {
//       state.searchQuery = action.payload;
//     },
//     setSelectedCategory: (state, action) => {
//       state.selectedCategory = action.payload;
//     },
//   },
// });

// export const {
//   setLeftServices,
//   addToRightServices,
//   removeFromRightServices,
//   updateQuantity,
//   setPackageName,
//   setCourseType,
//   setSearchQuery,
//   setSelectedCategory,
// } = packageSlice.actions;

// export default packageSlice.reducer;


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
