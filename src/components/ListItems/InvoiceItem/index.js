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
                        <Text style={styles.policyNo}>{`Invoice # ${this.props.item.Invoice_no}`}</Text>
                        <Text style={styles.policyNo}>{`Policy # ${this.props.item.policy_no}`}</Text>
                        <Text style={styles.policyNo}>{`Due Amount : ${this.props.item.due_amount}`}</Text>
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
        fontSize:16
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
        alignItems:'center',
        justifyContent:'center'
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