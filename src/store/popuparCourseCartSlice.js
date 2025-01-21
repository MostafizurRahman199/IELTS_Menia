const popularCourseCartSlice = createSlice({
    name: 'popularCourseCart',
    initialState: [],
    reducers: {
        addCourseToCart(state, action) {
            state.push(action.payload);
        },
        removeCourseFromCart(state, action) {
            return state.filter(course => course.id !== action.payload.id);
        },
        clearCart(state, action) {
            return [];
        },
    },
});


export const { addCourseToCart, removeCourseFromCart, clearCart } = popularCourseCartSlice.actions;
export default popularCourseCartSlice.reducer;
