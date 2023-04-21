import React from 'react';
import database from '@react-native-firebase/database';



const deleteUser = (Item) => {
    database()
      .ref('users/' + Item.Id)
      .remove()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };