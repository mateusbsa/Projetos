import { initializeApp } from 'firebase/app';
  const firebaseConfig = {
    apiKey: "AIzaSyByrhCeS1SYI8VZjfRAFgCw0yaqyi89i_Y",
    authDomain: "ainsof-ecbee.firebaseapp.com",
    databaseURL: "https://ainsof-ecbee-default-rtdb.firebaseio.com",
    projectId: "ainsof-ecbee",
    storageBucket: "ainsof-ecbee.appspot.com",
    messagingSenderId: "893550354512",
    appId: "1:893550354512:web:fba8f89d756c8efd01b155"
  
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);