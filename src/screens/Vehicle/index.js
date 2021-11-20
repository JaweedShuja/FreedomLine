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
import VehicleItem from '../../components/ListItems/VehicleItem'
import vehicles from '../../data/vehicle.json'

class Vehicle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            vehicle:vehicles
        }
        this.renderVehicleItem = this.renderVehicleItem.bind(this)
    }
    renderVehicleItem({item}){
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
                    title={'Vehicle'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />
                <FlatList 
                    data={this.state.vehicle}
                    renderItem={this.renderVehicleItem}
                />
                <Circle/>                
            </View>
        )
    }
}

export default Vehicle