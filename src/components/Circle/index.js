import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class Circle extends React.Component{
    render(){
        return <View style={styles.container}/>
    }
}

export default Circle

const styles = StyleSheet.create({
    container:{
        height:1000,
        width:1000,
        opacity:0.5,
        backgroundColor:'darkblue',
        borderRadius:500,
        position:'absolute',
        zIndex:-1,
        bottom:-650,
    }
})