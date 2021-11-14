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
import PaymentsItem from '../../components/ListItems/PaymentsItem'

class RecentPayments extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            payments:[
                {
                    amount:"$26",
                    payment_mode:"Credit Card",
                    name:"Marie Kumar",
                    payment_id:"Cash-00000222",
                    date:"12/12/2019",
                }
            ]
        }
        this.renderPaymentItem = this.renderPaymentItem.bind(this)
    }
    renderPaymentItem({item}){
        return <PaymentsItem 
            item={item}
            
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
                    title={'Recent Payments'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { console.log('home')}}
                />
                <FlatList 
                    data={this.state.payments}
                    renderItem={this.renderPaymentItem}
                />
                <Circle/>                
            </View>
        )
    }
}

export default RecentPayments