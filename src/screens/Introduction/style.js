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
        width:(2640/100)*8,
        height:(524/100)*8,
        alignSelf:'center',
        marginTop:15
    },
    btn:{
        // height:45,
        paddingVertical:12,
        width:200,
        borderRadius:10,
        backgroundColor:Colors.primary2,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
        ...commonStyles.shadow  
    },
    btnText:{
        color:Colors.primary1,
        fontFamily:Fonts.bold
    },
    bgCircle:{
        height:1000,
        width:1000,
        backgroundColor:'darkblue',
        borderRadius:500,
        position:'absolute',
        zIndex:-1,
        bottom:-550,
    },
    optionBtn:{
        height:100,
        width:120,
        backgroundColor:'white',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        ...commonStyles.shadow   
    },
    optionRow:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    bottomTabContainer:{
        marginTop:'15%',
        padding:20,
    },
    optionImage:{
        height:120,
        width:120,
    },
    optionLabel:{
        height:30,
        width:'100%',
        position:'absolute',
        bottom:0,
        backgroundColor:'rgba(255,255,255,0.8)',
        zIndex:1,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    labelText:{
        fontFamily:Fonts.semiBold,
        fontSize:12,
    }
})