import { UPDATE_USERNAME } from "../../../actions/user";
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    counterChange(state, action) {
      state += action.payload;

      return state;
    },
  },
});
export const { counterChange } = counterSlice.actions;
export default counterSlice.reducer;
