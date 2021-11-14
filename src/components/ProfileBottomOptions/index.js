import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import { Colors } from "../../utils/Colors";

class ProfileBottomOptions extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                onPress={() => {
                    this.props.onSelectOption('1')
                }}
                style={[styles.optionContainer,{
                    borderRightWidth:1,
                    backgroundColor:this.props.selectedOption == "1" ? 'gray' :'white',
                    borderTopLeftRadius:30,
                }]}>
                     <FontAwesome5 
                        size={20}
                        color={Colors.primary2}
                        name={'user-alt'}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    this.props.onSelectOption('2')
                }}
                style={[styles.optionContainer,{
                    borderRightWidth:1,
                    backgroundColor:this.props.selectedOption == "2" ? 'gray' :'white'
                }]}>
                      <Entypo 
                        size={20}
                        color={Colors.primary2}
                        name={'phone'}
                    />  
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    this.props.onSelectOption('3')
                }}
                style={[styles.optionContainer,{
                    borderRightWidth:1,
                    backgroundColor:this.props.selectedOption == "3" ? 'gray' :'white'
                }]}>
                    <Entypo 
                        size={20}
                        color={Colors.primary2}
                        name={'location'}
                    />                    
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    this.props.onSelectOption('4')
                }}
                style={[styles.optionContainer,{
                    backgroundColor:this.props.selectedOption == "4" ? 'gray' :'white',
                    borderTopRightRadius:30,
                }]}>
                    <FontAwesome5 
                        size={20}
                        color={Colors.primary2}
                        name={'file-invoice'}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default ProfileBottomOptions

const styles = StyleSheet.create({
  container:{
      height:60,
      flexDirection:'row',
      backgroundColor:'white',
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      borderWidth:0.5,
  },
  optionContainer:{
      flex:1,
      borderColor:'gray',
      alignItems:'center',
      justifyContent:'center',
  }  
})