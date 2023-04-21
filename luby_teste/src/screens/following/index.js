import React, { useContext, useState } from "react";
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation } from "@react-navigation/native";
import { context } from "../../context";
import { Container, ContainerMap, ContainerPrimari, TextInfo, ViewBar, ViewStar } from "./styles";
import ReposItem from "../../components/reposFollowing";
import { ScrollView } from "react-native-gesture-handler";
import Navigatebar from "../../components/navigatebar";

export default () => {

    const ctx = useContext(context);
    const navigation = useNavigation();

   
    return(
        <Container>
            <ContainerPrimari>
                <ViewStar onPress={() => navigation.navigate('Profile')} >
                    <Icon name="arrow-left" size={23} color="#FFFFFF" type="entypo"/>
                </ViewStar>
                <TextInfo>
                {ctx.userData?.following}
                {" seguindo"}
                </TextInfo>
            </ContainerPrimari>
            
           <ViewBar>
               <ScrollView>
                <ContainerMap>
                    {ctx.userFollowing.map((item,k)=>(
                        <ReposItem key={k} data={item} />
                    ))}
                </ContainerMap>
                
           </ScrollView>
           </ViewBar>
           <Navigatebar></Navigatebar>
        </Container>

    )
};