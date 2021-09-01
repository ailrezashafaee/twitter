import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyD_DE5JKu-VnVOq7lbP7ur4GtduzWinNFg",
  authDomain: "twitter-clone-7b61c.firebaseapp.com",
  projectId: "twitter-clone-7b61c",
  storageBucket: "twitter-clone-7b61c.appspot.com",
  messagingSenderId: "1055498121938",
  appId: "1:1055498121938:web:79cdaa248fd1d841b4b30b",
  measurementId: "G-N36V9M3QBN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
