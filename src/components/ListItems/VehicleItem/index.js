import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import { Colors } from '../../../utils/Colors'
import { Fonts } from '../../../utils/Fonts'
import * as image from '../../../utils/imagePath'

class VehicleItem extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Image 
                    style={styles.iamgeContainer}
                    source={image.ImagePath.car}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.nameText}>{this.props.item.name}</Text>
                    <Text style={styles.detailsText}>
                        {`VIN # ${this.props.item.vin_no}`}
                    </Text>
                    <Text style={styles.detailsText}>
                        {`Active Driver: ${this.props.item.active_driver}`}
                    </Text>
                    <Text style={styles.detailsText}>
                        {`Plate # ${this.props.item.plate_no}`}
                    </Text>
                    <Text style={styles.detailsText}>
                        {`Reg Expiry Date: ${this.props.item.reg_expiry_date}`}
                    </Text>
                </View>
            </View>
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