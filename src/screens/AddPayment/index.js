import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    Modal
} from 'react-native'
import styles from './style'
import * as image from '../../utils/imagePath'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'
import Circle from '../../components/Circle'
import TopBar from '../../components/TopBar/TopBarBackHome'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import InvoiceItem from '../../components/ListItems/InvoiceItem'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

class AddPayment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            useLiteCreditCardInput: false,
            isValid:false
        }
        
    }
    _onChange = (formData) => {
        console.log(JSON.stringify(formData, null, " "))
          if(formData.valid){
              this.setState({
                  isValid:true
              })
          }
          if(this.state.isValid && formData.valid == false){
              this.setState({
                  isValid:false
              })
          }
      };
    _onFocus = (field) => console.log("focusing", field);
    _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <TopBar 
                    title={'Pay Now'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { console.log('home')}}
                />
                <View style={{flex:1}}>
                    <CreditCardInput
                    autoFocus

                    requiresName
                    requiresCVC
                    requiresPostalCode

                    labelStyle={styles.label}
                    inputStyle={styles.input}
                    validColor={"black"}
                    invalidColor={"red"}
                    placeholderColor={"darkgray"}

                    onFocus={this._onFocus}
                    onChange={this._onChange} />

<View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}
                        style={styles.enterButton}>
                        <Text style={styles.buttonText}>
                            Back
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {

                    }}
                        disabled={!this.state.isValid}
                        style={[styles.enterButton, {opacity: this.state.isValid  ? 1 : 0.5}]}>
                        <Text style={styles.buttonText}>
                            Enter
                        </Text>
                    </TouchableOpacity>
                </View>
                </View>


               
               
                <Circle/>                
            </View>
        )
    }
}

export default AddPayment