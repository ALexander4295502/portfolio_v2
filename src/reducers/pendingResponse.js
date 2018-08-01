import { CREATE_MESSAGES, CREATE_BOT_RESPONSE } from "../actions/messages";

const pendingResponseNum = (state = 0, action) => {
  switch (action.type) {
    case CREATE_MESSAGES:
      return state + 1;
    case CREATE_BOT_RESPONSE:
      return state > 0 ? state - 1 : 0;
    default:
      return state;
  }
};

export default pendingResponseNum;
