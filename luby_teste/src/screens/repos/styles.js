import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #292929;
`;

export const ContainerMap = styled.SafeAreaView`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const ContainerPrimari= styled.SafeAreaView`
    height: 68px;
    width: 100%;
    align-items: center;
    flex-direction: row;
`;

export const TextInfo = styled.Text`
    align-items: center;
    margin-left: 90px;
    margin-top: 0px;
    font-family: Helvetica Neue;
    font-weight: bold;    
    font-size: 17px;
    color: #FFFFFF;
`;

export const ViewStar = styled.TouchableOpacity`

    margin-top: 0px;
    margin-left: 10px;
    margin-right: 10px;
    
`;

export const ViewBar = styled.SafeAreaView`

    height: 86%;
    width: 100%;
    flex-direction: row;
`;