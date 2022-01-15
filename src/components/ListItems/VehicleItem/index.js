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

class VehicleItem extends React.Component {
    render() {
        return(
            <TouchableOpacity 
            onPress={this.props.onPress}
            style={styles.container}>
                <Image 
                    style={styles.iamgeContainer}
                    source={image.ImagePath.car}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.nameText}>{this.props.item.vehName}</Text>
                    <Text style={styles.detailsText}>
                        <Text>{'VIN # '}</Text>
                        <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.vinNumber}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                        <Text>{'Active Driver : '}</Text>
                        <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.activeDrivers}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                        <Text>{'Plate # '}</Text>
                        <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.plateNumber}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                        <Text>{'Reg Expiry Date : '}</Text>
                        <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.expiryDate}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                        <Text>{'Model : '}</Text>
                        <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.model}</Text>
                    </Text>
                    <Text style={styles.detailsText}>
                        <Text>{'Company : '}</Text>
                        <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.companyName}</Text>
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default VehicleItem

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
    },
    detailsText:{
        fontFamily:Fonts.regular,
        fontSize:12
    },
    detailsContainer:{
        paddingLeft:15
    }
})