import initialState from "../reducers/initialState";
import {
  USER_NAME_SET,
  GET_MESSAGES_FULLFILLED,
  MESSAGE_ADDED
} from "../constants/actionTypes";

const reducer = (state = initialState.chat, action) => {
  switch (action.type) {
    case USER_NAME_SET: {
      const { userName } = action;
      return { ...state, userName };
    }
    case GET_MESSAGES_FULLFILLED: {
      const { messages } = action;
      return { ...state, messages };
    }
    case MESSAGE_ADDED: {
      const messages = { ...state.messages, ...action.message };
      return { ...state, messages };
    }
    default:
      return state;
  }
};

export default reducer;
