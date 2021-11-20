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
import SelectPolicyItem from '../../components/ListItems/SelectPolicyItem'
import policies from '../../data/policies.json'
import PaymentOptionModal from './PaymentOptionModal'
import PaymentPolicyModal from './PaymentPolicyModal'

class SelectPolicies extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            policies:policies.map(el => {
                return {
                    ...el,
                    isSelected:false
                }
            }),
            isPoliciesSelected:false,
            selectedPolicy:null,
            pay_type:'',

            modalVisible_PaymentOption:false,
            modalVisible_PaymentPolicy:false,

        }
        this.renderSelectPolicyItem = this.renderSelectPolicyItem.bind(this)
        this.setModalVisible_PaymentOption = this.setModalVisible_PaymentOption.bind(this)
        this.setModalVisible_PaymentPolicy = this.setModalVisible_PaymentPolicy.bind(this)
    }
    setModalVisible_PaymentOption(){
        this.setState({
            modalVisible_PaymentOption:!this.state.modalVisible_PaymentOption
        })
    }
    setModalVisible_PaymentPolicy(){
        this.setState({
            modalVisible_PaymentPolicy:!this.state.modalVisible_PaymentPolicy
        })
    }
    renderSelectPolicyItem({item}){
        return <SelectPolicyItem 
            item={item}
            onSelect={(id) => {
                this.setState({
                    policies:this.state.policies.map(el => {
                        return {
                            ...el,
                            isSelected:el.id === id
                        }
                    }),
                    isPoliciesSelected:true,
                    selectedPolicy:item
                })
                
            }}
        />  
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <TopBar 
                    title={'Select Policies'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />
                <Modal
                    visible={this.state.modalVisible_PaymentOption}
                    animationType={'slide'}
                    onRequestClose={this.setModalVisible_PaymentOption}
                    transparent={true}
                >
                    <PaymentOptionModal
                        modalVisible={this.setModalVisible_PaymentOption}
                        selectedPolicy={this.state.selectedPolicy}
                        onPaymentOptionSelected={async (type) => {  
                            this.setState({
                                pay_type:type
                            })
                            await this.setModalVisible_PaymentOption()
                            this.setModalVisible_PaymentPolicy()
                        }}
                    />

                </Modal>
                <Modal
                    visible={this.state.modalVisible_PaymentPolicy}
                    animationType={'slide'}
                    onRequestClose={this.setModalVisible_PaymentPolicy}
                    transparent={true}
                >
                    <PaymentPolicyModal
                        modalVisible={this.setModalVisible_PaymentPolicy}
                        onContinuePress={async () => {
                            await this.setModalVisible_PaymentPolicy()
                            if(this.state.pay_type === 'ach'){
                                this.props.navigation.navigate('PayWithACH',{
                                    total_amount:this.state.selectedPolicy.total_due,
                                })
                            }else{
                                this.props.navigation.navigate('AddPayment')
                            }
                            
                        }}
                    />

                </Modal>
                <FlatList 
                    data={this.state.policies}
                    renderItem={this.renderSelectPolicyItem}
                />
                {
                    this.state.isPoliciesSelected &&
                    <View style={styles.bottomView}>
                        <Text style={styles.total}>
                            {`Total: ${this.state.selectedPolicy.total_due}`}
                        </Text>
                        <TouchableOpacity
                        onPress={this.setModalVisible_PaymentOption}
                            style={styles.bottomButton}
                          
                            
                        >
                            <Text style={styles.bottomButtonText}>
                                Pay Now
                            </Text>
                        </TouchableOpacity>
         
         
         
        
    
                    </View>
                }
                <Circle/>                
            </View>
        )
    }
}

export default SelectPolicies