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
import PaymentsItem from '../../components/ListItems/PaymentsItem'
import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'
import { connect } from 'react-redux';

class RecentPayments extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            payments:[
                // {
                //     amount:"$26",
                //     payment_mode:"Credit Card",
                //     name:"Marie Kumar",
                //     payment_id:"Cash-00000222",
                //     date:"12/12/2019",
                // }
            ],
            isLoading:false,
        }
        this.renderPaymentItem = this.renderPaymentItem.bind(this)
    }
    async getRecentPayments(){
        this.setState({isLoading:true})
        const response = await request.PostRequest(
            payload.GetRecentPaymentPayloads(
                this.props.user.id,
            ),
            api.GetRecentPaymentAPI()
        )
        this.setState({isLoading:false})
        if(response.status == true){
            this.setState({
                payments:response.data
            })
        }
    }
    componentDidMount(){
        this.getRecentPayments()
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
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />
                {
                    this.state.isLoading && <ActivityIndicator 
                        size={'small'}
                        color={Colors.primary1}
                        style={{alignSelf:'center', marginVertical:20}}
                    />
                }
                <FlatList 
                    contentContainerStyle={{paddingBottom:300}}
                    data={this.state.payments}
                    renderItem={this.renderPaymentItem}
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
export default connect( mapStateToProps,null)(RecentPayments);