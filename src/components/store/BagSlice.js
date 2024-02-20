import { createSlice } from "@reduxjs/toolkit";

const bagItemSlice = createSlice({
  name: "bagItem",
  initialState: {
    initalVal : [],
    elementId : [],
  },
  reducers: {
    addToBag: (state, actions) => {
      state.initalVal.push(actions.payload)
    },
    removeToBag: (state, actions) => {
      const newVal = state.initalVal.filter((item) => item.id != actions.payload)
      state.initalVal = newVal
    },
    addElementId : (state,actions) => {
      state.elementId.push(actions.payload)
    },
    removeElementId : (state,actions) => {
      const newEleVal = state.elementId.filter((id) => id != actions.payload)
      state.elementId = newEleVal
    },
  },
});

export const bagItemAction = bagItemSlice.actions
export default bagItemSlice;
