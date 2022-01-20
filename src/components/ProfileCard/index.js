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
                        size={25}
                        color={Colors.primary2}
                        name={'user-alt'}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.nameText}>
                        {this.props.name}</Text>
                    {
                        this.props.noPhone ? null : <View style={styles.addressContainer}>
                        <Entypo 
                            size={15}
                            color={Colors.primary2}
                            name={'phone'}
                        />
                        <Text style={styles.address}>
                            {this.props.phoneNumber}
                        </Text>
                    </View> 
                    }
                </View>
            </View>
        )
    }
}

export default ProfileCard

const styles = StyleSheet.create({
    container:{
        padding:15,
        width:'90%',
        alignSelf:'center',
        borderWidth:1,
        borderColor:Colors.primary2,
        borderRadius:10,
        flexDirection:'row'
    },
    imageContainer:{
        height:60,
        width:60,
        borderRadius:50,
        borderWidth:1,
        borderColor:Colors.primary2,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    nameText:{
        fontFamily:Fonts.bold,
        fontSize:16,
        marginTop:10
    },
    addressContainer:{
        flexDirection:'row',
        marginTop:5,
    },
    address:{
        fontFamily:Fonts.semiBold,
        marginLeft:5,
    },
    contentContainer:{
        marginLeft:20,
    }
})