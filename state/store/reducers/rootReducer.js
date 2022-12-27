import counterReducer from "./counterReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer(state.user, action),
  messages: messageReducer(state.messages, action),
  counter: counterReducer(state.counter, action),
});

export default rootReducer;
