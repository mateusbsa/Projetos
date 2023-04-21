import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './home';
import COnfig from './config';
const Stack = createNativeStackNavigator();

export default function App(){
    return(
    <NavigationContainer>
      <Stack.Navigator
      
      screenOptions={{
        headerShown: false
    }}
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="config" component={COnfig} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

