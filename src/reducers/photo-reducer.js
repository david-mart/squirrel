import initialState from "../reducers/initialState";
import { GET_PHOTOS_FULLFILLED } from "../constants/actionTypes";

const photoReducer = (state = initialState.photos, action) => {
  switch (action.type) {
    case GET_PHOTOS_FULLFILLED: {
      const { photos } = action;
      return [...state, ...photos];
    }
    default:
      return state;
  }
};

export default photoReducer;
