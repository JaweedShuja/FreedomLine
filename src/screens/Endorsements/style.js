import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { commonStyles } from "../../utils/commonStyles";
import {Fonts } from '../../utils/Fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    optionsRow:{
        flexDirection:'row',
        height:130,
        marginTop:10,
        marginHorizontal:10,
    },
    option:{
        flex:1,
        borderWidth:1,
        borderColor:Colors.primary2,
        margin:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    optionText:{
        fontFamily:Fonts.semiBold,
        fontSize:16,
        color:Colors.primary2,
        marginTop:10,
    }
    
    
})