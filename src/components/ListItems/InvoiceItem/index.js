import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../../utils/Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Fonts } from '../../../utils/Fonts'

class InvoiceItem extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <FontAwesome5 
                        style={styles.icon}
                        size={30}
                        color={Colors.primary2}
                        name={'file-invoice'}
                    />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.policyNo}>
                            <Text>{'Invoice # '}</Text>
                            <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.receiptId}</Text>
                        </Text>
                        <Text style={styles.policyNo}>
                            <Text>{'Policy # '}</Text>
                            <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.policyNumber}</Text>
                        </Text>
                        <Text style={styles.policyNo}>
                            <Text>{'Due Amount : $'}</Text>
                            <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.invoiceAmount}</Text>
                        </Text>
                        <TouchableOpacity
                        onPress={() => this.props.onViewClick()}
                        style={[styles.status,{
                            borderRadius:10,
                            marginTop:10,
                        }]}>
                            <Text style={styles.statusText}>{'View'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.statusContainer}>
                            <Text style={[styles.statusText,{
                                color: this.props.item.invoice_status == 'Paid' ? Colors.green : Colors.red,
                                alignSelf:'flex-end'
                            }]}>{this.props.item.invoice_status}</Text>
                        <TouchableOpacity
                        onPress={() => this.props.onPayClick()}
                        style={styles.status}>
                            <Text style={styles.statusText}>{'Pay Now'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default InvoiceItem

const styles = StyleSheet.create({
    container:{
        width:'90%',
        borderWidth:1,
        borderColor:Colors.primary2,
        alignSelf:'center',
        borderRadius:10,
        padding:10,
        marginBottom:10,
    },
    topContainer:{
        flexDirection:'row'
    },
    detailsContainer:{
        flex:1,
        paddingLeft:10,
    },
    policyNo:{
        fontFamily:Fonts.regular,
        color:Colors.primary2,
    },
    transitType:{
        fontFamily:Fonts.regular,
        color:Colors.primary2,
    },
    policyType:{
        fontFamily:Fonts.regular,
        color:Colors.primary2,
    },
    statusContainer:{
        justifyContent:'space-between',
    },
    status:{
        height:25,
        width:80,
        borderRadius:30,
        borderWidth:1,
        borderColor:Colors.primary1,
        alignItems:'center',
        justifyContent:'center'
    },
    statusText:{
        fontFamily:Fonts.semiBold,
        fontSize:12,
        
    },
    dateContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:5,
    },
    date:{
        fontFamily:Fonts.regular,
        fontSize:12,
    },
    icon:{
        margin:10,
    }
})