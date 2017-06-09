import { combineReducers } from "redux";
import photos from "./photo-reducer";
import chat from "./chat-reducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  photos,
  chat,
  routing: routerReducer
});

export default rootReducer;
