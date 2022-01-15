import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'

class ChangeModal extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={[styles.detailsText,{
                        fontFamily:Fonts.bold,
                        fontSize:16
                    }]}>
                        {`Required Docs for Change of ${this.props.name}`}
                    </Text>
                    <Text style={[styles.detailsText,{
                        fontFamily:Fonts.regular,
                        marginTop:10
                    }]}>
                        {`*Any bill under your name Or
*Bank Statement Or 
*Rental Lease
If you don't have any proof of 
confidence, Please contact the
office.`}
                    </Text>
                    <View style={styles.bottomButtonContainer}>
                        {/* <TouchableOpacity 
                        onPress={() => this.props.modalVisible()}
                        style={styles.bottomButton}>
                            <Text style={styles.bottomText}>{'Download'}</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity 
                        onPress={() => this.props.onContinue()}
                        style={styles.bottomButton}>
                            <Text style={styles.bottomText}>{'Continue'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default ChangeModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modalView:{
        width:"90%",
        backgroundColor:Colors.primary2,
        borderRadius:10,
        ...commonStyles.shadow,
        padding:20,  
    },
    detailsText:{
        color:'white'
    },
    bottomButtonContainer:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'space-around'
    },
    bottomButton:{
        height:35,
        width:140,
        borderRadius:5,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    bottomText:{
        fontFamily:Fonts.bold,
        fontSize:12,
    }
})