import React,{ useEffect } from 'react';
import { Text } from 'react-native';
import { Container, LoadingIcon, CustomButton, CustomButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';


export default () => {
    const navigation = useNavigation();

    

    const handleentrar = () => {
        navigation.navigate( 'Home');
        
    }

   return(
        <Container>
            
            <LoadingIcon size='large' color='#FFFFFF' />
            <CustomButton onPress={handleentrar}>
                <CustomButtonText> Entrar</CustomButtonText>
            </CustomButton>
            
        </Container>
   );
}