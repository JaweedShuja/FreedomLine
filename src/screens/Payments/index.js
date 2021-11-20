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
import InvoiceItem from '../../components/ListItems/InvoiceItem'

class Payments extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <TopBar 
                    title={'Payments'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard') }}
                />
                <Circle/>                
                <View style={styles.content}>   
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('SelectPolicies')
                    }}
                    style={styles.payNowContainer}>
                        <MaterialIcons 
                            size={50}
                            color={'white'}
                            name={'payments'}
                        />
                        <Text style={styles.payNowText}>Pay Now</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('RecentPayments')
                    }} 
                    style={styles.recentContainer}>
                        <FontAwesome5 
                            size={50}
                            color={Colors.primary2}
                            name={'file-invoice'}
                        />
                        <Text style={styles.recentPayment}>Recent Payments</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Payments