import {
  CLEAR_MESSAGES,
  CREATE_MESSAGES,
  CREATE_BOT_RESPONSE
} from "../actions/messages";

const messages = (state = [], action) => {
  switch (action.type) {
    case CREATE_MESSAGES:
      return [
        ...state,
        {
          id: action.id,
          fromUser: action.fromUser,
          content: action.content,
          timestamp: action.timestamp,
          payload: action.payload
        }
      ];
    case CLEAR_MESSAGES:
      return [];
    case CREATE_BOT_RESPONSE:
      return [
        ...state,
        {
          ...action.message
        }
      ];
    default:
      return state;
  }
};

export default messages;
