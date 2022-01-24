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
import ChangeModal from './ChangeModal'

class Endorsements extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            modalVisible_Change:false,
            selectedModal:''
        }
        this.setModalVisible_Change = this.setModalVisible_Change.bind(this)
    }
    setModalVisible_Change(){
        this.setState({
            modalVisible_Change:!this.state.modalVisible_Change
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <TopBar 
                    title={'Endorsements'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />
                <Modal
                    visible={this.state.modalVisible_Change}
                    animationType={'slide'}
                    onRequestClose={this.setModalVisible_Change}
                    transparent={true}
                >
                    <ChangeModal
                        modalVisible={this.setModalVisible_Change}
                        name={this.state.selectedModal}
                        onContinue={async () => { 
                            await this.setModalVisible_Change()
                            this.props.navigation.navigate('SelectPolicy',{
                                type:this.state.selectedModal
                            })
                         }}
                    />

                </Modal>
                <Circle/>                

              
                <View style={styles.optionsRow}>
                <TouchableOpacity 
                    onPress={async () => {
                        await this.setState({
                            selectedModal:'Address'
                        })
                        this.setModalVisible_Change()
                    }}
                    style={styles.option}>
                        <FontAwesome5 
                            size={40}
                            color={Colors.primary2}
                            name={'user-alt'}
                        />
                        <Text style={styles.optionText}>Change of Address</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                     onPress={async () => {
                        await this.setState({
                            selectedModal:'Vehicle'
                        })
                        this.setModalVisible_Change()
                    }}
                    style={styles.option}>
                        <FontAwesome5 
                            size={40}
                            color={Colors.primary2}
                            name={'file-invoice'}
                        />
                        <Text style={styles.optionText}>Change of Vehicle</Text>
                    </TouchableOpacity>
                 
                </View>
                <View style={styles.optionsRow}>
                <TouchableOpacity 
                    onPress={async () => {
                        await this.setState({
                            selectedModal:'Driver'
                        })
                        this.setModalVisible_Change()
                    }}
                    style={styles.option}>
                        <FontAwesome5 
                            size={40}
                            color={Colors.primary2}
                            name={'file-invoice'}
                        />
                        <Text style={styles.optionText}>Change of Driver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('SelectPolicy',{
                            type:'Other'
                        })
                    }}
                    style={styles.option}>
                        <FontAwesome5 
                            size={40}
                            color={Colors.primary2}
                            name={'file-invoice'}
                        />
                        <Text style={styles.optionText}>Other</Text>
                    </TouchableOpacity>
                  
                </View>
            </View>
        )
    }
}

export default Endorsements