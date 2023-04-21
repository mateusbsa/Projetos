import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ContextProvider } from './src/context';

import MainStack from './src/stack/MainStack';

export default () => {
  return(
    <ContextProvider>
      <NavigationContainer>
        
          <MainStack/>
        
      </NavigationContainer>
    </ContextProvider>
  );
}