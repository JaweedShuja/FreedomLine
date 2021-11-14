import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { commonStyles } from "../../utils/commonStyles";
import {Fonts } from '../../utils/Fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    bottomView:{
        height:70,
        backgroundColor:Colors.primary2,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        alignItems:'center'
    },
    total:{
        fontFamily:Fonts.bold,
        color:'white',
        fontSize:16
    },
    bottomButton:{
        backgroundColor:'white',
        height:35,
        borderRadius:30,
        width:100,
        borderWidth:2,
        borderColor:"red",
        alignItems:'center',
        justifyContent:'center'
    },
    bottomButtonText:{
        fontFamily:Fonts.bold,
    }
    
})