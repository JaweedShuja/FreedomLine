import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Linking,
    ActivityIndicator,
    ScrollView
} from 'react-native'
import styles from './style'
import * as image from '../../utils/imagePath'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'
import Entypo from 'react-native-vector-icons/Entypo'
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
            isLoading:false,
            username:'',
            password:'',
            isSecure:true,
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
            this.setState({
                isLoading:true
            })
            const response = await request.PostRequest(
                payload.AuthenticatePayloads(
                    username,
                    password
                ),
                api.AuthenticateAPI()
            )
            this.setState({
                isLoading:false
            })
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
                        keyboardType='email-address'
                        value={this.state.username}
                        onChangeText={(username) => this.setState({username})}
                        style={[styles.input,{marginRight:50,}]}
                    />

                    <Text style={styles.inputTitle}>
                        Password
                    </Text>
                    <View style={{flexDirection:'row'}}>
                        <TextInput
                            secureTextEntry={this.state.isSecure}
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}
                            style={[styles.input,{flex:1}]}
                        />
                        <TouchableOpacity 
                        onPress={() => {
                            this.setState({
                                isSecure:!this.state.isSecure
                            })
                        }} 
                        style={{
                            height:50,
                            width:50,
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                            <Entypo 
                                size={20}
                                name={this.state.isSecure ? 'eye-with-line' : 'eye'}
                                color={'white'}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    disabled={this.state.isLoading}
                    onPress={() => {
                        this.onLogin()
                    }}
                    style={[styles.btn,{
                        marginTop:30,
                    }]}>
                        {
                            this.state.isLoading
                            ?
                            <ActivityIndicator 
                                color={Colors.primary1}
                                size={'small'}
                            />
                            :
                            <Text style={styles.btnText}>Login</Text>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => { this.props.navigation.navigate('SignUp') }}
                        style={[styles.btn,{
                            marginTop:16,
                        }]}>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </TouchableOpacity>

                        <View style={styles.bottomButton}>
                            <TouchableOpacity 
                            onPress={() => {
                                Linking.openURL('https://freedomlinebrokerage.com/quotes-2')
                            }}
                            style={styles.btn}>
                                <Text style={[styles.btnText,{
                                    color:Colors.primary1
                                }]}>Get a free quote</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            onPress={() => {
                                Linking.openURL('https://freedomlinebrokerage.com/contact-us')
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