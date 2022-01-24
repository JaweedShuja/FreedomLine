import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    Linking,
    ActivityIndicator
} from 'react-native'
import styles from './style'
import * as image from '../../utils/imagePath'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'
import Circle from '../../components/Circle'
import TopBar from '../../components/TopBar/TopBarPaymentLogout'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { addUser } from '../../redux'
import { connect } from 'react-redux';
import Helper from '../../utils/Helper'
import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'
import { Fonts } from '../../utils/Fonts'

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dueAmount:0,
            activePolicies:0,
            pendingCancelation:0,
            cancelled:0,
            isLoading:false,
            isRedDot:false,
        }
    }
    async getDashboard(){
        this.setState({isLoading:true})
        const response = await request.PostRequest(
            payload.GetDashboardByClientIdPayloads(
                this.props.user.id,
            ),
            api.GetDashboardByClientIdAPI()
        )
        this.setState({isLoading:false})
        if(response.status == true){
            this.setState({
                dueAmount:response.data.dueAmount,
                activePolicies:response.data.activePolicies,
                pendingCancelation:response.data.pendingCancelation,
                cancelled:response.data.cancelled,
            })
        }
    }
    componentDidMount(){
        const unsubscribe = this.props.navigation.addListener('focus', () => {
            this.getDashboard()   
            this.newNotification()
        });
    }
    async newNotification(){
        let oldlenght = await Helper.getCache('notification')
        if(oldlenght == null){
            oldlenght = 0
        }
        let newLength = 0
        const response = await request.PostRequest(
            payload.GetClientDeviceNotificationsPayloads(
                this.props.user.id,
            ),
            api.GetClientDeviceNotificationsAPI()
        )
        if(response.status == true){
            newLength = response.data.length
        }
        if(newLength > oldlenght){
            this.setState({
                isRedDot:true
            })
        }
        else{
            this.setState({
                isRedDot:false
            })
        }
        // Helper.setCache('notification',newLength)
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <TopBar 
                    title={'Dashboard'}
                    // onCardClick={() => { 
                    //     this.props.navigation.navigate('SelectPolicies')
                    // }}
                    onLogoutClick={() => { 
                        Helper.saveToken('')
                        Helper.saveUser(null)
                        this.props.addUser({
                            token:'',
                            name:'',
                            email:'',
                            id:'',
                            isLogin:false
                          })
                    }}
                />

                <View style={styles.topCard}>
                    <TouchableOpacity 
                    onPress={() => {
                        this.getDashboard()    
                    }}
                    style={{
                        height:30,
                        width:30,
                        position:'absolute',
                        right:10,
                        top:10,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        {this.state.isLoading ? <ActivityIndicator 
                            size={'small'}
                            color={'white'}
                        />
                        :<Ionicons 
                            size={20}
                            color={'white'}
                            name={'refresh'}
                        />}
                    </TouchableOpacity>
                    <Text style={styles.dueAmount}>Due Amount</Text>
                    <Text style={styles.amountText}>{`$${this.state.dueAmount}`}</Text>
                    <View style={styles.cardOptionRow}>
                        <View style={styles.cardOption}>
                            <Text style={styles.optionTitle}>{'Active Policies'}</Text>
                            <Text style={styles.optionDes}>{this.state.activePolicies}</Text>
                        </View>
                        <View style={styles.cardOption}>
                            <Text style={styles.optionTitle}>{'Pending Cancellation'}</Text>
                            <Text style={styles.optionDes}>{this.state.pendingCancelation}</Text>
                        </View>
                        <View style={styles.cardOption}>
                            <Text style={styles.optionTitle}>{'Cancelled Policies'}</Text>
                            <Text style={styles.optionDes}>{this.state.cancelled}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.optionsRow}>
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('Policies')
                    }}
                    style={styles.option}>
                        <MaterialIcons 
                            size={30}
                            color={Colors.primary2}
                            name={'policy'}
                        />
                        <Text style={styles.optionText}>Policies</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('Invoices')
                    }}
                    style={styles.option}>
                        <FontAwesome5 
                            size={30}
                            color={Colors.primary2}
                            name={'file-invoice'}
                        />
                        <Text style={styles.optionText}>Invoices</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {
                        // this.props.navigation.navigate('Payments')
                        this.props.navigation.navigate('Invoices')
                    }}
                    style={styles.option}>
                        <MaterialIcons 
                            size={30}
                            color={Colors.primary2}
                            name={'payments'}
                        />
                        <Text style={styles.optionText}>Payments</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.optionsRow}>
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('Profile')
                    }}
                    style={styles.option}>
                        <FontAwesome5 
                            size={30}
                            color={Colors.primary2}
                            name={'user-alt'}
                        />
                        <Text style={styles.optionText}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('Endorsements')
                    }}
                    style={styles.option}>
                        <AntDesign 
                            size={30}
                            color={Colors.primary2}
                            name={'like1'}
                        />
                        <Text style={styles.optionText}>Send Documents</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => { this.props.navigation.navigate('Notifications') }}
                    style={styles.option}>
                        {
                            this.state.isRedDot && <View style={{
                                height:20,
                                width:20,
                                backgroundColor:Colors.red,
                                borderRadius:10,
                                position:'absolute',
                                right:10,
                                top:10,
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                    fontFamily:Fonts.bold,
                                    color:'white',
                                    fontSize:12,
                                }}>
                                    {'+1'}
                                </Text>
                            </View>
                        }
                        <Ionicons 
                            size={30}
                            color={Colors.primary2}
                            name={'notifications'}
                        />
                        <Text style={styles.optionText}>Notifications</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.bottomButton}>
                    <TouchableOpacity 
                    onPress={async () => {
                        const length = await Helper.getCache('javed')
                        console.log(length)
                        // Linking.openURL('https://freedomlinebrokerage.com/?page_id=182')
                    }}
                    style={styles.btn}>
                        <Text style={[styles.btnText,{
                            color:Colors.primary1
                        }]}>Get a free qoute</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={() => {
                        Linking.openURL('https://freedomlinebrokerage.com/home/bg-02-free-img/')
                    }}
                    style={[styles.btn,{
                        backgroundColor:"#DE791E"
                    }]}>
                        <Text style={[styles.btnText,{
                            color:Colors.white
                        }]}>Contact Us</Text>
                    </TouchableOpacity>
                </View>

                <Circle/>                
            </View>
        )
    }
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}
const mapDispatchToProps = dispatch => {
	return {
		addUser: (payload) => dispatch(addUser(payload))
	}
}

export default connect( mapStateToProps,mapDispatchToProps)(Dashboard);