import { combineReducers } from "redux";
import messages from "./messages";
import pendingResponseNum from "./pendingResponse";

export const rootReducer = combineReducers({ messages, pendingResponseNum });
