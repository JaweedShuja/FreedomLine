import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../../utils/Colors'
import { Fonts } from '../../../utils/Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

class TopBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                 <TouchableOpacity 
                onPress={() => this.props.onBackClick()}
                style={styles.button}>
                    <Ionicons 
                        color={'black'}
                        size={20}
                        name={'arrow-back'}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
                <TouchableOpacity 
                onPress={() => this.props.onHomeClick()}
                style={[styles.button,{ position:'absolute',right:0 }]}>
                    <Entypo 
                        color={'black'}
                        size={20}
                        name={'home'}
                    />
                </TouchableOpacity>
               
            </View>
        )
    }
}

export default TopBar

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'100%',
        backgroundColor:Colors.white,
        flexDirection:'row',
        alignItems:'center',
    },
    title:{
        fontFamily:Fonts.bold,
        color:Colors.primary1,
        fontSize:18,
        marginLeft:20,
    },
    button:{
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center'
    }
})