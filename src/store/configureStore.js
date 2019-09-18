import { createStore, applyMiddleware } from "redux";
import throttle from "lodash/throttle";
import moment from "moment";
import uuidV4 from "uuid/v4";
import thunkMiddleware from "redux-thunk";

import { rootReducer } from "../reducers";
import { LOCAL_STORATE_MESSAGE_KEY } from "../helper/constants";
import { saveState, loadState } from "../helper/localStorage";

const getPreloadMessages = () => {
  const preloadMessages = loadState(LOCAL_STORATE_MESSAGE_KEY) || [];
  if (preloadMessages.length === 0) {
    preloadMessages.push({
      fromUser: false,
      content: "Hello, I'm Zheng. Nice to see you.🤓",
      timestamp: moment().toISOString(),
      id: uuidV4()
    });
  }
  return preloadMessages;
};

const preloadedState = {
  messages: getPreloadMessages(),
  pendingResponseNum: 0,
  sidebarOpen: false
};

export function configureStore() {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );

  store.subscribe(
    throttle(() => {
      saveState(store.getState().messages, LOCAL_STORATE_MESSAGE_KEY);
    }, 1000)
  );

  return store;
}
