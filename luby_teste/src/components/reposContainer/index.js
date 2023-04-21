import React, { Component } from "react";

import { Area, ContainerDetail, ContainerMap, Description, Linha, Star, TextStar, UserName, ViewStar } from "./styles";
import Icon from 'react-native-vector-icons/AntDesign';
import IconI from 'react-native-vector-icons/Feather';

export default({data}) => {
    
    return(
        <ContainerMap>

            <UserName >{data.name}</UserName>
            <Description>
                {data.description}
                
            </Description>
            <Star>
                <Icon name="staro" size={20} color="#FFCE00" type="entypo"/>
                <TextStar>
                    {data.stargazers_count}
                </TextStar>
                
            </Star>
            <ViewStar>
                <IconI name="unlock" size={20} color="#63BF1F" type="entypo"/>
                <IconI name="lock" size={20} color="#CC042A" type="entypo"/>
            </ViewStar>
            <ContainerDetail/>
            
            <Linha></Linha>
        </ContainerMap>
        
                
          
    )
};