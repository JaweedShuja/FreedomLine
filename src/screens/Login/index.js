import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import styles from './style'
import * as image from '../../utils/imagePath'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'

class Login extends React.Component{
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
                    style={styles.input}
                />

                <Text style={styles.inputTitle}>
                    Password
                </Text>
                <TextInput
                    style={styles.input}
                />

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.navigate('Dashboard')
                }}
                style={styles.btn}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>

                    <View style={styles.bottomButton}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={[styles.btnText,{
                                color:Colors.primary1
                            }]}>Get a free qoute</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btn,{
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

export default Login