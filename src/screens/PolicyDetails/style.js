import { StyleSheet } from "react-native";
import { Colors } from "../../utils/Colors";
import { commonStyles } from "../../utils/commonStyles";
import {Fonts } from '../../utils/Fonts'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    detailsContainer:{
        width:'90%',
        alignSelf:'center',
        borderWidth:1,
        borderColor:Colors.primary2,
        borderRadius:10,
        padding:10,
    },
    status:{
        height:25,
        width:80,
        borderRadius:30,
        borderWidth:1,
        borderColor:Colors.red,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'flex-end',
    },
    statusText:{
        fontFamily:Fonts.semiBold,
        fontSize:12,
    },
    pType:{
        fontFamily:Fonts.semiBold,
        color:Colors.primary1,
        marginBottom:5,
    },
    detailsRow:{
        width:'80%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    detailsText:{
        fontFamily:Fonts.regular,
    },
    vehicleText:{
        fontFamily:Fonts.semiBold,
        fontSize:16,
        color:Colors.primary2,
    },
    vehicleTitleContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:20,
        marginBottom:10,
        flexDirection:'row',
    },
    viewAllText:{
        fontFamily:Fonts.semiBold,
        color:Colors.primary2,
    },
    noVehicleText:{
        alignSelf:'center',
        marginVertical:20,
        fontFamily:Fonts.regular,
        color:Colors.primary1
    }
    
})