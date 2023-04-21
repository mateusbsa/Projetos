import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`;

export const ContainerMap = styled.SafeAreaView`
    
    flex: 1;
    width: 100%;
    background-color: #222222;
`;  

export const ContainerPropaganda = styled.SafeAreaView`
    height: 25%;
    width: 100%;
    background-color: #222222;
    
    align-items: center;
    justify-content: center;
`;

export const Locat = styled.TouchableOpacity`
    height: 10%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #0000FF;
`;

export const Textet = styled.Text`
margin-top: 30px;
margin: 10px;
font-size: 25px;
height: 30px;
width: 60%;
color: #FFFF;
justify-content: center;
align-items: center;
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

export const CustomBotton = styled.TouchableOpacity`
    margin-top: 10px;
    height: 40px;
    width: 40%;
    background-color: #121212;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;

export const ContainerMotorista = styled.TouchableOpacity`
    height: 55px;
    width: 80%;
    background-color: #222222;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;