import React from "react";
import styled from 'styled-components/native';


export const ContainerMap = styled.SafeAreaView`
    width: 150px;
    height: 100%;
    margin-Top: 0px;
    background-color: #292929;
    height: 150px;
    width: 100%;
    
    
`;
export const Linha = styled.SafeAreaView`
    margin-top: 70px;
    background-color: #FFFFFF;
    height: 0.4px;
    width: 100%;
    
`;

export const UserName = styled.Text`
    font-family: Helvetica Neue;
    font-weight: bold;
    margin-left: 120px;
    font-size: 20px;
    margin-top: 0px;
    color: #FFFFFF;
    
`;

export const Description = styled.Text`
    width: 370px;
    margin-left: 20px;
    font-family: Helvetica Neue;
    font-weight: normal;
    height: 80px;
    color: #FFFFFF;
    font-size: 15px;
    margin-top: 10px;
    
`;

export const TextStar = styled.Text`
    width: 30px;
    margin-left: 10px;
    font-family: Helvetica Neue;
    font-weight: normal;
    height: 80px;
    color: #FFFFFF;
    font-size: 15px;
    margin-top: 0px;
    
`;

export const Star = styled.SafeAreaView`
    width: 30px;
    height: 30px;
    margin-top: -10px;
    margin-left: 30px;
    flex-direction: row;
`;

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 80px;
    border-radius: 5px;
    
`;

export const ContainerDetail = styled.SafeAreaView`
    margin-top: -180px;
    margin-left: -31px;
    height: 42px;
    width: 40px;
    border-radius: 10px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background-color: #FFCE00;

`;

export const ContainerProfile= styled.Image`
    margin-top: 100px; 
    margin-left: 30px;   
    height: 64px;
    width: 64px;
    flex-direction: row;
    border-radius: 100px;
    border: 3px solid #FFFFFF;
`;

export const ViewStar = styled.TouchableOpacity`

    margin-top: -50px;
    margin-left: 350px;

    flex-direction: row;
`;
