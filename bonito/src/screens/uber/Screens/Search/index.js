import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, View,Image, Text } from 'react-native';
import Search from '../../Components/Search';
import SearchDestination from '../../Components/SearchDestination';
import { Locat, ContainerView, Container, Linha, ContainerPerfil , ContainerViagens,
    ContainerPagamento, ContainerConfigurações, Back, ContainerNome, TextName, TextOptions } from './styles';
import Geocoder from 'react-native-geocoding';
import Globais from '../../Globais';


export default () => {


    Geocoder.init('AIzaSyCuLAWs4SkGprZtwige8ClrHMOEX2Tejf8');
    console.log(Geocoder);
    const handleLocationSelected = (data, { geometry }) => {
        console.log(geometry);
        getLocalizacao([geometry.location.lat,
              geometry.location.lng])
        };

    return(
     <Container>
         <Search onLocationSelected={handleLocationSelected}></Search>
         <SearchDestination></SearchDestination>
     </Container>
    
    
    );
    
   
    
    }
