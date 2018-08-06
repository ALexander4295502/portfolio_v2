import { createStore, applyMiddleware } from "redux";
import moment from "moment";
import uuidV4 from "uuid/v4";
import thunkMiddleware from "redux-thunk";

import { rootReducer } from "../reducers";

const preloadedState = {
  messages: [
    {
      fromUser: false,
      content: "Hello, I'm Zheng. Nice to see you.🤓",
      timestamp: moment().toISOString(),
      id: uuidV4(),
    }
  ],
  pendingResponseNum: 0
};

export function configureStore() {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
}
