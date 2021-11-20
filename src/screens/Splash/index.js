import React from 'react'
import {
    View,
    Image,
} from 'react-native'
import styles from './style'
import * as image from '../../utils/imagePath'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'
import { connect } from 'react-redux';
import { addUser } from '../../redux';
import Helper from '../../utils/Helper'
import { StackActions } from '@react-navigation/native';

class Splash extends React.Component{
    componentDidMount(){
        this.appFlow()
    }
    async appFlow(){
        let token = await Helper.getToken()
        let user = await Helper.getUser()
          if(token == null){
            console.log('null')
            this.props.addUser({
              token:'',
              name:'',
              email:'',
              id:'',
              isLogin:false
            })
          }
          else{
            console.log('token')
            this.props.addUser({
              token:token,
              name:user.name,
              email:user.email,
              id:user.id,
              isLogin:true
            })
          }
          this.props.navigation.dispatch(
            StackActions.replace('AppFlow')
        );
      }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <View style={styles.contentContainer}>
                    <Image style={styles.logo}source={image.ImagePath.logo}/>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
	return {
		addUser: (payload) => dispatch(addUser(payload))
	}
}

export default connect( null,mapDispatchToProps)(Splash);

