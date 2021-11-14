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

class PaymentOptionModal extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={styles.detailsText}>
                        {`Policy# ${this.props.selectedPolicy.policy_no}`}
                    </Text>
                    <Text style={styles.detailsText}>
                        {`Due Amount ${this.props.selectedPolicy.total_due}`}
                    </Text>
                    <View style={styles.bottomButtonContainer}>
                        <TouchableOpacity 
                        onPress={() => this.props.onPaymentOptionSelected('ach')}
                        style={styles.bottomButton}>
                            <Text style={styles.bottomText}>{'Pay with ACH'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.onPaymentOptionSelected('card')}
                        style={styles.bottomButton}>
                            <Text style={styles.bottomText}>{'Pay with Credit Card'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default PaymentOptionModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modalView:{
        width:"90%",
        backgroundColor:'#fff',
        borderRadius:10,
        ...commonStyles.shadow,
        padding:10,  
    },
    detailsText:{
        fontFamily:Fonts.regular,
        fontSize:16
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
        borderWidth:1,
        borderColor:Colors.primary1,
        alignItems:'center',
        justifyContent:'center'
    },
    bottomText:{
        fontFamily:Fonts.regular,
        fontSize:12,
        color:Colors.primary1
    }
})