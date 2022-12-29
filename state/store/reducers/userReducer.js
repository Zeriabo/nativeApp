import { UPDATE_USERNAME } from "../../../actions/user";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logOut(state) {
      return {
        ...state,
        active: false,
        dateofbirth: null,
        email: "",
        idUser: null,
        name: "",
        token: "",
      };
    },
    signIn(state, action) {
      console.log(action);
      return {
        ...state,
        active: action.payload.active,
        dateofbirth: action.payload.dateofbirth,
        email: action.payload.email,
        idUser: action.payload.idUser,
        name: action.payload.name,
        token: action.payload.token,
      };
    },
  },
});
export const { logOut, signIn } = userSlice.actions;
export default userSlice.reducer;
