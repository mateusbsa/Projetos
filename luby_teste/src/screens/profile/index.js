import React, { useContext } from "react";
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation } from "@react-navigation/native";

import { Container, TextProfile, Containerfollowers, ContainerPrimari, ContainerProfile, TextInfo, TextFollowers, TextFollowersNumbers, Containerfollower, ContainerDetail, ContainerDetailI, TextBio, TextInfoBio, TextLogin, ContainerImage, TextExit } from "./styles";
import { context } from "../../context";
import  Navigatebar  from "../../components/navigatebar";

export default() => {

    const navigation = useNavigation();

    
    const ctx = useContext(context);


    return(
        <Container>
            <ContainerPrimari>
                <TextLogin>
                    {"#"}
                    {ctx.userData.login}
                </TextLogin>

                <ContainerImage onPress={()=> navigation.navigate('Authentication')}>
                    <TextExit>
                        Sair
                    </TextExit>
                     <Icon name="log-out" size={23} color="red" type="entypo"/>
                </ContainerImage>
                
            </ContainerPrimari>

            <ContainerProfile source={{uri:ctx.userData.avatar_url}}>
            </ContainerProfile>
            
            <TextProfile>
                {ctx.userData.name}
            </TextProfile>
            <TextInfo>
                {ctx.userData?.email}
                {"\n"}
                {ctx.userData?.location}
                {"\n"}
                {ctx.userData?.company}
            </TextInfo>
            
            <ContainerDetail/>

            <Containerfollowers>

                <Containerfollower>
                    <TextFollowersNumbers>
                        {ctx.userData?.followers}
                    </TextFollowersNumbers>
                    <TextFollowers>
                        Seguidores
                    </TextFollowers>
                </Containerfollower>

                <Containerfollower>
                    <TextFollowersNumbers>
                        {ctx.userData?.following}
                    </TextFollowersNumbers>
                    <TextFollowers>
                        Seguindo
                    </TextFollowers>
                </Containerfollower>

                <Containerfollower>
                    <TextFollowersNumbers>
                        {ctx.userData?.public_repos}
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
                {ctx.userData?.bio}
            </TextInfoBio>

            <Navigatebar></Navigatebar>
        </Container>
    )
};