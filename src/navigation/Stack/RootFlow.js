import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../../screens/Splash'
import AppFlow from './AppFlow'

const Stack = createNativeStackNavigator();

function RootFlow() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown:false
        }}
        headerMode={'none'}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="AppFlow" component={AppFlow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootFlow;