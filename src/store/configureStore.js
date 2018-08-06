import { createStore, applyMiddleware } from "redux";
import moment from "moment";
import uuidV4 from "uuid/v4";
import thunkMiddleware from "redux-thunk";

import { rootReducer } from "../reducers";
import {MESSAGE_PAYLOAD_TYPE_AUDIO} from "../actions/messages";

const preloadedState = {
  messages: [
    {
      fromUser: false,
      content: "Hello, I'm Zheng. Nice to see you.🤓",
      timestamp: moment().toISOString(),
      id: uuidV4(),
      payload: {
        type: MESSAGE_PAYLOAD_TYPE_AUDIO,
        value: {
          playlist: [
            {
              name: 'this is a test',
              src: 'https://firebasestorage.googleapis.com/v0/b/chatbot-16a3e.appspot.com/o/%E6%A2%81%E5%8D%9A-%E6%97%A5%E8%90%BD%E5%A4%A7%E9%81%93.mp3?alt=media&token=d1e7dd6b-1f1c-4c22-a366-f38820040f0d'
            }
          ]
        }
      }
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
