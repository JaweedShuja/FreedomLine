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
    RefreshControl
} from 'react-native'
import styles from './style'
import * as image from '../../utils/imagePath'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'
import Circle from '../../components/Circle'
import TopBar from '../../components/TopBar/TopBarBackPayment'
import { connect } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import PolicyItem from '../../components/ListItems/PoliciesItem'
import policies from '../../data/policies.json'
import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'
import { Fonts } from '../../utils/Fonts'

class SelectPolicy extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            policies:[],
            isLoading:false,
            refreshing:false,

            type:this.props.route.params.type,
        }
        this.renderPolicyItem = this.renderPolicyItem.bind(this)
    }
    async getPolicies(){
        this.setState({ isLoading:true })
        const response = await request.PostRequest(
            payload.GetPolicyByClientIdPayloads(
                this.props.user.id,
            ),
            api.GetPolicyByClientIdAPI()
        )
        this.setState({ isLoading:false })
        if(response.status == true){
            this.setState({
                policies:response.data
            })   
        }
    }
    componentDidMount(){
        this.getPolicies()
    }
    renderPolicyItem({item}){
        return <PolicyItem 
            item={item}
            // onPress={() => {
            //     console.log(item)
            // }}
            onPress={() => { 
                this.props.navigation.navigate('Change',{
                    type:this.state.type,
                    policyId:item.policyId,
                    policyNumber:item.policyNumber,
                })
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
                    title={'Selcect Policy'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onCardClick={() => { this.props.navigation.navigate('Invoices')}}
                />
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
                    !this.state.isLoading && !this.state.refreshing && <Text style={{
                        marginVertical:10,
                        fontSize:12,
                        alignSelf:'center',
                        fontFamily:Fonts.regular,
                        color:'black'
                    }}>{'Pull down to Refrest'}</Text>
                }
                <FlatList 
                refreshControl={<RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={async () => {
                        this.setState({
                            refreshing:true,
                            policies:[]
                        })
                        await this.getPolicies()
                        this.setState({
                            refreshing:false
                        })

                    }}
                  />}
                    contentContainerStyle={{paddingBottom:300}}
                    data={this.state.policies}
                    renderItem={this.renderPolicyItem}
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
export default connect( mapStateToProps,null)(SelectPolicy);