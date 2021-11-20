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
import CameraModal from './CameraModal'

class UploadDocuments extends React.Component{
    constructor(props){
        super(props)
        this.state = {  
            modalVisible_Camera:false
        }
        this.setModalVisible_Camera = this.setModalVisible_Camera.bind(this)
    }
    setModalVisible_Camera() {
        this.setState({modalVisible_Camera: !this.state.modalVisible_Camera});
    }
   
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <TopBar 
                    title={'Upload Documents'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />
                <Modal
                    visible={this.state.modalVisible_Camera}
                    animationType={'slide'}
                    onRequestClose={this.setModalVisible_Camera}
                    transparent={true}
                >
                    <CameraModal
                        modalVisible={this.setModalVisible_Camera}
                       
                    />

                </Modal>
                <View style={styles.content}>
                    <Text style={styles.title}>
                        {'Select Doc Type'}
                    </Text>
                    <View style={styles.typeContainer}>
                        <View style={styles.type}>
                            <Text style={styles.typeText}>
                                {'Driver license'}
                            </Text>
                        </View>
                        <View style={styles.type}>
                            <Text style={styles.typeText}>
                                {'Passport'}
                            </Text>
                        </View>
                        <View style={styles.type}>
                            <Text style={styles.typeText}>
                                {'ID Card'}
                            </Text>
                        </View>
                        <View style={styles.type}>
                            <Text style={styles.typeText}>
                                {'VISA Card'}
                            </Text>
                        </View>
                        <View style={styles.type}>
                            <Text style={styles.typeText}>
                                {'Add Driver Form'}
                            </Text>
                        </View>
                        <View style={styles.type}>
                            <Text style={styles.typeText}>
                                {'ATIC Replacement of Vehicle'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.bottomButtonContainer}>
                        <TouchableOpacity 
                        onPress={this.setModalVisible_Camera}
                        style={[styles.button,{
                            backgroundColor:Colors.primary2
                        }]}>
                            <Text style={[styles.buttonText,{
                                color:'white'
                            }]}>
                                {'Select Document'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={this.setModalVisible_Camera}
                        style={[styles.button,{
                            marginLeft:20,
                        }]}>
                            <Text style={[styles.buttonText,{
                                color:Colors.primary1
                            }]}>
                                {'Upload'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View> 
              
                <Circle/>                
            </View>
        )
    }
}

export default UploadDocuments