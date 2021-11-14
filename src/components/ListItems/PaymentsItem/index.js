import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../../utils/Colors'
import { Fonts } from '../../../utils/Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

class PaymentsItem extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{padding:10}}>
                    <MaterialIcons 
                        size={40}
                        color={Colors.primary2}
                        name={'payments'}
                    />  
                </View>
                <View style={{ flex:1, }}>
                    <Text style={styles.policyNo}>{`${this.props.item.amount}`}</Text>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <View style={{flex:1,}}>
                            <Text style={styles.detailText}>{`Mode of Payment:  ${this.props.item.payment_mode}`}</Text>
                            <Text style={styles.detailText}>{`Name:  ${this.props.item.name}`}</Text>
                            <Text style={styles.detailText}>{`${this.props.item.payment_id}`}</Text>
                        </View>
                        <View>
                            <Text style={styles.date}>{this.props.item.date}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default PaymentsItem

const styles = StyleSheet.create({
    container:{
        width:'90%',
        borderWidth:1,
        borderColor:Colors.primary2,
        alignSelf:'center',
        borderRadius:10,
        padding:10,
        flexDirection:'row'
    },
    topContainer:{
        flexDirection:'row'
    },
    detailsContainer:{
        flex:1,
        paddingLeft:10,
    },
    policyNo:{
        fontFamily:Fonts.bold,
        fontSize:16,
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
    },
    detailText:{
        fontFamily:Fonts.regular,
    },
    date:{
        fontFamily:Fonts.regular,
        color:Colors.primary1,
        marginTop:20
    }
})