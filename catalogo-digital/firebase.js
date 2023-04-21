import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBW_GX7qpovH-U3weA7JaO9uZdT7YqviBs",
    authDomain: "catalogo-digital-53a31.firebaseapp.com",
    projectId: "catalogo-digital-53a31",
    storageBucket: "catalogo-digital-53a31.appspot.com",
    messagingSenderId: "265964329599",
    appId: "1:265964329599:web:d1ca2765e8507200b77d4a",
    measurementId: "G-H5K7J6M6WW"
  };
  
;
const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);