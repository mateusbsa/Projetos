import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation } from "@react-navigation/native";
import { ContainerNavigation, ContainerRoutes, ContainerRoutesI, TextNavigation } from "./styles";

export default()=>{
    const navigation = useNavigation();

    return(
        <ContainerNavigation>
                
                <ContainerRoutesI onPress={() => navigation.navigate('Profile')}>
                    <Icon name="home" size={23} color="black" type="entypo"/>
                    <TextNavigation>
                        Início
                    </TextNavigation>
                </ContainerRoutesI>

                <ContainerRoutes  onPress={() => navigation.navigate('Repos')}>
                    <Icon name="github" size={23} color="black" type="entypo"/>
                    <TextNavigation>
                        Repositórios
                    </TextNavigation>
                </ContainerRoutes>
                
                <ContainerRoutes onPress={() => navigation.navigate('Followers')}> 
                    <Icon name="users" size={23} color="black" type="entypo"/>   
                    <TextNavigation>
                        Seguidores
                    </TextNavigation>
                </ContainerRoutes>

                <ContainerRoutesI onPress={()=> navigation.navigate('Following')}> 
                    <Icon name="users" size={23} color="black" type="entypo"/>
                    <TextNavigation>
                        Seguindo
                    </TextNavigation>
                </ContainerRoutesI>
            </ContainerNavigation>
    )
};