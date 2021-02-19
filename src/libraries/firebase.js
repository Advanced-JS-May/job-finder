import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// const {
//   REACT_APP_API_KEY,
//   REACT_APP_AUTH_DOMAIN,
//   REACT_APP_DATABASE_URL,
//   REACT_APP_PROJECT_ID,
//   REACT_APP_STORAGE_BUCKET,
//   REACT_APP_MESSAGING_SENDER_ID,
//   REACT_APP_APP_ID,
// } = process.env;


const REACT_APP_API_KEY="AIzaSyBWQEpAA5MyZ36GsXoyQv_skG4DtPwd1xg";
const REACT_APP_AUTH_DOMAIN="job-seeker-8e38e.firebaseapp.com";
const REACT_APP_DATABASE_URL="https://job-seeker-8e38e.firebaseio.com";
const REACT_APP_PROJECT_ID="job-seeker-8e38e";
const REACT_APP_STORAGE_BUCKET="job-seeker-8e38e.appspot.com";
const REACT_APP_MESSAGING_SENDER_ID="850523542035";
const REACT_APP_APP_ID="1:850523542035:web:b39819a16bac28372765e6";

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
};


firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const storage = firebase.storage();

export default firebase;