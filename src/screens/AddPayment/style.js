import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { commonStyles } from "../../utils/commonStyles";
import {Fonts } from '../../utils/Fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    label: {
        color: "black",
        fontSize: 12,
      },
      input: {
        fontSize: 16,
        color: "black",
      },
      buttonContainer:{
        flexDirection:'row',
        marginTop:50,
        justifyContent:'space-around'
        },
        enterButton:{
            height:45,
            width:150,
            borderRadius:30,
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center',
            ...commonStyles.shadow,
            backgroundColor:Colors.primary2,
        },
        buttonText:{
            color:'white',
            fontSize:18,
            fontFamily:Fonts.regular
        },
    
})