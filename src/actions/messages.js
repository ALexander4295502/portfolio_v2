import uuidV4 from "uuid/v4";
import moment from "moment";

import { sendMessage } from "../api/messageApi";

export const CREATE_MESSAGES = "CREATE_MESSAGES";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";
export const CREATE_BOT_RESPONSE = "CREATE_BOT_RESPONSE";

export const createMessages = (content, fromUser) => {
  return (dispatch, getState) => {
    sendMessage(content)
      .then(result => {
        dispatch(createBotResponse(result.data.response));
      })
      .catch(error => {
        console.warn(error);
        dispatch(
          createBotResponse(
            "Sorry, something bad happened and I am offline temporarily.🤐"
          )
        );
      });
    dispatch({
      type: CREATE_MESSAGES,
      ...createLocalMessage(content, fromUser)
    });
  };
};

function createLocalMessage(content, fromUser) {
  return {
    id: uuidV4(),
    fromUser,
    content,
    timestamp: moment().toISOString()
  };
}

export const clearMessages = () => ({
  type: CLEAR_MESSAGES
});

export const createBotResponse = response => ({
  type: CREATE_BOT_RESPONSE,
  message: createLocalMessage(response, false)
});
