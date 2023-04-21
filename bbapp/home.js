import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, remove, set } from 'firebase/database';
import React, { useState, useEffect } from "react";

import logo from './assets/a.png'; 


export default function Home({navigation}) {

  const firebaseConfig = {
      apiKey: "LdwO8q0t8dPLSEJLUhezCAjSeE3AFkGLa9ttBJcU",
      authDomain: "ainsof-ecbee.firebaseapp.com",
      databaseURL: "https://ainsof-ecbee-default-rtdb.firebaseio.com",
      projectId: "ainsof-ecbee",
      storageBucket: "ainsof-ecbee.appspot.com",
      messagingSenderId: "893550354512",
      appId: "1:893550354512:web:fba8f89d756c8efd01b155"
    
  };
  
  const apps = initializeApp(firebaseConfig);
  const db = getDatabase(apps);

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");
  const [luz, setluz] = useState(0);
  const [solo, setsolo] = useState(0);
  const [umidade, setumidade] = useState(0);
  const [temperatura, settemperatura] = useState(0);
  const [ ping, setping] = useState("");

  useEffect(() => {
    onValue(ref(db, "/data/Luz"), (snapshot) => {
 
      const data = snapshot.val();
      setluz(((data/1023)*100).toFixed(2))
    });
  }, []);

  

  useEffect(() => {
    onValue(ref(db, "/data/Solo"), (snapshot) => {
      const data = snapshot.val();
      let a = (((((data-560)/200)*100)-100)*-1).toFixed(2)
      if(a> 100){a = 100}
      setsolo(data)
    });
  }, []);

  useEffect(() => {
    onValue(ref(db, "/data/Umidade"), (snapshot) => {
      const data = snapshot.val();
      setumidade(data)
    });
  }, []);

  useEffect(() => {
    onValue(ref(db, "/data/Temperatura"), (snapshot) => {
      const data = snapshot.val();
      settemperatura(data)
    });
  }, []);

  useEffect(() => {
    onValue(ref(db, "/data/Ping"), (snapshot) => {
      const data = snapshot.val();
      setping(data)
    });
  }, []);


///
const a = todos[0];
const b = todos[1];
const c = todos[2];
const d = todos[8];

console.log(d);




for(let i in d){
  
    console.log(d.luz);
  
}


  const handleDelete = () => {
    set(ref(db, `/data/Luz`),0);
    set(ref(db, `/data/Solo`),0);
    set(ref(db, `/data/Temperatura`),0);
    set(ref(db, `/data/Umidade`),0);
  };
 //chandleDelete();
//<Image source={logo} style={{ width: 320, height: 135, marginBottom: 20 }} /> 
//<View style={styles.icon2}>
        
     //   <Feather name="arrow-right" size={30} color="#FFF" onPress={() => navigation.navigate('config')}/> 
      
   //   </View>

  return (
  
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerbase}>
      <Text style={styles.font2}>SISTEMA DE AUTOMAÇÃO</Text>
     
      
      
      </View>
    
      <View style={styles.barra}>
          <View style={styles.icon}>
            <Feather name="sun" size={44} color="#FFF" /> 
          </View>
          
          <View style={styles.dados}> 
            <Text style={styles.font}>Atualizado</Text>
            <View style={styles.firebase}>
              <Text style={styles.es}>{ping}</Text>
            </View> 
          </View> 
      </View>

      <View style={styles.barra}>
          <View style={styles.icon}>
            <Feather name="sun" size={44} color="#FFF" /> 
          </View>
          
          <View style={styles.dados}> 
            <Text style={styles.font}>Luminosidade</Text>
            <View style={styles.firebase}>
              <Text style={styles.es}>{luz}%</Text>
            </View> 
          </View> 
      </View>

      <View style={styles.barra}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="water-percent" size={44} color="#FFF" />
          </View>
          
          <View style={styles.dados}> 
            <Text style={styles.font}>Umidade do Solo</Text>
            <View style={styles.firebase}>
              <Text style={styles.es}>{solo}</Text>
            </View> 
          </View> 
      </View>

      <View style={styles.barra}>
          <View style={styles.icon}>
            <FontAwesome5 name="temperature-high" size={44} color="#FFF" /> 
          </View>
          
          <View style={styles.dados}> 
            <Text style={styles.font}>Temperatura do Ar</Text>
            <View style={styles.firebase}>
              <Text style={styles.es}>{temperatura}°</Text>
            </View> 
          </View> 
      </View>

      <View style={styles.barra}>
        
          <View style={styles.icon}>
            <MaterialCommunityIcons name="water-opacity" size={44} color="#FFF" />
          </View>
          
          <View style={styles.dados}> 
            <Text style={styles.font}>Umidade do Ar</Text>
            <View style={styles.firebase}>
              <Text style={styles.es}>{umidade}%</Text>
            </View> 
          </View> 
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerbase:{
    alignItems: 'center',
   
    marginTop: 30,
    marginBottom: 30,
    height: 50,
    width: 400,
    backgroundColor: '#196F3D',
  },
  barra: {
    alignItems: 'center',
  
    backgroundColor: '#196F3D',
    height: 120,
    width: 350,
    borderRadius: 20,
    marginBottom: 20,
  },
  icon: {
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -250,
    marginTop: 27,
    height: 50,
    width: 50,
    marginBottom: 20,
  },
  icon2: {
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 300,
    marginTop: -35,
    height: 50,
    width: 50,
    marginBottom: 20,
  },
  dados: {
 
    height: 50,
    width: 300,
  },
  firebase: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 350,
  },
  es: {
    textAlign: 'center',
    color: '#FFF',
    marginTop:-210,
    fontSize: 40,
    width: 215,
  },
  font: {
    color: '#FFF',
    marginLeft: 0,
    marginTop: -10,
    fontSize: 15,
    
  },
  font2: {
    color: '#FFF',
    marginLeft: -150,
    marginTop: 15,
    fontSize: 15,
  },
  
});
