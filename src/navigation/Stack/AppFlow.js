import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginFlow from './LoginFlow'
import HomeFlow from './HomeFlow'
import { connect } from 'react-redux';

const Stack = createNativeStackNavigator();

class PatientAppFlow extends React.Component{
  render(){
    return (
      <Stack.Navigator
      screenOptions={{
        headerShown:false
    }}
        headerMode={'none'}
      >
        {
          this.props.user.isLogin ? 
          (
            <>
              <Stack.Screen name="HomeFlow" component={HomeFlow} />
            </>
          )
          :
          (
            <>
              <Stack.Screen name="LoginFlow" component={LoginFlow} />
            </>
          )
        }
        
      </Stack.Navigator>
  );
  }
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect( mapStateToProps,null)(PatientAppFlow);
