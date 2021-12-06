import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { commonStyles } from "../../utils/commonStyles";
import {Fonts } from '../../utils/Fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    updateButton:{
        height:40,
        width:120,
        borderRadius:30,
        backgroundColor:Colors.primary2,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:20
    },
    updateButtonText:{
        fontFamily:Fonts.bold,
        color:'white',
    },
    documentContainer:{
        flexDirection:'row',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
    },
    document:{
        height:100,
        width:80,
        borderRadius:5,
        borderWidth:1,
        borderColor:Colors.primary2,
        alignItems:'center',
        justifyContent:'center'
    },
    link:{
        fontFamily:Fonts.bold,
        fontSize:16,
        alignSelf:'center',
        marginVertical:10,
        color:Colors.primary2
    },
    loadingScreen:{
        height:'100%',
        width:'100%',
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.5)',
        alignItems:'center',
        justifyContent:'center'
    }
    
})