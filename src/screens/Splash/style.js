import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { commonStyles } from "../../utils/commonStyles";
import {Fonts } from '../../utils/Fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:20,
    },
    logo:{
        width:(2640/100)*10,
        height:(524/100)*10,
        alignSelf:'center',
        marginTop:-20
    },
    contentContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})