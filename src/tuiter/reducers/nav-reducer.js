import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: 'home',
  reducers: {
    updatePage(state, action) {
      state = action.payload;
      return state;
    }
  }
});

export const {updatePage} = navSlice.actions;
export default navSlice.reducer;