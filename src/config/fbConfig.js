import dotenv from 'dotenv';
import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

dotenv.config();

var firebaseConfig = {
    apiKey: process.env.FB_API_KEY,
    authDomain: "jolly-react-redux-app.firebaseapp.com",
    databaseURL: "https://jolly-react-redux-app.firebaseio.com",
    projectId: "jolly-react-redux-app",
    storageBucket: "jolly-react-redux-app.appspot.com",
    messagingSenderId: process.env.FB_MESSENGER_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.FB_MEASUREMENT_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;