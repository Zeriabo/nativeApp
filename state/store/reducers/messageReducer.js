import { SEND_MESSAGE } from "../../../actions/user";
import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {},
  reducers: {
    recieveMessage(state, action) {
      state = action.payload;
    },
    sendMessage(state) {
      state = {};
    },
  },
});
export const { recieveMessage, sendMessage } = messageSlice.actions;
export default messageSlice.reducer;
