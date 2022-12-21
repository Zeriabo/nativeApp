import { UPDATE_USERNAME } from "../../../actions/user";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser(state, action) {
      state = action.payload;
    },
    logOut(state) {
      state = {};
    },
    signIn(state, action) {
      state = action.payload;
    },
  },
});
export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
