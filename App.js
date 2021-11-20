// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Splash from './src/screens/Splash';
// import Introduction from './src/screens/Introduction'
// import Login from './src/screens/Login'
// import Dashboard from './src/screens/Dashboard'
// import Policies from './src/screens/Policies'
// import Invoices from './src/screens/Invoices'
// import Payments from './src/screens/Payments'
// import Profile from './src/screens/Profile'
// import Endorsements from './src/screens/Endorsements'
// import Notifications from './src/screens/Notifications';
// import PolicyDetails from './src/screens/PolicyDetails';
// import Vehicle from './src/screens/Vehicle';
// import SelectPolicies from './src/screens/SelectPolicies';
// import AddPayment from './src/screens/AddPayment'
// import RecentPayments from './src/screens/RecentPayments';
// import UploadDocuments from './src/screens/UploadDocuments';
// import Change from './src/screens/Change'
// import PayWithACH from './src/screens/PayWithACH';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown:false
//         }}
//       >
//         <Stack.Screen name="Splash" component={Splash} />
//         <Stack.Screen name="Introduction" component={Introduction} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Dashboard" component={Dashboard} />
//         <Stack.Screen name="Policies" component={Policies} />
//         <Stack.Screen name="Invoices" component={Invoices} />
//         <Stack.Screen name="Payments" component={Payments} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Endorsements" component={Endorsements} />
//         <Stack.Screen name="Notifications" component={Notifications} />
//         <Stack.Screen name="PolicyDetails" component={PolicyDetails} />
//         <Stack.Screen name="Vehicle" component={Vehicle} />
//         <Stack.Screen name="SelectPolicies" component={SelectPolicies} />
//         <Stack.Screen name="AddPayment" component={AddPayment} />
//         <Stack.Screen name="RecentPayments" component={RecentPayments} />
//         <Stack.Screen name="UploadDocuments" component={UploadDocuments} />
//         <Stack.Screen name="Change" component={Change} />
//         <Stack.Screen name="PayWithACH" component={PayWithACH} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App


import React from 'react'
import RootFlow from './src/navigation/Stack/RootFlow'
import { Provider } from 'react-redux';
import store from './src/redux/store';

class App extends React.Component{
  render(){
    return (
        <Provider store={store}>
            <RootFlow />
        </Provider>
    )
  }
}

export default App