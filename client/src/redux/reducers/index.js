import conversationReducer from "./conversation";
import messageReducer from "./message";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  conversation: conversationReducer,
  message: messageReducer,
});

export default allReducers;
