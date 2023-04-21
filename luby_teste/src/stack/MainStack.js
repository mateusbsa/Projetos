import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Authentication from '../screens/authentication';
import Profile from '../screens/profile';
import Repos from '../screens/repos';
import Followers from '../screens/followers';
import profileView from '../screens/profileView';
import following from '../screens/following';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
        headerShown: false
        }}>
        
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfileView" component={profileView} />
        <Stack.Screen name="Repos" component={Repos} />
        <Stack.Screen name="Followers" component={Followers} />
        <Stack.Screen name="Following" component={following} />
        
        
    </Stack.Navigator>
);