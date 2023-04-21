import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #292929;
    align-items: center;
`;

export const ContainerUser = styled.SafeAreaView`
    margin: 16px;
    margin-top: 48px;
    height: 56px;
    width: 339px;
    border-radius: 12px;
    background-color: #FFFFFF;
    flex-direction: row;
`;

export const TextUser = styled.TextInput`
    font-family: Helvetica Neue;
    font-weight: normal;    
    font-size: 20px;
    text-align: left;
`;
export const Texto = styled.Text`
    margin: 36px;
    margin-top: 15px;
    font-family: Helvetica Neue;
    font-weight: normal;
    text-align: left;
    font-size: 20px;
`;

export const TextoVazio = styled.Text`
    margin-left: 110px;
    margin-top: 15px;
    font-family: Helvetica Neue;
    font-weight: normal;
    text-align: right;
    font-size: 14px;
    color: #EB2D2D;
`;

export const TextoBold = styled.Text`
    font-family: Helvetica Neue;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-right: 10px; 
    color: #030202;
`;

export const ContainerEnter = styled.TouchableOpacity`
    margin-top: 455px;
    margin: 16px;
    height: 56px;
    width: 339px;
    border-radius: 12px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background-color: #FFCE00;

`;

export const ContainerDetail = styled.SafeAreaView`
    margin-top: -110px;
    margin-left: -31px;
    height: 42px;
    width: 40px;
    border-radius: 10px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background-color: #FFCE00;

`;