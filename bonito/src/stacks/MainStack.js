import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { create } from 'react-test-renderer';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Uber from '../screens/uber/Screens/HomeScreen';
import Destino from '../screens/Concluido';
import Motorista from '../screens/uber/Screens/ScrenMotorista';
import Ocupado from '../screens/uber/Screens/Ocupado';
import Corrida from '../screens/uber/Screens/Corrida';
import Menu from '../screens/uber/Abas/index';
import Aba from '../screens/uber/Screens/HomeScreen';
import Perfil from '../screens/uber/Abas/Screens/Perfil';
import SuasViagens from '../screens/uber/Abas/Screens/SuasViagens';
import Pagamento from '../screens/uber/Abas/Screens/Pagamento';
import Ofertas from '../screens/uber/Abas/Screens/Ofertas';
import ConheçaBonito from '../screens/uber/Abas/Screens/ConheçaBonito';
import Search from '../screens/uber/Screens/Search/index';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



export default () => (
    <Stack.Navigator
        screenOptions={{
        headerShown: false
        }}>
        
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Uber" component={Aba} />
        <Stack.Screen name="Destino" component={Destino} />
        <Stack.Screen name="Motorista" component={Motorista} />
        <Stack.Screen name="Ocupado" component={Ocupado} />
        <Stack.Screen name="Corrida" component={Corrida} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="SuasViagens" component={SuasViagens} />
        <Stack.Screen name="Pagamento" component={Pagamento} />
        <Stack.Screen name="ConheçaBonito" component={ConheçaBonito} />
        <Stack.Screen name="Search" component={Search} />
        
    </Stack.Navigator>
);