import React from 'react';
import { Text } from 'react-native';
import { Container, LoadingIcon, CustomButton, CustomButtonText } from './styles';
import { useNavigation } from '@react-navigation/native';


export default () => {
    const navigation = useNavigation();

    const handleentrar = () => {
        navigation.navigate('Motorista');
            }
    const handleentrarP = () => {
        navigation.navigate('Uber');
            }

   return(
        <Container>
            
            <CustomButton onPress={handleentrar}>
                <CustomButtonText> Motorista </CustomButtonText>
            </CustomButton>
            <CustomButton onPress={handleentrarP}>
                <CustomButtonText> Passageiro </CustomButtonText>
            </CustomButton>
        </Container>
   );
}