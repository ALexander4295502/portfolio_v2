import { combineReducers } from "redux";
import messages from "./messages";
import pendingResponseNum from "./pendingResponse";
import sidebarOpen from "./sidebar";

export const rootReducer = combineReducers({
  messages,
  pendingResponseNum,
  sidebarOpen
});
