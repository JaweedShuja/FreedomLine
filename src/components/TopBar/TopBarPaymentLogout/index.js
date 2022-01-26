import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../../utils/Colors'
import { Fonts } from '../../../utils/Fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'

class TopBar extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
                {/* <TouchableOpacity 
                onPress={() => this.props.onCardClick()}
                style={[styles.button,{ right:50 }]}>
                    <AntDesign 
                        size={20}
                        name={'creditcard'}
                    />
                </TouchableOpacity> */}
                <TouchableOpacity 
                onPress={() => this.props.onLogoutClick()}
                style={[styles.button,{ right:0, }]}>
                    <AntDesign 
                        color={'black'}
                        size={20}
                        name={'logout'}
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
        position:'absolute',
        alignItems:'center',
        justifyContent:'center'
    }
})