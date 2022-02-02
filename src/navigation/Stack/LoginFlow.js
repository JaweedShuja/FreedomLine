import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../screens/Login'
import Introduction from '../../screens/Introduction'
import SignUp from '../../screens/SignUp';

const Stack = createNativeStackNavigator();

function LoginFlow() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown:false
    }}
        headerMode={'none'}
        initialRouteName="Introduction"
      >
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
  );
}

export default LoginFlow;