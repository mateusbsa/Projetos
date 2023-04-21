import React, { Component, Fragment } from 'react';

import { Container, Titulo, Descricao, Imagem, Button, ButtonText} from './style';
import Uberx from '../../../../assets/UberX.jpeg';

import { useNavigation } from '@react-navigation/native';

import database from '@react-native-firebase/database';
import { SolicitaCorrida, ListaCorrida } from '../../../../../ApiService';
import Globais from '../../Globais';

import { useState, state } from 'react';

export default () => {
    const navigation = useNavigation();
    const [resultado, setr] = useState(null);


    const handleentrar = () => {
        navigation.reset({
            routes:[{name: 'Destino'}]
        });
    };

    const corrida = () => {
        
        if(resultado == 0){
            navigation.navigate('Ocupado');
        }
        else{
            SolicitaCorrida(Globais.Id, Globais.latitudeOrigem, Globais.longitudeOrigem, Globais.latitudeDestino, Globais.longitudeDestino).then((result) => {
                ListaCorrida(Globais.Id)
                handleentrar()
            })
            .catch(error => {
            console.log(error);
            });
        }
      };

      const primeiro = () => {
       
        corrida()
      };
 database()
        .ref('/Ativos/Quantidade')
        .once('value')
        .then(snapshot => {
           setr(snapshot.val());
        });console.log(resultado);
   
    return(
        <Container>
            
                <Titulo >Bonito Leva </Titulo>
                <Descricao>Viagens Baratas para o dia a dia</Descricao>
                
                <Imagem source={Uberx} />
                <Descricao>R$ 10,00</Descricao>
            <Fragment>
                <Button onPress={primeiro}>
                    <ButtonText>CONFIRMAR BONITO LEVA</ButtonText>
                </Button>
            </Fragment>
        </Container>
    );
}