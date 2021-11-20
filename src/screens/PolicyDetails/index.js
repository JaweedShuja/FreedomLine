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
import VehicleItem from '../../components/ListItems/VehicleItem'
import vehicle from '../../data/vehicle.json'

class PolicyDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            policy:this.props.route.params.policy,
            vehicle:vehicle
        }
        this.renderVehicleItem = this.renderVehicleItem.bind(this)
    }
    renderVehicleItem = ({item}) => {
        return <VehicleItem 
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
                    title={'Policy Details'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />
                <View style={styles.detailsContainer}>
                    <View style={styles.status}>
                        <Text style={[styles.statusText,{
                            color:this.state.policy.status == 'active'
                            ? Colors.green
                            : Colors.red
                        }]}>{
                            this.state.policy.status == 'active'
                            ? "Active"
                            : "In-Active"
                        }</Text>
                    </View>
                    <Text style={styles.pType}>
                        {`Policy Type: ${this.state.policy.policy_type}`}
                    </Text>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Policy No:'}</Text>
                        <Text style={styles.detailsText}>{this.state.policy.policy_no}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Effective date:'}</Text>
                        <Text style={styles.detailsText}>{this.state.policy.effective_date}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Expiry date:'}</Text>
                        <Text style={styles.detailsText}>{this.state.policy.expiry_date}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Status:'}</Text>
                        <Text style={styles.detailsText}>{this.state.policy.status}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Total Policy Cost:'}</Text>
                        <Text style={styles.detailsText}>{this.state.policy.total_policy_cost}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Paid Up to now:'}</Text>
                        <Text style={styles.detailsText}>{this.state.policy.paid_upto_now}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Remaining Balance:'}</Text>
                        <Text style={styles.detailsText}>{this.state.policy.remaining_balance}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Past Due (Immediate):'}</Text>
                        <Text style={styles.detailsText}>{this.state.policy.past_due}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Current Due(10/20/2021):'}</Text>
                        <Text style={styles.detailsText}>{this.state.policy.current_due}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Total Due:'}</Text>
                        <Text style={styles.detailsText}>{this.state.policy.total_due}</Text>
                    </View>
                </View>
                <View style={styles.vehicleTitleContainer}>
                    <Text style={styles.vehicleText}>
                        {'Vehicles & Drivers'}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate(('Vehicle'))
                        }}
                    >
                        <Text style={styles.viewAllText}>View All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList 
                    data={this.state.vehicle}
                    renderItem={this.renderVehicleItem}
                />
               
                <Circle/>                
            </View>
        )
    }
}

export default PolicyDetails