import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../../utils/Colors'
import {Fonts} from '../../../utils/Fonts'
import Entypo from 'react-native-vector-icons/Entypo'

class SelectPolicyItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <TouchableOpacity 
            onPress={() => this.props.onSelect(this.props.item.id)}
            style={styles.container}>
                <View style={styles.checkBoxContainer}>
                    {
                        this.props.item.isSelected ?
                        <Entypo name="check" size={20} color={'green'} />
                        :
                        null
                    }
                </View>
                <View>
                    <Text style={styles.text}>{'Policy #'}</Text>
                    <Text style={styles.text}>{this.props.item.policy_no}</Text>
                </View>
                <Text style={styles.activeText}>
                    {this.props.item.status}
                </Text>
                <View>
                    <Text style={styles.text}>{'Due Amount'}</Text>
                    <Text style={styles.text}>{this.props.item.total_due}</Text>
                </View>
                <View>
                    <Text style={styles.text}>{'Due Date'}</Text>
                    <Text style={[styles.text,{color:'red'}]}>{this.props.item.expiry_date}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default SelectPolicyItem

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: Colors.primary2,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        marginBottom:10
    },
    checkBoxContainer:{
        height:20,
        width:20,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontFamily:Fonts.regular,
    },
    activeText:{
        fontFamily:Fonts.bold,
        color:Colors.primary1
    }
})