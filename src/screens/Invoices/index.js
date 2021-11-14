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

class Invoices extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            invoices:[
                {
                    id:"1",
                    invoice_no:"00464374",
                    policy_no:"Maria1",
                    due_amount:"$567"
                }
            ]
        }
        this.renderInvoiceItem = this.renderInvoiceItem.bind(this)
    }
    renderInvoiceItem({item}){
        return <InvoiceItem 
            item={item}
            onPayClick={() => {
                this.props.navigation.navigate('SelectPolicies')
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
                    title={'Invoices'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { console.log('home')}}
                />
                <FlatList 
                    data={this.state.invoices}
                    renderItem={this.renderInvoiceItem}
                />
                <Circle/>                
            </View>
        )
    }
}

export default Invoices