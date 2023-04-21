import React, { Component, Fragment} from 'react';
import { View, Text, PermissionsAndroid, ScrollView, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE , Marker } from 'react-native-maps';
import Search from '../../Components/Search';
import Local from '@react-native-community/geolocation';
import { useState, state , useEffect} from 'react';
import { Locat, Textet, Container, ContainerMap, 
  ContainerPropaganda, Scrooler, ContainerScrooler,
BootomEsc, Back, CustomBotton, CustomButtonText, ContainerMotorista } from './style';
import MapViewDirections from 'react-native-maps-directions';
import { useRef } from 'react';
import markerImage from '../../../../assets/marker.png';
import { getPixelSize } from '../../../../../utils';
import Geocoder from 'react-native-geocoding';
import { useNavigation } from '@react-navigation/native';
import BackImage from '../../../../assets/back.png';
import database from '@react-native-firebase/database';
import { Ativos } from '../../../../../ApiService';
import { AtivoMotorista, QuantidadeMotorista } from '../../../../../ApiService';


export default () => {

  const navigation = useNavigation();

  
  const [ latitudeMotoristaOrigem,SetLatitudeOri] = useState(-8.473345);
  const [ longitudeMotoristaOrigem,SetLongitudeOri] = useState(-35.729435);
  const [ latitudeDest,SetLatitudeDest] = useState(0);
  const [ longitudeDest,SetLongitudeDest] = useState(0);
  const [mapa, getLocalizacao] = useState(null);
  const [setref, getSetref] = useState(null);
  const [ativo, setAtivo] = useState(null);

  const [Idm, setIdm] = useState("Motorista 01");

  const [idPassageiro, setIdP] = useState(null);
  const [latitudePassageiroOrigem, setLatPO] = useState(null);
  const [longitudePassageiroOrigem, setLonPO] = useState(null);
  const [latitudePassageiroDestino, setLatPD] = useState(null);
  const [longitudePassageiroDestino, setLonPD] = useState(null);
 
  const [latitudeviagem, setviagemlat] = useState(0);
  const [longitudeviagem, setviagemlong] = useState(0);

  const mapel = useRef(null);
  const [corrida, setCor] = useState(0);
  const [Id, setId] = useState("Mateus");
 
  Geocoder.init('AIzaSyCuLAWs4SkGprZtwige8ClrHMOEX2Tejf8');


 
 

  const origem = {
    latitude: latitudeMotoristaOrigem,
    longitude: longitudeMotoristaOrigem,
    latitudeDelta: 0.000143,
    longitudeDelta: 0.000134
  }
  const origem_viagem = {
    latitude: latitudePassageiroOrigem,
    longitude: longitudePassageiroOrigem,
    latitudeDelta: 0.000143,
    longitudeDelta: 0.000134
  }
 
  

  const obetrLocal = async () => {
    
      Local.getCurrentPosition((pos)=>{
              SetLatitudeOri(pos.coords.latitude);
              setviagemlat(pos.coords.latitude);
              SetLongitudeOri(pos.coords.longitude);
              setviagemlong(pos.coords.longitude);
              
          },
          (Erro)=>{
              alert('Erro: '+ Erro.message);
          },
          {
              enableHighAccuracy:true, timeout: 120000, maximumAge: 1000
          }
      );
      
  };

obetrLocal();

  const handleLocationSelected = (data, { geometry }) => {
    getLocalizacao([geometry.location.lat,
          geometry.location.lng])
    };

    if (mapa != null){
      const resultadoCidade = Geocoder.from({
        latitude:mapa[0],
        longitude: mapa[1]});  
    }

  const selctinput = () => {
    
      SetLatitudeOri(latitudeDest);
      SetLongitudeOri(longitudeDest);
      
  
    };


  const handleBack = () => {
    getLocalizacao(null);
  };
  const [users, setUsers] = useState([]);


React.useEffect(() => {
  const userRef = database().ref('/solicitacorrida');
  const OnLoadingListener = userRef.on('value', (snapshot) => {
    setUsers([]);
    snapshot.forEach(function (childSnapshot) {
      setUsers((users) => [...users, childSnapshot.val()]);
    });
    
  });
  

    users.map((item, index) => (
      setLatPO(item.Latitude_Origem),
      setLonPO(item.Longitude_Origem),
      setLatPD(item.Latitude_Destino),
      setLonPD(item.Longitude_Destino),
      setIdP(item.Id),
      
      userRef.off('value', OnLoadingListener)
      //navigation.navigate('Corrida')
    ))

  const childRemovedListener = userRef.on('child_removed', (snapshot) => {
    // Set Your Functioanlity Whatever you want.

    alert('Child Removed');
  });

  const manda = () => {
    console.log(origem_viagem.latitude);
    console.log(latitudePassageiroOrigem);
    getLocalizacao([latitudePassageiroDestino,
    longitudePassageiroDestino]);
    
  };

  const childChangedListener = userRef.on('child_changed', (snapshot) => {
    const userRef = database().ref('/solicitacorrida');
    const OnLoadingListener = userRef.on('value', (snapshot) => {
    setUsers([]);
    snapshot.forEach(function (childSnapshot) {
      setUsers((users) => [...users, childSnapshot.val()]);
    });
    setCor(1);
    setIdP(null)
    
  });
  setviagemlat(latitudePassageiroOrigem);
setviagemlong(longitudePassageiroOrigem);
    manda();
    //alert('Child Updated/Changed');
  });
  
  return () => {
    userRef.off('value', OnLoadingListener);
    userRef.off('child_removed', childRemovedListener);
    userRef.off('child_changed', childChangedListener);
  };
});

const destinoPassageiro = (Latitude, Longitude) => {
  getLocalizacao([Latitude, 
    Longitude]);
};


const aceitouPassageiro = () => {
  setCor(0);
   database()
   .ref('/Ativos/'+Idm)
   .remove();
   setIdP(null);
   setCor(0);
   setviagemlat(latitudeMotoristaOrigem);
   setviagemlong(longitudeMotoristaOrigem);
   destinoPassageiro(latitudePassageiroOrigem, longitudePassageiroOrigem);
   
};

const cancelouPassageiro = () => {
  setCor(0);
    getLocalizacao(null);
};
  
const iniciaTrabalho = () => {
  database()
  .ref('/Ativos/Quantidade')
  .once('value')
  .then(snapshot => {
     AtivoMotorista(Idm, origem.latitude, origem.longitude );
     Ativos(snapshot.val()+1, Id);
  });

  
  setAtivo(1);
  
  
};

const finalizaTrabalho = () => {
  
  database()
  .ref('/Ativos/Quantidade')
  .once('value')
  .then(snapshot => {
     Ativos(snapshot.val()-1, Id);
  });
 
  database()
   .ref('/Ativos/'+Idm)
   .remove();
  setAtivo(null);
  
};

      return (
        
        <Container>
          
            <ContainerMap>
            {(ativo === null) && (
            <ContainerMotorista onPress={iniciaTrabalho}>
                <Textet>Começar Expediente</Textet>
            </ContainerMotorista>
              )}
              {(ativo === 1) &&(
                <ContainerMotorista onPress={finalizaTrabalho}>
                    <Textet>Terminar Expediente</Textet>
                </ContainerMotorista>
              )}

              {(corrida === 1) && (
                <ContainerPropaganda >
                  <Textet >
                    {idPassageiro}
                  </Textet>
                  <CustomBotton onPress={aceitouPassageiro}>
                    <Textet > CONFIRMAR </Textet>
                  </CustomBotton>

                  <CustomBotton onPress={cancelouPassageiro}>
                    <Textet > CANCELAR </Textet>
                  </CustomBotton>
              
                </ContainerPropaganda>
                )}



            {(origem.latitude != null && origem.longitude !=null)&&(
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
                  
                  {(setref === 1) && (mapa)}
                  { mapa && (
                    
                    <Fragment>
                        <MapViewDirections 
                        origin={{
                          latitude: latitudeviagem,
                          longitude: longitudeviagem,
                          latitudeDelta: 0.000143,
                          longitudeDelta: 0.000134
                          }}
                        destination={mapa}
                        apikey={"AIzaSyCuLAWs4SkGprZtwige8ClrHMOEX2Tejf8"}
                        strokeWidth={5}
                        strokeColor="#222"
                        onReady={result =>{
                          console.log(result);
                         
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
                )}
                {mapa && (<Back onPress={handleBack}>
                    <Image source={BackImage} />
                  </Back>)}  
                </ContainerMap>
           
            
        </Container>
        
   );
}