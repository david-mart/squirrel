import initialState from "../reducers/initialState";
import { GET_PHOTOS_FULLFILLED, PHOTO_ADDED } from "../constants/actionTypes";

const photoReducer = (state = initialState.photos, action) => {
  switch (action.type) {
    case GET_PHOTOS_FULLFILLED: {
      const { photos } = action;
      return [...photos];
    }
    case PHOTO_ADDED: {
      const { photo } = action;
      return [...state, photo];
    }
    default:
      return state;
  }
};

export default photoReducer;
