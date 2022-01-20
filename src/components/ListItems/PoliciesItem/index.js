import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../../utils/Colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Fonts } from '../../../utils/Fonts'

class PolicyItem extends React.Component{
    getColor(type){
        switch(type){
            case 'PENDING CANCELLATION':
                return 'blue'
            case 'CANCELLED':
                return 'red'
            case 'ACTIVE':
                return 'green'
            default :    
                return 'black'
        }
    }
    render(){
        return(
            <TouchableOpacity style={styles.container}
                onPress={()=>this.props.onPress()}>
                <View style={styles.topContainer}>
                    <MaterialIcons 
                        style={styles.icon}
                        size={30}
                        color={Colors.primary2}
                        name={'policy'}
                    />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.policyNo}>
                            <Text>{'Policy # '}</Text>
                            <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.policyNumber}</Text>
                        </Text>
                        <Text style={styles.transitType}>{this.props.item.companyName}</Text>
                        <Text style={styles.policyType}>
                            <Text>{'Policy Type : '}</Text>
                            <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.policyType}</Text>
                        </Text>
                    </View>
                    <View style={styles.statusContainer}>
                        
                        <View style={[styles.status,{borderColor:this.getColor(this.props.item.policyStatusName)}]}>
                            <Text style={[styles.statusText,{
                                color:this.getColor(this.props.item.policyStatusName)
                            }]}>{this.props.item.policyStatusName}</Text>
                        </View>
                        {
                            this.props.item.policyStatusName === 'PENDING CANCELLATION' || this.props.item.policyStatusName === 'CANCELLED' 
                            ? <Text style={styles.cancelText}>
                                <Text>{'Cancel Date : '}</Text>
                                <Text style={{fontFamily:Fonts.semiBold}}>{this.props.item.cancellationDate}</Text>
                            </Text>
                            : null
                        }
                    </View>
                </View>
                <View style={styles.dateContainer}>
                    <View>
                        <Text style={styles.date}>{'Effective Date'}</Text>
                        <Text style={[styles.date,{fontFamily:Fonts.semiBold}]}>{this.props.item.effectiveDate}</Text>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                        <Text style={styles.date}>{'Expiry Date'}</Text>
                        <Text style={[styles.date,{fontFamily:Fonts.semiBold}]}>{this.props.item.expiryDate}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default PolicyItem

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
        fontSize:12
    },
    transitType:{
        fontFamily:Fonts.semiBold,
        color:Colors.primary2,
        fontSize:12,
        marginTop:5,
    },
    policyType:{
        fontFamily:Fonts.regular,
        color:Colors.primary2,
        marginTop:5,
        fontSize:12,
    },
    statusContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    status:{
        padding:5,
        borderRadius:30,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    statusText:{
        fontFamily:Fonts.bold,
        fontSize:10,
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
        margin:5,
    },
    cancelText:{
        fontSize:12,
        fontFamily:Fonts.regular,
        marginTop:5,
    }
})