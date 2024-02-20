import { createSlice } from "@reduxjs/toolkit";

const searchItemSlice = createSlice({
  name: "searchItem",
  initialState: "",
  reducers: {
    setSearchVal: (state, action) => {
      return action.payload;
    },
  },
});

export const searchItemAction = searchItemSlice.actions;

export default searchItemSlice;
