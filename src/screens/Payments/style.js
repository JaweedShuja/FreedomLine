import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { commonStyles } from "../../utils/commonStyles";
import {Fonts } from '../../utils/Fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    content:{
        flex:1,
        alignItems:'center',
        
    },
    payNowContainer:{
        height:130,
        width:130,
        backgroundColor:Colors.primary2,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:70
    },
    recentContainer:{
        height:130,
        width:130,
        borderWidth:1,
        borderColor:Colors.primary2,
        borderRadius:10,
        alignItems:'center',   
        justifyContent:'center',
        marginTop:30
    },
    payNowText:{
        fontFamily:Fonts.bold,
        color:'white',
        fontSize:16
    },
    recentPayment:{
        fontFamily:Fonts.bold,
        color:Colors.primary2,
        fontSize:13,
        marginTop:10
    }
    
})