import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { Fonts } from '../../utils/Fonts'

class Input extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.placeholder}
                </Text>
                <Text style={[styles.title,{margin:5, fontFamily:Fonts.regular}]}>
                    {this.props.value ? this.props.value : 'N/A'}
                </Text>
            </View>
        )
    }
}

export default Input

const styles = StyleSheet.create({
    container:{
        width:'90%',
        alignSelf:'center',
        marginTop:10,
        borderBottomWidth:1,
        borderColor:"darkgray",  
    },
    title:{
        fontFamily:Fonts.semiBold
    },
})