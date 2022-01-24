import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../../screens//Dashboard'
import Policies from '../../screens//Policies'
import Invoices from '../../screens//Invoices'
import Payments from '../../screens//Payments'
import Profile from '../../screens//Profile'
import Endorsements from '../../screens//Endorsements'
import Notifications from '../../screens//Notifications';
import PolicyDetails from '../../screens//PolicyDetails';
import Vehicle from '../../screens//Vehicle';
import SelectPolicies from '../../screens//SelectPolicies';
import AddPayment from '../../screens//AddPayment'
import RecentPayments from '../../screens//RecentPayments';
import UploadDocuments from '../../screens//UploadDocuments';
import Change from '../../screens//Change'
import PayWithACH from '../../screens//PayWithACH';
import SelectPolicy from '../../screens/SelectPolicy';

const Stack = createNativeStackNavigator();

function HomeFlow() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Policies" component={Policies} />
        <Stack.Screen name="Invoices" component={Invoices} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Endorsements" component={Endorsements} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="PolicyDetails" component={PolicyDetails} />
        <Stack.Screen name="Vehicle" component={Vehicle} />
        <Stack.Screen name="SelectPolicies" component={SelectPolicies} />
        <Stack.Screen name="AddPayment" component={AddPayment} />
        <Stack.Screen name="RecentPayments" component={RecentPayments} />
        <Stack.Screen name="UploadDocuments" component={UploadDocuments} />
        <Stack.Screen name="Change" component={Change} />
        <Stack.Screen name="PayWithACH" component={PayWithACH} />
        <Stack.Screen name="SelectPolicy" component={SelectPolicy} />
      </Stack.Navigator>
  );
}

export default HomeFlow