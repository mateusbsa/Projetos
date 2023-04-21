import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View,Image, Text } from 'react-native';
import Perfil from './Screens/Perfil';
import SuasViagens from './Screens/SuasViagens';
import Pagamento from './Screens/Pagamento';
import Ofertas from './Screens/Ofertas';
import ConheçaBonito from './Screens/ConheçaBonito';
import Uber from '../../uber/Screens/HomeScreen';
import Icon from 'react-native-vector-icons/Entypo';
import BackImage from '../../../assets/back.png';

import { Locat, ContainerView, Container, Linha, ContainerPerfil , ContainerViagens,
    ContainerPagamento, ContainerConfigurações, Back, ContainerNome, TextName, TextOptions } from './styles';




export default () => {
    const navigation = useNavigation();
    
    const selctViagens = () => {
        navigation.navigate('SuasViagens');
    };
    const selctPagamento = () => {
        navigation.navigate('Pagamento');
    };
    const selctConheça = () => {
        navigation.navigate('ConheçaBonito');
    };
    const back = () => {
        navigation.navigate('Uber');
    };


    return(
     <Container>
         <Back onPress={back}>
            <Image source={BackImage} />
         </Back>
        <ContainerPerfil>

        </ContainerPerfil>

         
        <ContainerNome>
            <TextName>JARDIAELSON SANTOS</TextName>
        </ContainerNome>
    
         
         <ContainerView>   
            <Linha/>
            <TextOptions onPress={selctViagens}>VIAGENS</TextOptions>
        </ContainerView>
           
        <ContainerView>
            <Linha/>
            <TextOptions onPress={selctPagamento}>PAGAMENTO</TextOptions>
        </ContainerView>

        <ContainerView>
            <Linha/>
            <TextOptions onPress={selctConheça}>CONHEÇA BONITO</TextOptions>
        </ContainerView>
     </Container>
    
    
    );
    
   
    
    }
