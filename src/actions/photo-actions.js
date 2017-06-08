import {
  GET_PHOTOS_REJECTED,
  GET_PHOTOS_REQUESTED,
  GET_PHOTOS_FULLFILLED,
  PHOTO_ADDED
} from "../constants/actionTypes";
import database from "../store/database";

export const getPhotos = () => dispatch => {
  dispatch(getPhotosRequestedAction());
  return database
    .ref("/photos")
    .once("value", snap => {
      const photos = snap.val();
      dispatch(getPhotosFulfilledAction(photos));
    })
    .catch(error => {
      console.log(error);
      dispatch(getPhotosRejectedAction());
    });
};

const getPhotosRequestedAction = () => {
  return {
    type: GET_PHOTOS_REQUESTED
  };
};

const getPhotosRejectedAction = () => {
  return {
    type: GET_PHOTOS_REJECTED
  };
};

const getPhotosFulfilledAction = photos => {
  return {
    type: GET_PHOTOS_FULLFILLED,
    photos
  };
};

const getPhotosAddedAction = photo => {
  return {
    type: PHOTO_ADDED,
    photo
  };
};

export const watchPhotosAddedEvent = () => dispatch => {
  console.log('added');
  database.ref("/photos").on("child_added", snap => {
    dispatch(getPhotosAddedAction(snap.val()));
  });
};
