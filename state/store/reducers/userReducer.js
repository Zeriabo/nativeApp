import { UPDATE_USERNAME } from "../../../actions/user";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logOut(state) {
      state.active = false;
      return state;
    },
    signIn(state, action) {
      state = action.payload;
      return state;
    },
  },
});
export const { logOut, signIn } = userSlice.actions;
export default userSlice.reducer;
