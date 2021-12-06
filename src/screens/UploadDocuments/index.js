import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    Modal,
    ActivityIndicator
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
import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'

class UploadDocuments extends React.Component{
    constructor(props){
        super(props)
        this.state = {  
            isLoading:false,
            modalVisible_Camera:false,
            documentsType:[]
        }
        this.setModalVisible_Camera = this.setModalVisible_Camera.bind(this)
    }
    setModalVisible_Camera() {
        this.setState({modalVisible_Camera: !this.state.modalVisible_Camera});
    }
    async getDocumentsType(){
        this.setState({
            isLoading:true
        })
        const response = await request.GetRequest(
            api.GetDocumentTypeAPI()
        )
        this.setState({
            isLoading:false
        })
        if(response.status == true){
            this.setState({
                documentsType:response.data
            })
        }
    }
    componentDidMount(){
        this.getDocumentsType()
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
                        {
                            this.state.documentsType.map(item => {
                                return  <View style={styles.type}>
                                    <Text style={styles.typeText}>
                                        {item.name}
                                    </Text>
                                </View>
                            })
                        }
                        {
                            this.state.isLoading && <ActivityIndicator 
                                size={'small'}
                                color={Colors.primary1}
                                style={{
                                    alignSelf:'center',
                                    marginVertical:20
                                }}
                            />
                        }
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