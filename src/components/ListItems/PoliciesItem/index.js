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
    render(){
        return(
            <TouchableOpacity 
            onPress={()=>this.props.onPress()}
            style={styles.container}>
                <View style={styles.topContainer}>
                    <MaterialIcons 
                        style={styles.icon}
                        size={30}
                        color={Colors.primary2}
                        name={'policy'}
                    />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.policyNo}>{`Policy # ${this.props.item.policyNumber}`}</Text>
                        <Text style={styles.transitType}>{this.props.item.companyName}</Text>
                        <Text style={styles.policyType}>{`Policy Type : ${this.props.item.policyType}`}</Text>
                    </View>
                    <View style={styles.statusContainer}>
                        <View style={styles.status}>
                            <Text style={[styles.statusText,{
                                color:Colors.green
                            }]}>{this.props.item.policyStatusName}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.date}>{`Effective Date : ${this.props.item.effectiveDate}`}</Text>
                    <Text style={styles.date}>{`Expiry Date : ${this.props.item.expiryDate}`}</Text>
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
        // height:25,
        width:100,
        padding:5,
        borderRadius:30,
        borderWidth:1,
        borderColor:Colors.red,
        alignItems:'center',
        justifyContent:'center'
    },
    statusText:{
        fontFamily:Fonts.semiBold,
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
        margin:10,
    }
})