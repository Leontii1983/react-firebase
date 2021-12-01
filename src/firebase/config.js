
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBHQn1TAS0AzyKGZ1Y9rXTk6-A3nZlsPVc",
  authDomain: "photo-gallery-f3beb.firebaseapp.com",
  projectId: "photo-gallery-f3beb",
  storageBucket: "photo-gallery-f3beb.appspot.com",
  messagingSenderId: "457581153440",
  appId: "1:457581153440:web:576fb1488e365aa999cdc5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp };