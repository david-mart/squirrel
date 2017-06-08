import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDvIJIRTcl8NKwpMl_WlS9d4e-3XV9ra7M",
  authDomain: "squirrel-93cfa.firebaseapp.com",
  databaseURL: "https://squirrel-93cfa.firebaseio.com",
  projectId: "squirrel-93cfa",
  storageBucket: "squirrel-93cfa.appspot.com",
  messagingSenderId: "311347497464"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
