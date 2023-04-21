import React from "react";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #9d8;
    align-items: center;
`;
export const ContainerSearch = styled.SafeAreaView`
    height: 75%;
    width: 100%;
    align-items: center;
    background-color: #000000;
`;

export const ContainerBotton = styled.TouchableOpacity`
    width: 320px;
    height: 55px;
    background-color: #FFFFFF;
    border-radius: 30px;
    margin-top: 23px;
    align-items: center;
    flex-direction: row;
`;

export const ContainerLogo = styled.SafeAreaView`
    width: 100%;
    height: 25%;
    align-items: center;
`;

export const ContainerLogin = styled.SafeAreaView`
    width: 100%;
    height: 70%;
    align-items: center;
`;

export const ContainerPoliticas = styled.SafeAreaView`
    width: 100%;
    height: 5%;
    flex-direction: row;
    justify-content: center;
`;

export const ContainerCad = styled.TouchableOpacity`
    width: 120px;
    height: 70px;
   
`;

export const TextBotton = styled.TextInput`
    font-size: 18px;
    margin-left: 30px;
    color: #000000;
`;

export const ContainerBottonEnter = styled.TouchableOpacity`
    width: 320px;
    height: 55px;
    background-color: #C9EEF2;
    border-radius: 30px;
    align-items: center;
    margin-top: 23px;
`;

export const TextLogin= styled.Text`
    font-size: 18px;
    margin-top: 15px;
    color: #000000;
`;

export const TextCadastre = styled.Text`
    font-size: 18px;
    margin-top: 15px;
    color: #000000;
`;

export const TextPoliticas = styled.Text`
    font-size: 14px;
    color: #000000;
`;

export const TextVersion = styled.Text`
    font-size: 14px;
    color: #000000;
    margin-left: 30%;
`;