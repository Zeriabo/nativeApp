import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import { combineReducers } from "redux";
import messageReducer from "./reducers/messageReducer";
import counterReducer from "./reducers/counterReducer";
import userReducer from "./reducers/userReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { readMessageApi } from "../../services/messageApi";
import { messageApi } from "../../services/messageApi";

import { userApi } from "../../services/userApi";
const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  messageReducer,
  counterReducer,
  userReducer,
  [userApi.reducerPath]: userApi.reducer,
  [messageApi.reducerPath]: messageApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(userApi.middleware)
      .concat(messageApi.middleware),
});
console.log(store.getState());
export const persistor = persistStore(store);
export default store;
