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
import { Fonts } from '../../utils/Fonts'

class SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            
            FirstName:"",
            LastName:"",
            CellNumber:"",
            Email:"",
            UserName:"",
            UserPassword:"",

            isSecure:true,
            errorMessage:"",
        }
    }
    async onSignUp(){
        const {
            FirstName,
            LastName,
            CellNumber,
            Email,
            UserName,
            UserPassword,
        } = this.state
        // var error = false
        // var message = ''
        // if(FirstName == ''){
        //     error = true
        //     message = 'First Name is required'
        // }
        // else if(LastName == ''){
        //     error = true
        //     message = 'Last Name is required'
        // }
        // else if(CellNumber == ''){
        //     error = true
        //     message = 'Cell Number is required'
        // }
        // else if(Email == ''){
        //     error = true
        //     message = 'Email is required'
        // }
        // else if(UserName == ''){
        //     error = true
        //     message = 'User Name is required'
        // }
        // else if(UserPassword == ''){
        //     error = true
        //     message = 'Password is required'
        // }
        // if(error){
        //     Helper.showToast(message)
        // }
        // else{
            this.setState({
                isLoading:true,
                errorMessage:""
            })
            const response = await request.PostRequest(
                payload.RegisterNewUserPayloads(
                    FirstName,
                    LastName,
                    CellNumber,
                    Email,
                    UserName,
                    UserPassword,
                ),
                api.RegisterNewUserAPI()
            )
            this.setState({
                isLoading:false,
            })
            if(response.status){
                Helper.showToast('Your account has been created successfully. You can login now.')
                this.props.navigation.navigate('Login')
            }else{
                this.setState({
                    errorMessage:response.message
                })
            }       
        // }
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
                    <ScrollView>
                        <View style={styles.lognView}>
                            <Text style={styles.login}>Sign Up</Text>
                        </View>

                        <Text style={styles.inputTitle}>
                            First Name
                        </Text>
                        <TextInput
                            value={this.state.FirstName}
                            onChangeText={(value) => this.setState({FirstName:value})}
                            style={[styles.input,{marginRight:50,}]}
                        />
                        <Text style={styles.inputTitle}>
                            Last Name
                        </Text>
                        <TextInput
                            value={this.state.LastName}
                            onChangeText={(value) => this.setState({LastName:value})}
                            style={[styles.input,{marginRight:50,}]}
                        />
                        <Text style={styles.inputTitle}>
                            Phone Number
                        </Text>
                        <TextInput
                            value={this.state.CellNumber}
                            onChangeText={(value) => this.setState({CellNumber:value})}
                            style={[styles.input,{marginRight:50,}]}
                        />
                        <Text style={styles.inputTitle}>
                            Email
                        </Text>
                        <TextInput
                            keyboardType='email-address'
                            value={this.state.Email}
                            onChangeText={(value) => this.setState({Email:value})}
                            style={[styles.input,{marginRight:50,}]}
                        />
                        <Text style={styles.inputTitle}>
                            User Name
                        </Text>
                        <TextInput
                            value={this.state.UserName}
                            onChangeText={(value) => this.setState({UserName:value})}
                            style={[styles.input,{marginRight:50,}]}
                        />
                        <Text style={styles.inputTitle}>
                            Password
                        </Text>
                        <View style={{flexDirection:'row'}}>
                            <TextInput
                                secureTextEntry={this.state.isSecure}
                                value={this.state.UserPassword}
                                onChangeText={(value) => this.setState({UserPassword:value})}
                                style={[styles.input,{flex:1}]}
                            />
                            <TouchableOpacity 
                                onPress={() => {
                                    this.setState({ isSecure:!this.state.isSecure })
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
                        {
                            this.state.errorMessage != '' && <Text
                                style={{
                                    color:Colors.error,
                                    marginTop:20,
                                    alignSelf:'center',
                                    fontFamily:Fonts.regular
                                }}
                            >
                                {this.state.errorMessage}
                            </Text>
                        }
                        <TouchableOpacity 
                            onPress={() => { this.onSignUp() }}
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
                                <Text style={styles.btnText}>Submit</Text>
                            }
                        </TouchableOpacity>

                            {/* <View style={styles.bottomButton}>
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
                            </View> */}
                        </ScrollView>
            </ImageBackground>
        )
    }
}

const mapDispatchToProps = dispatch => {
	return {
		addUser: (payload) => dispatch(addUser(payload))
	}
}

export default connect( null,mapDispatchToProps)(SignUp );

//abbyawan978@gmail.com
//12345