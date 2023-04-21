import React from 'react';
import App from './App';

import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBClkbPu0IgX2WkySoZoI97u8Fnvtt0GiI",
    authDomain: "bonito-leva.firebaseapp.com",
    projectId: "bonito-leva",
    storageBucket: "bonito-leva.appspot.com",
    messagingSenderId: "765659658025",
    appId: "1:765659658025:web:4033d931990d2ee465e938",
    measurementId: "G-07XSLXSR54"
  };

if (!firebase.app.length) {
firebase.initializeApp(firebaseConfig);
}

export {firebase, database};

export default () => {
  return(
    <App />
  );
}