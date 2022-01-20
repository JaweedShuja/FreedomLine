import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../../utils/Colors'
import { Fonts } from '../../../utils/Fonts'
import * as image from '../../../utils/imagePath'

class DriverItem extends React.Component {
    render() {
        return(
            <TouchableOpacity  onPress={this.props.onPress}
            style={styles.container}>
                <Image 
                    style={styles.iamgeContainer}
                    source={image.ImagePath.driver}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.nameText}>{this.props.item.driverName}</Text>
                    <Text style={styles.detailsText}>
                        <Text>{'License # '}</Text>
                        <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.licenceNumber}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                        <Text>{'License Expiry Date : '}</Text>
                        <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.licenceExpiryDate}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                        <Text>{'TLC # '}</Text>
                        <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.tlcNumber}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                        <Text>{'TLC Expiry Date : '}</Text>
                        <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.tlcExpiryDate}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                        <Text>{'DDC Expiry Date : '}</Text>
                        <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.ddcExpiryDate}</Text>
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default DriverItem

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:Colors.primary2,
        width:'90%',
        alignSelf:'center',
        marginTop:10,
        padding:10,
        borderRadius:10,
        flexDirection:'row'      
    },
    iamgeContainer:{
        height:70,
        width:70,
        borderRadius:35,
    },
    nameText:{
        fontFamily:Fonts.semiBold,
        color:'black'
    },
    detailsText:{
        fontFamily:Fonts.regular,
        fontSize:12,
        color:'black'
    },
    detailsContainer:{
        paddingLeft:15
    }
})