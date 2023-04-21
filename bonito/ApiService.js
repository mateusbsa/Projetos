import React from 'react';
import { database } from './Setup';

export const SolicitaCorrida = (Id, LatitudeOrigem, 
    LongitudeOrigem, LatitudeDestino, LongitudeDestino) => {
    return new Promise(function(resolve, reject){
        let key;
        if (Id != null) {
            key = Id;
        } else {
            key = database()
            .ref()
            .push().key;
        }
        let dataToSave = {
            Id: key,
            Latitude_Origem: LatitudeOrigem,
            Longitude_Origem: LongitudeOrigem,
            Latitude_Destino: LatitudeDestino,
            Longitude_Destino: LongitudeDestino,
        };
        database()
        .ref('solicitacorrida/' + Id)
        .update(dataToSave)
        .then(snapshot => {
            resolve(snapshot);
        })
        .catch(err =>{
            reject(err);
        })
    });
};

export const AtivoMotorista = (Id, LatitudeOrigem, 
    LongitudeOrigem) => {
    return new Promise(function(resolve, reject){
        let key;
        if (Id != null) {
            key = Id;
        } else {
            key = database()
            .ref()
            .push().key;
        }
        let dataToSave = {
            Id: key,
            Latitude_Origem: LatitudeOrigem,
            Longitude_Origem: LongitudeOrigem
        };
        database()
        .ref('Ativos/' + Id)
        .update(dataToSave)
        .then(snapshot => {
            resolve(snapshot);
        })
        .catch(err =>{
            reject(err);
        })
    });
};


export const ListaCorrida = (Id) => {
    return new Promise(function(resolve, reject){
        let key;
        if (Id != null) {
            key = Id;
        } else {
            key = database()
            .ref()
            .push().key;
        }
        let dataToSave = {
            Id: key,
        };
        database()
        .ref('listacorrida/' + Id)
        .update(dataToSave)
        .then(snapshot => {
            resolve(snapshot);
        })
        .catch(err =>{
            reject(err);
        })
    });
};

export const Ativos = (quantidade, Id) => {

    return new Promise(function(resolve, reject){
        let key;
        if (Id != null) {
            key = Id;
        } else {
            key = database()
            .ref()
            .push().key;
        }
        let dataToSave = {
            Quantidade: quantidade
        };
        database()
        .ref('Ativos/')
        .update(dataToSave)
        .then(snapshot => {
            resolve(snapshot);
        })
        .catch(err =>{
            reject(err);
        })
    });
};