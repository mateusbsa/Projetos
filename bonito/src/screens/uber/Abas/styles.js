import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: transparent;
    
`;

export const ContainerView = styled.SafeAreaView`
    
    height: 60px;
    width: 100%;
    
`;  
export const ContainerPerfil = styled.SafeAreaView`
    background-color: #222222;
    border-radius: 100px;
    height: 100px;
    width: 100px;
    margin-left: 70%;
    margin-top: 10%;
    
`;  
export const ContainerNome = styled.TouchableOpacity`

    height: 100px;
    margin-left: 20px;
    margin-top: -70px;
    justify-content: center;
`;  

export const Linha = styled.SafeAreaView`
    height: 1px;
    width: 100%;
    background-color: #222222;
    border-radius: 10px;
    margin-top: 20px;
`;



export const TextName = styled.Text`
    font-weight: bold;
    margin: 10px;
    font-size: 30px;
    height: 70px;
    width: 60%;
    color: #222222;
    justify-content: center;
    align-items: center;
`;

export const TextOptions = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color: #222222;
    margin-top: 17px;
    margin-left: 5%;
`;

export const ContainerScrooler = styled.SafeAreaView`

background-color: #222222;
 height: 35%;
`;

export const Scrooler = styled.ScrollView`
flex: 1;
justify-content: center;
background-color: #0000;

`;

export const BootomEsc = styled.TouchableOpacity`
    margin: 10px;
    height: 40px;
    width: 25%;
    margin-top: 10px;
    background-color: #FFFF;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    
`;

export const Back = styled.TouchableOpacity`
    position: absolute;
    background-color: #FFFF;
    top: 10px;
    left: 20px;
    
`;