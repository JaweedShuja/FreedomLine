import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Colors } from '../../utils/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import { Fonts } from '../../utils/Fonts'

class ProfileCard extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <FontAwesome5 
                        size={30}
                        color={Colors.primary2}
                        name={'user-alt'}
                    />
                </View>
                <Text style={styles.nameText}>{'Marie Kumar'}</Text>
                <View style={styles.addressContainer}>
                    <Entypo 
                        size={15}
                        color={Colors.primary2}
                        name={'location'}
                    />
                    <Text style={styles.address}>
                        7523 31 AVE,
                    </Text>
                </View>
            </View>
        )
    }
}

export default ProfileCard

const styles = StyleSheet.create({
    container:{
        padding:20,
        width:'90%',
        alignSelf:'center',
        borderWidth:1,
        borderColor:Colors.primary2,
        borderRadius:10
    },
    imageContainer:{
        height:80,
        width:80,
        borderRadius:50,
        borderWidth:1,
        borderColor:Colors.primary2,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    nameText:{
        fontFamily:Fonts.regular,
        fontSize:18,
        alignSelf:'center',
        marginTop:10
    },
    addressContainer:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:5
    },
    address:{
        fontFamily:Fonts.regular,
        marginLeft:10
    }
})