import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import {ContainerNavegador, ContainerIconsPesquisa


} from "./styles";

import IconAntDesign from 'react-native-vector-icons/AntDesign';

export default () =>{
   

    const BotHome = () => {
        console.log("Home");
      }
      const BotList = () => {
        console.log("List");
      }
      const BotUser = () => {
        console.log("User");
      }
      
return(
  
    <ContainerNavegador>
    <ContainerIconsPesquisa>
      <TouchableOpacity>
          <IconAntDesign name="home" size={25} color="#000000" ></IconAntDesign>
      </TouchableOpacity>
    
    </ContainerIconsPesquisa>
    <ContainerIconsPesquisa>
      <TouchableOpacity>
        <IconAntDesign name="filetext1" size={25} color="#000000" />
      </TouchableOpacity>
    </ContainerIconsPesquisa>
    <ContainerIconsPesquisa>
      <TouchableOpacity>
       <IconAntDesign name="user" size={25} color="#000000"/>
      </TouchableOpacity>
    </ContainerIconsPesquisa>
   
      
  </ContainerNavegador>
   
);
}