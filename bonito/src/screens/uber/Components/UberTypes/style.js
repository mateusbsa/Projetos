import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color: #0000;
flex: 1;
justify-content: center;
align-items: center;
height: 40%;
width: 100%;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const CustomButton = styled.TouchableOpacity`
    margin-top: 50px;
    height: 60px;
    width: 90%;
    background-color: #222222;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;
