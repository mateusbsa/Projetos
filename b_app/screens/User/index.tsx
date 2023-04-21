import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import {Container, ContainerBarraMenu, ContainerIconsPesquisa, ContainerMenu, ContainerUser, IconeUser, SeparaçãoMenu


} from "./styles";

import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { ScrollView } from "react-native-gesture-handler";
import {useFonts, Koulen_400Regular} from '@expo-google-fonts/koulen';
import { ContainerNavegador } from "../Home/styles";

export default function User({ navigation }) {

const handleAddTask = () => {
  console.log('oi');
}
const BotHome = () => {
    console.log("Home");
    navigation.navigate('Home')
  }
  const BotList = () => {
    console.log("List");
  }
  const BotUser = () => {
    console.log("User");
    navigation.navigate('User')
  }

  return (
  
    <Container>
        <ContainerUser>
            <IconeUser></IconeUser>
            <Text>Nome do Usuário</Text>
        </ContainerUser>
      

      <ContainerMenu>
        <ScrollView>
            <ContainerBarraMenu></ContainerBarraMenu>
            <SeparaçãoMenu></SeparaçãoMenu>
            <ContainerBarraMenu></ContainerBarraMenu>
            <SeparaçãoMenu></SeparaçãoMenu>
            <ContainerBarraMenu></ContainerBarraMenu>
            <SeparaçãoMenu></SeparaçãoMenu>
            <ContainerBarraMenu></ContainerBarraMenu>
            <SeparaçãoMenu></SeparaçãoMenu>
            <ContainerBarraMenu></ContainerBarraMenu>
            <SeparaçãoMenu></SeparaçãoMenu>
            <ContainerBarraMenu></ContainerBarraMenu>
            <SeparaçãoMenu></SeparaçãoMenu>
    </ScrollView>
        
      </ContainerMenu>


       
       

      <ContainerNavegador>
        <ContainerIconsPesquisa>
          <TouchableOpacity>
              <IconAntDesign name="home" size={25} color="#000000" onPress={() => BotHome()}></IconAntDesign>
          </TouchableOpacity>
        
        </ContainerIconsPesquisa>
        <ContainerIconsPesquisa>
          <TouchableOpacity>
            <IconAntDesign name="filetext1" size={25} color="#000000" onPress={() => BotList()}/>
          </TouchableOpacity>
        </ContainerIconsPesquisa>
        <ContainerIconsPesquisa>
          <TouchableOpacity>
           <IconAntDesign name="user" size={25} color="#000000" onPress={() => BotUser()}/>
          </TouchableOpacity>
        </ContainerIconsPesquisa>
       
          
      </ContainerNavegador>
      
    </Container>
    
  );
}
