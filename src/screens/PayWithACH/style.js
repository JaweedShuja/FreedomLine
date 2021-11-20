import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { commonStyles } from "../../utils/commonStyles";
import {Fonts } from '../../utils/Fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    topContainer:{
        height:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
        flexDirection:'row'
    },
    totalText:{
        fontFamily:Fonts.medium,
        fontSize:16,
    }
});