import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    ActivityIndicator,
    ScrollView,
    RefreshControl
} from 'react-native'
import { Fonts } from '../../utils/Fonts'
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
import VehicleItem from '../../components/ListItems/VehicleItem'
import DriverItem from '../../components/ListItems/DriverItem'
import vehicles from '../../data/vehicle.json'

import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'

class Vehicle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            vehicle:[this.props.route.params.vehicle],
            policyId:this.props.route.params.policyId,

            isLoading:false,
            drivers:[],
            refreshing:false,
        }
        this.renderVehicleItem = this.renderVehicleItem.bind(this)
        this.renderVehicleDriverItem = this.renderVehicleDriverItem.bind(this)
    }
    renderVehicleItem(item){
        return <VehicleItem 
            item={item}
        />  
    }
    renderVehicleDriverItem(item){
        return <DriverItem 
            item={item}
        />  
    }
    async getDrivers(){
        this.setState({ isLoading:true })
        const response = await request.PostRequest(
            payload.GetDriverByPolicyAndVehicleIdPayloads(
                this.state.vehicle[0].vehicleId,
                this.state.policyId
            ),
            api.GetDriverByPolicyAndVehicleIdAPI()
        )
        this.setState({ isLoading:false })
        if(response.status == true){
            this.setState({
                drivers:response.data.vehicleDrivers,
            })
        }
    }
    componentDidMount(){
        this.getDrivers()
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <TopBar 
                    title={'Vehicle'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />    
                <ScrollView
                     refreshControl={<RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={async () => {
                            this.setState({
                                refreshing:true,
                                policies:[]
                            })
                            this.getDrivers()
                            this.setState({
                                refreshing:false
                            })
    
                        }}
                      />}
                >
                    {
                    !this.state.isLoading && !this.state.refreshing && <Text style={{
                        marginVertical:10,
                        fontSize:12,
                        alignSelf:'center',
                        fontFamily:Fonts.regular,
                        color:'#8E8E93'
                    }}>{'Pull down to Refresh'}</Text>
                }
                {
                    this.state.vehicle.map(this.renderVehicleItem)   
                }
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    marginHorizontal:20,
                    marginTop:20,
                    marginBottom:10,
                    flexDirection:'row',
                }}>
                    <Text style={{
                        fontFamily:Fonts.semiBold,
                        fontSize:16,
                        color:Colors.primary2,
                    }}>
                        {'Drivers'}
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
                    this.state.isLoading == false && this.state.drivers.length == 0
                    ? <Text style={{
                        alignSelf:'center',
                        marginVertical:20,
                        fontFamily:Fonts.regular,
                        color:Colors.primary1
                    }}>
                        {'No Drivers Found!'}
                    </Text>
                    :   
                        this.state.drivers.map(this.renderVehicleDriverItem)
                }
                </ScrollView>
                <Circle/>                
            </View>
        )
    }
}

export default Vehicle