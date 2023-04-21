import React, { Component, useContext } from "react";

import { Area, ContainerDetail, ContainerMap, ContainerProfile, Description, Linha, Star, TextStar, UserName, ViewStar } from "./styles";
import Icon from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Feather';
import { context } from "../../context";
import { useNavigation } from "@react-navigation/core";
import client from '../../services/client';


export default({data}) => {

    const navigation = useNavigation();

    const ctx = useContext(context);

    async function getuser(usuario){
        try {
            const response = await client.get(`/${usuario}`);

            ctx.setUserDataView(response.data);

            navigation.navigate('ProfileView');
        } catch(err){
            console.log(err);
        }
    };

    return(
        <ContainerMap>

            <UserName >{`#${data.login}`}</UserName>
            
            <ContainerDetail/>

            <ContainerProfile source={{uri: data.avatar_url}}>
            
            </ContainerProfile>
            <ViewStar  onPress={() => getuser(data.login)}>
                <Icon name="arrow-right" size={23} color="#FFFFFF" type="entypo"/>
            </ViewStar>
            <Linha></Linha>
        </ContainerMap>
        
                
          
    )
};