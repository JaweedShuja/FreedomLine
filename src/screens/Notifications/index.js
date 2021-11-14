import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
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

class Notifications extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notifications:[
                {
                    id:"1",
                    title:"ADCAP BROKERAGE INC",
                    des:"ADCAP BROKERAGE CLIENT:",
                    name:"Marie Kumar",
                    policy_no:"test123",
                    past_due:"$335",
                    current_due:"$420",
                    total_due:"$755",
                    date:"12/12/2019",
                }
            ]
        }
        this.renderNotificationItem = this.renderNotificationItem.bind(this)
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
                    onHomeClick={() => { console.log('home')}}
                />
                <FlatList 
                    data={this.state.notifications}
                    renderItem={this.renderNotificationItem}
                />
                <Circle/>                
            </View>
        )
    }
}

export default Notifications