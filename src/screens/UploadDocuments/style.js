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
        width:'90%',
        borderRadius:10,
        backgroundColor:'white',
        ...commonStyles.shadow,
        alignSelf:'center',
        padding:10,
    },
    title:{
        fontFamily:Fonts.semiBold,
        fontSize:16,
        color:Colors.primary2,
    },
    typeContainer:{
        width:'80%',
        borderRadius:5,
        ...commonStyles.shadow,
        backgroundColor:'white',
        marginTop:10,
    },
    type:{
        height:35,
        borderBottomWidth:1,
        borderColor:'lightgray',
        paddingLeft:20,
        justifyContent:'center',
    },
    typeText:{
        fontFamily:Fonts.regular,
        color:Colors.primary2,
    },
    bottomButtonContainer:{
        flexDirection:'row',
        marginTop:10
    },
    button:{
        height:35,
        width:140,
        borderRadius:5,
        borderWidth:1,
        borderColor:Colors.primary2,
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        fontFamily:Fonts.semiBold,
    }
    
})