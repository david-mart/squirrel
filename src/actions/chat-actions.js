import {
  USER_NAME_SET,
  GET_MESSAGES_FULLFILLED,
  MESSAGE_ADDED,
  POST_MESSAGE
} from "../constants/actionTypes";
import database from "../store/database";

const getUserNameSetAction = userName => ({
  type: USER_NAME_SET,
  userName
});

export const setUserName = userName => dispatch =>
  dispatch(getUserNameSetAction(userName));

export const getMessages = () => dispatch =>
  database
    .ref("/messages")
    .once("value", snap => dispatch(getMessagesFullfilledAction(snap.val())));

const getMessagesFullfilledAction = messages => ({
  type: GET_MESSAGES_FULLFILLED,
  messages
});

const getMessageAddedAction = message => {
  return {
    type: MESSAGE_ADDED,
    message
  };
};

export const watchMessagesAddedEvent = () => dispatch => {
  database.ref("/messages").on("child_added", snap => {
    dispatch(getMessageAddedAction({ [snap.key]: snap.val() }));
  });
};

const getMessageSentAction = () => ({
  type: POST_MESSAGE
});

export const sendMessage = data => dispatch =>
  database.ref("/messages").push(data).then(dispatch(getMessageSentAction()));
