import React, { Component, Fragment} from 'react';
import { View, Text, PermissionsAndroid, ScrollView, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE , Marker } from 'react-native-maps';
import Search from '../../Components/Search';
import Local from '@react-native-community/geolocation';
import { useState, state } from 'react';
import { Locat, Textet, Container, ContainerMap, Menu, ContainerMenu, 
  ContainerPropaganda, Scrooler, ContainerScrooler,ContainerSearch,
BootomEsc, Back } from './styles';
import MapViewDirections from 'react-native-maps-directions';
import { useRef } from 'react';
import markerImage from '../../../../assets/marker.png';
import { getPixelSize } from '../../../../../utils';
import Geocoder from 'react-native-geocoding';
import UberTypes from '../../Components/UberTypes';
import { useNavigation } from '@react-navigation/native';
import  Detalhes  from '../../Components/Detalhes';
import BackImage from '../../../../assets/back.png';
import Globais from '../../Globais';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Entypo';
import { color } from 'react-native-reanimated';
import NameMapa from '../../Screens/Geocodin';


export default () => {

  const navigation = useNavigation();

   
 
  const [ latitud,SetLatitudeOri] = useState(-8.47537239247054);
  const [ longitud,SetLongitudeOri] = useState(-35.72609076875554);
  const [ latitudeDest,SetLatitudeDest] = useState(0);
  const [ longitudeDest,SetLongitudeDest] = useState(0);
  const [titulo, setTitulo] = useState('');
  const [mapa, getLocalizacao] = useState(null);
  const [setref, getSetref] = useState(null);
  const [Id, setId] = useState("Mateus");
  const [users, setUsers] = useState();
  const [resultado, setr] = useState(null);
  const mapel = useRef(null);
  
  
  
  Geocoder.init('AIzaSyCuLAWs4SkGprZtwige8ClrHMOEX2Tejf8');
  //navigation.navigate('draw');
  


      
     
  
  const origem = {
    latitude: latitud,
    longitude: longitud,
    latitudeDelta: 0.0143,
    longitudeDelta: 0.0134
  }
  

  const obetrLocal = async () => {
    
      Local.getCurrentPosition((pos)=>{
              console.log(pos);
              SetLatitudeOri(pos.coords.latitude);
              SetLongitudeOri(pos.coords.longitude);
          },
          (Erro)=>{
              alert('Erro: '+ error.message);
          },
          {
              enableHighAccuracy:true, timeout: 120000, maximumAge: 1000
          }
      );
  };
  
  const handleLocationSelected = (data, { geometry }) => {
    getLocalizacao([geometry.location.lat,
          geometry.location.lng])
    };

    if (mapa != null){
      const resultadoCidade = Geocoder.from({
        latitude:mapa[0],
        longitude: mapa[1]});  
    console.log(resultadoCidade);
  }

  const selctinput = () => {
      navigation.navigate('draw');
      SetLatitudeOri(latitudeDest);
      SetLongitudeOri(longitudeDest);
      
  
    };
    const handleBack = () => {
      getLocalizacao(null);
    }

    const handleMenu = () => {
      navigation.navigate('Menu');
    }
    const setresult = () => {
      navigation.navigate('Search');
    }

  const detalhes = () => {
    Globais.Id = 'Mateus';
    Globais.latitudeOrigem = origem.latitude;
    Globais.longitudeOrigem = origem.longitude;
    Globais.latitudeDestino = mapa[0];
    Globais.longitudeDestino = mapa[1];
  };
  
 //console.log(Geocoder.getCurrentPosition({latitud,longitud}));
  
 //<Icon name="menu-unfold" size={90} color="#000000" />
      return (
        
        <Container>
            
            <ContainerMap>
            <Menu onPress={handleMenu}>
              <Icon name="menu" size={30}/>
            </Menu>
           
            <MapView
                    style= {{flex: 1}}
                    provider={PROVIDER_GOOGLE}
                    region={origem}
                    showsUserLocation
                    loadingEnabled
                    rotateEnabled={false}
                    ref = {mapel}
                    
                    onPress={
                      (tels) => {
                          getLocalizacao([
                            tels.nativeEvent.coordinate.latitude, 
                            tels.nativeEvent.coordinate.longitude]
                            );
                        SetLatitudeDest(tels.nativeEvent.coordinate.latitude);
                        SetLongitudeDest(tels.nativeEvent.coordinate.longitude)
                      }}
                      
                    
                >
                  
                  { mapa && (
                    detalhes(),
                    <Fragment>
                        <MapViewDirections 
                        origin={origem}
                        destination={mapa}
                        apikey={"AIzaSyCuLAWs4SkGprZtwige8ClrHMOEX2Tejf8"}
                        strokeWidth={5}
                        strokeColor="#222"
                        onReady={result =>{
                          
                          mapel.current.fitToCoordinates(
                            result.coordinates,{
                              edgePadding:{
                                top: getPixelSize(50),
                                bottom: getPixelSize(50),
                                left: getPixelSize(50),
                                right: getPixelSize(50),
                              }
                            }
                          )}}
                        />
                        <Marker coordinate={{latitude: mapa[0],
              longitude: mapa[1]}}  image={markerImage} />
                        
                    </Fragment>
                  )}
                
                  
                </MapView>
                
                
              
                {mapa && (<Back onPress={handleBack}>
                    <Image source={BackImage} />
                  </Back>)}  
                </ContainerMap>
               
              {(mapa === null) && (<ContainerScrooler onPress={setresult}>  
               
                <ContainerSearch onPress={obetrLocal} >
                    <Textet>Pra Onde?</Textet>
                </ContainerSearch>
                
              <BootomEsc onPress={handleLocationSelected}><Text>AQUI</Text></BootomEsc>

            </ContainerScrooler>)}
            {mapa &&(
              
               
                 
                  <Detalhes />
                 
               
              
              
             
            
            )}
           
           
             
            
        </Container>
        
   );
}