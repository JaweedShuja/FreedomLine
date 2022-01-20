import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { Fonts } from '../../utils/Fonts'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Colors } from '../../utils/Colors'

class EditProfileModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            contact:this.props.contact,
            email:this.props.email,
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.modalTitle}>Edit Profile</Text>
                        <Fontisto style={styles.closeIcon} name="close-a" size={20} color="#000" onPress={this.props.modalVisible}/>
                    </View>
                    <View>
                        <Text style={styles.modalLabel}>Cell Phone</Text>
                        <TextInput 
                            value={this.state.contact}
                            onChangeText={(value) => {this.setState({contact:value})}}
                            style={styles.modalInput}
                        />
                    </View>
                    <View>
                        <Text style={styles.modalLabel}>Email Address</Text>
                        <TextInput 
                            value={this.state.email}
                            onChangeText={(value) => {this.setState({email:value})}}
                            style={styles.modalInput}
                        />
                    </View>

                    <TouchableOpacity 
                    onPress={this.props.modalVisible}
                    style={styles.modalButtonContainer}>
                        <Text style={styles.modalButtonText}>Save Changes</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
        )
    }
}

export default EditProfileModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    modalView:{
        // height:'60%',
        width:'80%',
        borderRadius:10,
        backgroundColor:'white',
    },
    modalTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        color:'black'
    },
    modalLabel:{
        fontSize:16,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        fontFamily:Fonts.regular,
        color:'black'
    },
    modalInput:{
        height:40,
        borderColor:'gray',
        borderWidth:1,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        borderRadius:5,
        paddingHorizontal:10,
        fontFamily:Fonts.regular
    },
    closeIcon:{
        margin:10,
    },
    modalButtonContainer:{
        height:50,
        backgroundColor:Colors.primary2,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:10,
        marginHorizontal:10,
    },
    modalButtonText:{
        color:'white',
        fontSize:16,
        fontFamily:Fonts.semiBold
    }


})