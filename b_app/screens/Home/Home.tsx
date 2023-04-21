import React from "react";
import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import {Container,
  ContainerPesquisa,
  ContainerCardapio,
  ContainerCategorias,
  ContainerNavegador,
  Pesquisa,
  IconePesquisa,
  IconeCategoria,
  AreaCategoria,
  AreaCardapio,
  ContainerCardapioFoto,
  ContainerTextoCardapio,
  SeparaçãoCardapio,
  ContainerIconsPesquisa,
  ContainerPublicidade,
  Publicidade

} from "./styles";

import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import { ScrollView } from "react-native-gesture-handler";
import {useFonts, Koulen_400Regular} from '@expo-google-fonts/koulen';

export default function Home({ navigation }) {

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


let categoria = [{id: 1, nome:"Sanduiches", imagem: require("../../assets/images/sanduiche.jpg")},
{id: 2, nome:"Sobremesas", imagem: require("../../assets/images/sobremesa.jpg")},
{id: 3, nome:"Pizzas", imagem: require("../../assets/images/pizza.jpg")},
{id: 4, nome:"Açai", imagem: require("../../assets/images/acai.jpg")},
{id: 5, nome:"Salgados", imagem: require("../../assets/images/salgado.jpg")}];
let cardapio = ["Sanduiches", "Sobremesas","Pizzas","Sanduiches", "Sobremesas","Pizzas","Sanduiches", "Sobremesas","Pizzas"];

  return (
  
    <Container>
      <ContainerPesquisa>
        <Pesquisa>
          <IconePesquisa>
            <IconEvilIcons name="search" size={25} color="#000000" />
            
          </IconePesquisa>
        <Text>Pesquisa</Text>
        </Pesquisa>
      </ContainerPesquisa>

      <ScrollView>

      <ContainerCategorias>
        <ScrollView
        horizontal = {true}
        >
          
            {categoria.map((product) =>(
              <TouchableOpacity onPress={handleAddTask}>
              <AreaCategoria>
                <IconeCategoria key={product.imagem}>
                  <Image
                    source={product.imagem}
                    style = {{ width: 79, height: 79, borderRadius: 50 }}
                  />
                </IconeCategoria>
                <Text>{product.nome}</Text>
              </AreaCategoria></TouchableOpacity>
            ))}
          
        </ScrollView>
      </ContainerCategorias>
      
      <ContainerPublicidade>
        <Publicidade></Publicidade>
      </ContainerPublicidade>
        
      <ContainerCardapio>
        {cardapio.map((ItemCardapio) => (
          <ScrollView>    
            <TouchableOpacity onPress={handleAddTask}>
              <AreaCardapio >
                <ContainerCardapioFoto></ContainerCardapioFoto>
                <ContainerTextoCardapio>
                  <Text >Nome do prato</Text>
                  <Text >Nome do restaurante</Text>
                  <Text >Tempo de preparo</Text>
                </ContainerTextoCardapio>
                <SeparaçãoCardapio></SeparaçãoCardapio>
              </AreaCardapio>
            </TouchableOpacity>        
          </ScrollView>
            ))}
      </ContainerCardapio>
       
      </ScrollView>  
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
