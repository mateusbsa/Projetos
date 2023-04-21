import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: transparent;
`;

export const Menu = styled.TouchableOpacity`
    height: 25px;
    width: 25px;
    background: transparent;
`;

export const ContainerMap = styled.SafeAreaView`
    
    height: 75%;
    width: 100%;
    color: palevioletred;
`;  
export const ContainerSearch = styled.TouchableOpacity`
    
    height: 45px;
    width: 90%;
    margin-left: 5%;
    margin-top: 10px;
    border-radius: 50px;
    background-color:  #000000;
`;  
export const ContainerMenu = styled.SafeAreaView`
    
    height: 15%;
    width: 100%;
    background-color: #00000000;
`;  

export const ContainerPropaganda = styled.SafeAreaView`
    height: 35%;
    width: 100%;
    background-color: #222222;
    flex-direction: row;
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
font-size: 15px;
height: 30px;
width: 60%;
color: #FFFF;
justify-content: center;
align-items: center;
`;
export const ContainerScrooler = styled.SafeAreaView`

background-color: #222222;
 height: 25%;
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