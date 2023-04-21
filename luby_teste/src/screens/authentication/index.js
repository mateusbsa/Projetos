import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Image } from 'react-native';
import {Container, ContainerEnter, ContainerUser, Texto, TextoBold, TextoVazio, TextUser} from './styles'
import {useNavigation } from "@react-navigation/native";  

import client from '../../services/client';
import { context } from '../../context';


export default () => {

    const navigation = useNavigation();

    const[usuario, SetUsuario] = useState('');
    const[vazio, SetVazio] = useState(0);

    const ctx = useContext(context);


    async function getuser(Usuario){
        try {
            const response = await client.get(`/${Usuario}`);
            const repos = await client.get(`/${Usuario}/repos`);
            const follow = await client.get(`/${Usuario}/followers`);
            const followig = await client.get(`/${Usuario}/following`);

            ctx.setUserData(response.data);
            ctx.setUserRepos(repos.data);
            ctx.setUserFollowers(follow.data);
            ctx.setUserFollowing(followig.data);
            
        } catch(err){
            console.log(err);
        }
    };

    const inspecinput = (Usuario) => {

            if(usuario == ''){
                SetVazio(1);
                
            }
            else {
                SetVazio(0);
                getuser(usuario);
                navigation.navigate('Profile')
            }
        
    };
        
   
    
    return(
        
        <Container>
            <Image source={require('../../assets/logo.png')}
            style={{ width: 98.12, height: 98.12, marginTop: 234.92}} />
            <ContainerUser>
                <TextUser 
                placeholder="Usuário"
                placeholderTextColor = "#535353"
                value={usuario}
                onChangeText= {t => SetUsuario(t)}
                >  
                </TextUser>
                {(usuario == '' && vazio == 1) &&

                <TextoVazio>
                    Campo obrigatório
                </TextoVazio>
                }
            
            </ContainerUser>
    
            <ContainerEnter onPress={() => inspecinput(usuario)}>
                <TextoBold>
                    Entrar
                </TextoBold>
                <Icon name="arrowright" size={20} color="black" type="entypo"/>
            </ContainerEnter>
            
        </Container>
    )
};