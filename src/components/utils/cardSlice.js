import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // reducer/reducer function/ actions
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearItem: () => {
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions; // exporting actions
export default cartSlice.reducer; // exporting reducers
