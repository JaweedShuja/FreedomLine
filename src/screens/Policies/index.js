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
import TopBar from '../../components/TopBar/TopBarBackPayment'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PolicyItem from '../../components/ListItems/PoliciesItem'
import policies from '../../data/policies.json'

class Policies extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            policies:policies
        }
        this.renderPolicyItem = this.renderPolicyItem.bind(this)
    }
    renderPolicyItem({item}){
        return <PolicyItem 
            item={item}
            onPress={() => { this.props.navigation.navigate('PolicyDetails',{
                policy:item
            })}}
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
                    title={'Policies'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onCardClick={() => { console.log('card')}}
                />
                <FlatList 
                    data={this.state.policies}
                    renderItem={this.renderPolicyItem}
                />
                

                <Circle/>                
            </View>
        )
    }
}

export default Policies