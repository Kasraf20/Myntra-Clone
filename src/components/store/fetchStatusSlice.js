import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    currentlyFatching: false,
  },
  reducers: {
    markFetchingStarted: (state) => {
      state.currentlyFatching = true;
    },

    markFetchingDone: (state) => {
      state.currentlyFatching = false;
    },
  },
});

export const fetchStatusAction = fetchStatusSlice.actions;

export default fetchStatusSlice;
