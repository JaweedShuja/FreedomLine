import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Linking,
} from 'react-native'
import styles from './style'
import * as image from '../../utils/imagePath'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'

import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'

import Helper from '../../utils/Helper'
import { connect } from 'react-redux';
import { addUser } from '../../redux';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
        }
    }
    async onLogin(){
        const {
            username,
            password
        } = this.state
        var error = false
        var message = ''
        if(username == ''){
            error = true
            message = 'Username is required'
        }
        else if(password == ''){
            error = true
            message = 'Password is required'
        }
        if(error){
            Helper.showToast(message)
        }
        else{
            const response = await request.PostRequest(
                payload.AuthenticatePayloads(
                    username,
                    password
                ),
                api.AuthenticateAPI()
            )
            if(response.status){
                await Helper.saveToken(response.accessToken);
                this.props.addUser({
                    token:response.accessToken,
                    name:response.userName,
                    email:username,
                    id:response.userId,
                    isLogin:true
                })
                await Helper.setIsLogined('true');
                Helper.saveUser({
                    token:response.accessToken,
                    name:response.userName,
                    email:username,
                    id:response.userId,
                });
            }else{
                Helper.showToast(response.message)
            }       
        }
    }
    render(){
        return(
            <ImageBackground 
                height={'150%'}
                width={'150%'}
                source={image.ImagePath.background}
                style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleLight}
                    backgroundColor={Colors.primary2}
                />
                <View style={styles.lognView}>
                    <Text style={styles.login}>Sign In</Text>
                </View>

                <Text style={styles.inputTitle}>
                    Username
                </Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({username})}
                    style={styles.input}
                />

                <Text style={styles.inputTitle}>
                    Password
                </Text>
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({password})}
                    style={styles.input}
                />

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => {
                    // this.props.navigation.navigate('Dashboard')
                    this.onLogin()
                }}
                style={styles.btn}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>

                    <View style={styles.bottomButton}>
                        <TouchableOpacity 
                        onPress={() => {
                            Linking.openURL('https://freedomlinebrokerage.com/?page_id=182')
                        }}
                        style={styles.btn}>
                            <Text style={[styles.btnText,{
                                color:Colors.primary1
                            }]}>Get a free qoute</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={() => {
                            Linking.openURL('https://freedomlinebrokerage.com/home/bg-02-free-img/')
                        }}
                        style={[styles.btn,{
                            backgroundColor:"#DE791E"
                        }]}>
                            <Text style={[styles.btnText,{
                                color:Colors.white
                            }]}>Contact Us</Text>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        )
    }
}

const mapDispatchToProps = dispatch => {
	return {
		addUser: (payload) => dispatch(addUser(payload))
	}
}

export default connect( null,mapDispatchToProps)(Login );

//abbyawan978@gmail.com
//12345