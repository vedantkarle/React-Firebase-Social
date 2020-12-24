import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRTi6pENJ7gv3nceEdbFp8mFzwzbYSf3w",
  authDomain: "react-firebase-social-8f70c.firebaseapp.com",
  projectId: "react-firebase-social-8f70c",
  storageBucket: "react-firebase-social-8f70c.appspot.com",
  messagingSenderId: "467809594845",
  appId: "1:467809594845:web:5a91e13edc465ebe989a34",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
