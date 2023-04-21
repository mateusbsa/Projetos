import React from "react";
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #292929;
`;

export const ContainerPrimari= styled.SafeAreaView`
    height: 126px;
    width: 100%;
    background-color: #1F1F1F;

`;
export const ContainerImage= styled.TouchableOpacity`
    height: 26px;
    width: 26px;
    margin-top: -32px;
    margin-left: 340px;
    flex-direction: row;
`;

export const Containerfollowers= styled.SafeAreaView`
    margin-top: 90px;    
    height: 106px;
    width: 100%;
    background-color: #5252525D;
    align-items: center;
    flex-direction: row;
`;

export const ContainerNavigation= styled.SafeAreaView`
    margin-top: -48px;    
    height: 80px;
    width: 100%;
    background-color: #FFFFFF;
    flex-direction: row;
    border-radius: 15px;
`;

export const ContainerProfile= styled.Image`
    margin-top: -50px; 
    margin-left: 35%;   
    height: 115px;
    width: 115px;
    flex-direction: row;
    border-radius: 100px;
    border: 3px solid #FFFFFF;
`;

export const ContainerHome= styled.TouchableOpacity`
    margin-left: 10px;    
    height: 20px;
    width: 90px;
    flex-direction: row;
`;

export const TextNavigation = styled.Text`
    margin-left: 0px;
    margin-top: 2px;
    font-family: Helvetica Neue;
    font-weight: normal;    
    font-size: 15px;
    text-align: left;
`

export const TextInfoBio = styled.Text`
    height: 169px;
    width: 232px;
    margin-left: 25px;
    margin-top: 1px;
    font-family: Helvetica Neue;
    font-weight: normal;    
    font-size: 15px;
    text-align: left;
    color: #FFFFFF;
`

export const Texto = styled.Text`
    margin: 36px;
    margin-top: 15px;
    font-family: Helvetica Neue;
    font-weight: normal;
    text-align: left;
    font-size: 20px;
`;

export const TextProfile = styled.Text`
    margin-left: 24px;
    text-transform: uppercase;
    margin-top: 30px;
    font-family: Helvetica Neue;
    font-weight: bold;
    font-size: 26px;
    color: #FFFFFF;
`;

export const TextBio = styled.Text`
    margin-left: 24px;
    text-transform: uppercase;
    margin-top: -40px;
    font-family: Helvetica Neue;
    font-weight: bold;
    font-size: 26px;
    color: #FFFFFF;
`;

export const TextLogin = styled.Text`
    margin: 11px;
    margin-top: 13px;
    font-family: Helvetica Neue;
    font-weight: bold;
    font-size: 17px;
    color: #FFFFFF;
`;

export const TextInfo = styled.Text`
    margin-left: 24px;
    margin-top: 10px;
    font-family: Helvetica Neue;
    font-weight: normal;

    font-size: 18px;
    color: #FFFFFF;
    flex-direction: row;
`;

export const TextFollowers= styled.Text`
    margin-top: 10px;
    font-family: Helvetica Neue;
    font-weight: normal;
    font-size: 17px;
    color: #FFFFFF;
    align-items: center;
`;

export const TextExit= styled.Text`
    margin-top: 0px;
    margin-left: -35px;
    margin-right: 5px;
    font-family: Helvetica Neue;
    font-weight: normal;
    font-size: 17px;
    color: #FFFFFF;

`;

export const TextFollowersNumbers= styled.Text`
    align-items: center;
    font-family: Helvetica Neue;
    font-weight: normal;
    text-align: left;
    font-size: 40px;
    color: #FFFFFF;
`;

export const Containerfollower= styled.SafeAreaView`   
    height: 100px;
    width: 130px;
    align-items: center;
`;

export const TextoVazio = styled.Text`
    margin-left: 110px;
    margin-top: 15px;
    font-family: Helvetica Neue;
    font-weight: Light;
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

export const ContainerDetailI = styled.SafeAreaView`
    margin-top: 20px;
    margin-left: -31px;
    height: 42px;
    width: 40px;
    border-radius: 10px;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    background-color: #FFCE00;

`;
export const ContainerRoutesI = styled.TouchableOpacity`
    margin-top: 5px;
    margin-left: -5px;
    margin-right: -10px;
    height: 100px;
    width: 100px;
    align-items: center;
    
`;

export const ContainerRoutes = styled.TouchableOpacity`
    margin-top: 5px;
    margin-right: -15px;
    margin-left: -22px;
    height: 100px;
    width: 140px;
    align-items: center;

`;