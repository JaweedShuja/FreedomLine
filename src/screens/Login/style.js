import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { Fonts } from "../../utils/Fonts";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'darkblue',
        
    },
    lognView:{
        marginTop:30,
        borderBottomWidth:1,
        paddingBottom:20,
        marginLeft:20,
        width:'50%',
        borderColor:Colors.white
    },  
    login:{
        fontFamily:Fonts.bold,
        fontSize:32,
        color:Colors.primary1,
    },
    inputTitle:{
        fontSize:16,
        fontFamily:Fonts.bold,
        color:Colors.white,
        marginTop:15,
        marginLeft:20,
    },
    input:{
        borderBottomWidth:1,
        fontSize:16,
        paddingVertical:10,
        paddingHorizontal:10,
        borderColor:Colors.white,
        color:Colors.white,
        marginLeft:20,
        fontFamily:Fonts.regular

    },
    forgotPassword:{
        fontFamily:Fonts.bold,
        fontSize:16,
        color:Colors.primary1,
        marginLeft:20,
        marginTop:20
    },
    btn:{
        height:45,
        width:150,
        borderRadius:10,
        backgroundColor:Colors.white,
        alignSelf:'center',
        marginTop:40,
        alignItems:'center',
        justifyContent:'center'
    },
    btnText:{
        color:Colors.red,
        fontFamily:Fonts.bold,
    },
    bottomButton:{
        flexDirection:'row',
        width:'100%',
        height:100,
        justifyContent:'space-around',
        position:'absolute',
        alignItems:'center',
        bottom:30,
    }
})