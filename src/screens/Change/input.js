import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'
import { Fonts } from '../../utils/Fonts'

class Input extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.props.placeholder}
                </Text>
                <TextInput 
                    keyboardType={this.props.keyboardType}
                    value={this.props.value}
                    onChangeText={(value) => {this.props.onChangeText(value)}}
                    style={styles.input}
                />
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
    },
    title:{
        fontFamily:Fonts.regular,
        color:"black"
    },
    input:{
        fontFamily:Fonts.regular,
        borderBottomWidth:1,
        borderColor:"gray",
        fontSize:16,
        padding:5,
    }
})