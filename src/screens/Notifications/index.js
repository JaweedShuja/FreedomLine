import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
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
import NotificationItem from '../../components/ListItems/NotificationItem'
import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'
import { connect } from 'react-redux';

class Notifications extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notifications:[],
            isLoading:false,
        }
        this.renderNotificationItem = this.renderNotificationItem.bind(this)
    }
    componentDidMount(){
        this.getNotifications()
    }
    async getNotifications(){
        this.setState({
            isLoading:true
        })
        const response = await request.PostRequest(
            payload.GetClientDeviceNotificationsPayloads(
                this.props.user.id,
            ),
            api.GetClientDeviceNotificationsAPI()
        )
        this.setState({
            isLoading:false
        })
        if(response.status == true){
            this.setState({
                notifications:response.data  
            })
        }
    }
    renderNotificationItem({item}){
        return <NotificationItem 
            item={item}
            onPayClick={() => {
                console.log('pay')
            }}
            onViewClick={() => {
                console.log('view')
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
                    title={'Notifications'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />
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
                <FlatList 
                    contentContainerStyle={{paddingBottom:300}}
                    data={this.state.notifications}
                    renderItem={this.renderNotificationItem}
                />
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
export default connect( mapStateToProps,null)(Notifications);