import { createStore } from "redux";
import moment from "moment";
import uuidV4 from "uuid/v4";

import { rootReducer } from "../reducers";

const preloadedState = {
  messages: [
    {
      fromUser: false,
      content: "Hello, I am Zheng's bot. Nice to see you.",
      timestamp: moment().toISOString(),
      id: uuidV4()
    }
  ],
  pendingResponseNum: 0
};

export function configureStore() {
  return createStore(rootReducer, preloadedState);
}
