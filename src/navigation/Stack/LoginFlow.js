import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../screens/Login'

const Stack = createNativeStackNavigator();

function LoginFlow() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown:false
    }}
        headerMode={'none'}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  );
}

export default LoginFlow;