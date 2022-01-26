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

class NotificationItem extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{padding:10}}>
                    <Ionicons 
                        size={30}
                        color={Colors.primary2}
                        name={'notifications'}
                    />  
                </View>
                <View style={{ flex:1, }}>
                    <Text style={styles.policyNo}>{`${this.props.item.notification_message}`}</Text>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        
                        <View>
                            <Text style={styles.date}>{this.props.item.notification_date}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default NotificationItem

const styles = StyleSheet.create({
    container:{
        width:'90%',
        borderWidth:1,
        borderColor:Colors.primary2,
        alignSelf:'center',
        borderRadius:10,
        padding:10,
        flexDirection:'row',
        marginBottom:10
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