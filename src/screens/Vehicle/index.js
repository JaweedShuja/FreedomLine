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
            drivers:[]
        }
        this.renderVehicleItem = this.renderVehicleItem.bind(this)
    }
    renderVehicleItem({item}){
        return <VehicleItem 
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
                drivers:[],
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
                <View>
                    <FlatList 
                        data={this.state.vehicle}
                        renderItem={this.renderVehicleItem}
                    />
                </View>

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
                    null

                }

                <Circle/>                
            </View>
        )
    }
}

export default Vehicle