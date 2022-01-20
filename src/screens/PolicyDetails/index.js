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
import InvoiceItem from '../../components/ListItems/InvoiceItem'
import VehicleItem from '../../components/ListItems/VehicleItem'
import vehicle from '../../data/vehicle.json'
import { connect } from 'react-redux';
import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'
import { Fonts } from '../../utils/Fonts'

class PolicyDetails extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            policy:this.props.route.params.policy,
            policyDetail:{},
            policyVehicles:[],
            isLoading:false,
        }
        this.renderVehicleItem = this.renderVehicleItem.bind(this)
    }
    componentDidMount(){
        this.getPolicyDetails()
    }
    async getPolicyDetails(){
        this.setState({ isLoading:true })
        const response = await request.PostRequest(
            payload.GetVehicleByPolicyAndClientIdPayloads(
                this.props.user.id,
                this.state.policy.policyId,  
            ),
            api.GetVehicleByPolicyAndClientIdAPI()
        )
        this.setState({ isLoading:false })
        if(response.status == true){
            this.setState({
                policyDetail:response.data.policyDetail,
                policyVehicles:response.data.policyVehicles,
            })
        }
    }
    
    renderVehicleItem = ({item}) => {
        return <VehicleItem 
            item={item}
            onPress={() => {
                this.props.navigation.navigate('Vehicle',{
                    vehicle:item,
                    policyId:this.state.policy.policyId,
                })
            }}
        />
    }
    getColor(type){
        switch(type){
            case 'PENDING CANCELLATION':
                return 'blue'
            case 'CANCELLED':
                return 'red'
            case 'ACTIVE':
                return 'green'
            default :    
                return 'black'
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
                    title={'Policy Details'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />
                <View style={styles.detailsContainer}>
                    <View style={[styles.status,{borderColor:this.getColor(this.state.policy.policyStatusName)}]}>
                        <Text style={[styles.statusText,{
                              color:this.getColor(this.state.policy.policyStatusName)
                        }]}>{this.state.policy.policyStatusName}</Text>
                    </View>
                    <Text style={styles.pType}>
                        {`Policy Type: ${this.state.policy.policyType}`}
                    </Text>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Policy #:'}</Text>
                        <Text style={[styles.detailsText,{fontFamily:Fonts.semiBold}]}>{this.state.policy.policyNumber}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Effective date:'}</Text>
                        <Text style={[styles.detailsText,{fontFamily:Fonts.semiBold}]}>{this.state.policy.effectiveDate}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Expiry date:'}</Text>
                        <Text style={[styles.detailsText,{fontFamily:Fonts.semiBold}]}>{this.state.policy.expiryDate}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Status:'}</Text>
                        <Text style={[styles.detailsText,{fontFamily:Fonts.semiBold}]}>{this.state.policy.policyStatusName}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Total Policy Cost:'}</Text>
                        <Text style={[styles.detailsText,{fontFamily:Fonts.semiBold}]}>{`$ ${this.state.policyDetail.annualPremium}`}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Total Paid:'}</Text>
                        <Text style={[styles.detailsText,{fontFamily:Fonts.semiBold}]}>{`$ ${this.state.policyDetail.totalCredit}`}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Remaining Premium:'}</Text>
                        <Text style={[styles.detailsText,{fontFamily:Fonts.semiBold}]}>{`$ ${this.state.policyDetail.remainingPremium}`}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Due Amount:'}</Text>
                        <Text style={[styles.detailsText,{fontFamily:Fonts.semiBold}]}>{`$ ${this.state.policyDetail.dueAmount}`}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Past Due:'}</Text>
                        <Text style={[styles.detailsText,{fontFamily:Fonts.semiBold}]}>{this.state.policyDetail.pastDue}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{`Current Due(${this.state.policyDetail.current_due_date}):`}</Text>
                        <Text style={[styles.detailsText,{fontFamily:Fonts.semiBold}]}>{`$ ${this.state.policyDetail.currentDue}`}</Text>
                    </View>
                    <View style={styles.detailsRow}>
                        <Text style={styles.detailsText}>{'Total Due:'}</Text>
                        <Text style={[styles.detailsText,{fontFamily:Fonts.semiBold}]}>{`$ ${this.state.policyDetail.totalDue}`}</Text>
                    </View>
                    
                </View>
                <View style={styles.vehicleTitleContainer}>
                    <Text style={styles.vehicleText}>
                        {'Vehicles & Drivers'}
                    </Text>
                </View>
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
                {
                    this.state.isLoading == false && this.state.policyVehicles.length == 0
                    ? <Text style={styles.noVehicleText}>
                        {'No Vehicles'}
                    </Text>
                    :
                    null

                }
                <FlatList 
                    data={this.state.policyVehicles}
                    renderItem={this.renderVehicleItem}
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
export default connect( mapStateToProps,null)(PolicyDetails);