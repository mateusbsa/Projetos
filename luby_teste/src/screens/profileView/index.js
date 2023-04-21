import React, { useContext } from "react";
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation } from "@react-navigation/native";

import { Container, TextProfile, Containerfollowers, ContainerHome, ContainerNavigation, ContainerPrimari, ContainerProfile, TextNavigation, TextInfo, TextFollowers, TextFollowersNumbers, ContainerfollowersNumbers, Containerfollower, ContainerDetail, ContainerDetailI, TextBio, TextInfoBio, ContainerRoutes, ContainerRoutesI, TextLogin, ContainerImage, TextExit } from "./styles";
import { context } from "../../context";


export default() => {

    const navigation = useNavigation();

    
    const ctx = useContext(context);


    return(
        <Container>
            <ContainerPrimari>
                <TextLogin>
                    {"#"}
                    {ctx.userDataView.login}
                </TextLogin>

                <ContainerImage onPress={()=> navigation.navigate('Profile')}>
                    <TextExit>
                        Salvar
                    </TextExit>
                     <Icon name="log-in" size={23} color="#5CBC29" type="entypo"/>
                </ContainerImage>
                
            </ContainerPrimari>

            <ContainerProfile source={{uri:ctx.userDataView.avatar_url}}>
            </ContainerProfile>
            
            <TextProfile>
                {ctx.userDataView.name}
            </TextProfile>
            <TextInfo>
                {ctx.userDataView?.email}
                {"\n"}
                {ctx.userDataView?.location}
                {"\n"}
                {ctx.userDataView?.company}
            </TextInfo>
            
            <ContainerDetail/>

            <Containerfollowers>

                <Containerfollower>
                    <TextFollowersNumbers>
                        {ctx.userDataView?.followers}
                    </TextFollowersNumbers>
                    <TextFollowers>
                        Seguidores
                    </TextFollowers>
                </Containerfollower>

                <Containerfollower>
                    <TextFollowersNumbers>
                        {ctx.userDataView?.following}
                    </TextFollowersNumbers>
                    <TextFollowers>
                        Seguindo
                    </TextFollowers>
                </Containerfollower>

                <Containerfollower>
                    <TextFollowersNumbers>
                        {ctx.userDataView?.public_repos}
                    </TextFollowersNumbers>
                    <TextFollowers>
                        Repositórios
                    </TextFollowers>
                </Containerfollower>    
                
            </Containerfollowers>

            <ContainerDetailI/>
            <TextBio>
                Bio
            </TextBio>

            <TextInfoBio >
                {ctx.userDataView?.bio}
            </TextInfoBio>

            <ContainerNavigation>
                
                <ContainerRoutesI onPress={()=> navigation.navigate('Profile')}>
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
        </Container>
    )
};