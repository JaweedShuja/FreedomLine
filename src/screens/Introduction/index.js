import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    Linking
} from 'react-native'
import styles from './style'
import * as image from '../../utils/imagePath'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'

class Introduction extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <Image style={styles.logo}source={image.ImagePath.logo}/>

                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Login')}
                style={[styles.btn,{marginTop:30,}]}>
                    <Text style={styles.btnText}>Existing Client</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {
                        Linking.openURL('https://freedomlinebrokerage.com/quotes-2')
                    }}
                    style={styles.btn}>
                    <Text style={styles.btnText}>Get a Free Quote</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => {
                        Linking.openURL('https://freedomlinebrokerage.com/contact-us')
                    }}
                    style={styles.btn}>
                    <Text style={styles.btnText}>Contact Us</Text>
                </TouchableOpacity>
                <View style={{
                    flex:1,
                    margin:20,
                    flexDirection:'row'
                }}>
                    <View style={{ flex:1, }}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://freedomlinebrokerage.com/tlc')} style={{
                            flex:1.7,
                            borderWidth:2,
                            margin:10,
                            borderColor:Colors.primary2,
                            borderRadius:10,
                        }}>
                            <View style={{flex:1,}}>
                                <Image style={{
                                    height:'100%',
                                    width:'100%',
                                    borderTopRightRadius:8,
                                    borderTopLeftRadius:8,
                                }}
                                
                                    source={image.ImagePath.auto}
                                />
                            </View>
                            <View style={{
                                height:40,
                                backgroundColor:Colors.primary2,
                                borderBottomLeftRadius:5,
                                borderBottomRightRadius:5,
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                    fontFamily:Fonts.bold,
                                    color:Colors.primary1,
                                }}>
                                    {'TLC'}  
                                </Text>

                            </View>

                        </TouchableOpacity>
                        <View style={{
                            height:3,
                            width:'60%',
                            borderRadius:10,
                            backgroundColor:Colors.primary1,
                            alignSelf:'center'
                        }}/>
                        <TouchableOpacity onPress={() => Linking.openURL('https://freedomlinebrokerage.com/auto')} style={{
                            flex:1.3,
                            borderWidth:2,
                            margin:10,
                            borderColor:Colors.primary2,
                            borderRadius:10,
                        }}>
                            <View style={{flex:1,}}>
                            <Image style={{
                                    height:'100%',
                                    width:'100%',
                                    borderTopRightRadius:8,
                                    borderTopLeftRadius:8,
                                }}
                                
                                    source={image.ImagePath.tlc}
                                />
                                </View>
                                <View style={{
                                    height:40,
                                    backgroundColor:Colors.primary2,
                                    borderBottomLeftRadius:5,
                                    borderBottomRightRadius:5,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    <Text style={{
                                        fontFamily:Fonts.bold,
                                        color:Colors.primary1,
                                    }}>
                                        {'AUTO'}  
                                    </Text>
    
                                </View>
                            

                        </TouchableOpacity>

                    </View>
                    <View style={{
                        height:'80%',
                        width:3,
                        borderRadius:10,
                        backgroundColor:Colors.primary1,
                        alignSelf:'center'
                    }}/>
                    <View style={{ flex:1, }}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://freedomlinebrokerage.com/business')} style={{
                            flex:1.3,
                            borderWidth:2,
                            margin:10,
                            borderColor:Colors.primary2,
                            borderRadius:10,
                        }}>
                            <View style={{flex:1,}}>
                            <Image style={{
                                    height:'100%',
                                    width:'100%',
                                    borderTopRightRadius:8,
                                    borderTopLeftRadius:8,
                                }}
                                
                                    source={image.ImagePath.business}
                                />
                                </View>
                                <View style={{
                                    height:40,
                                    backgroundColor:Colors.primary2,
                                    borderBottomLeftRadius:5,
                                    borderBottomRightRadius:5,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    <Text style={{
                                        fontFamily:Fonts.bold,
                                        color:Colors.primary1,
                                    }}>
                                        {'BUSINESS'}  
                                    </Text>
    
                                </View>

                        </TouchableOpacity>
                        <View style={{
                            height:3,
                            width:'60%',
                            borderRadius:10,
                            backgroundColor:Colors.primary1,
                            alignSelf:'center'
                        }}/>
                        <TouchableOpacity onPress={() => Linking.openURL('https://freedomlinebrokerage.com/home')} style={{
                            flex:1.7,
                            borderWidth:2,
                            margin:10,
                            borderColor:Colors.primary2,
                            borderRadius:10,
                        }}>
                            <View style={{flex:1,}}>
                            <Image style={{
                                    height:'100%',
                                    width:'100%',
                                    borderTopRightRadius:8,
                                    borderTopLeftRadius:8,
                                }}
                                
                                    source={image.ImagePath.home}
                                />
                                </View>
                                <View style={{
                                    height:40,
                                    backgroundColor:Colors.primary2,
                                    borderBottomLeftRadius:5,
                                    borderBottomRightRadius:5,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    <Text style={{
                                        fontFamily:Fonts.bold,
                                        color:Colors.primary1,
                                    }}>
                                        {'HOME'}  
                                    </Text>
    
                                </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Introduction