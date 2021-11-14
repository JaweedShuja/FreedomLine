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

class PaymentPolicyModal extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={[styles.detailsText,{
                        fontFamily:Fonts.bold,
                        fontSize:16
                    }]}>
                        {`Payment Policy`}
                    </Text>
                    <Text style={[styles.detailsText,{
                        fontFamily:Fonts.regular,
                    }]}>
                        {`There will be $0.85 transaction fee The total amount will be $10.85`}
                    </Text>
                    <View style={styles.bottomButtonContainer}>
                        <TouchableOpacity 
                        onPress={() => this.props.onContinuePress()}
                        style={styles.bottomButton}>
                            <Text style={styles.bottomText}>{'Continue'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.modalVisible()}
                        style={styles.bottomButton}>
                            <Text style={styles.bottomText}>{'Cancel'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default PaymentPolicyModal

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
        padding:10,  
    },
    detailsText:{
        color:'white'
    },
    bottomButtonContainer:{
        flexDirection:'row',
        marginTop:10,
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