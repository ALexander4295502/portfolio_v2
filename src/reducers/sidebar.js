import { TOGGLE_SIDEBAR } from "../actions/sidebar";

const sidebarOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};

export default sidebarOpen;
