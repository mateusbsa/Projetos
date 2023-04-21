import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { storage } from '../firebase';
import { getStorage, ref, listAll } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAll} from '../fotos';
import { useEffect, useState } from 'react';
import { Photo } from '../types';
import * as fotos from '../fotos';
import { PhotoItem } from '../teste';


export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  
 
  
  const getPhotos = async () => {
    setPhotos(await fotos.getAll());
  }
 useEffect(()=>{
    getPhotos();
  }, []);
  
 
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      {photos.map((item, index)=>(
        <View style={styles.container}key ={index}>
        <img  src={item.url} alt={item.name} />
          </View>
      ))}
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Photolist:{
    width: '100%',
    alignItems: 'center'
  },
  img:{
    width: '100%',
    alignItems: 'center'
  }
});
