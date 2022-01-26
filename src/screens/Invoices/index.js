import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    Linking,
    ActivityIndicator,
    RefreshControl
} from 'react-native'
import styles from './style'
import * as image from '../../utils/imagePath'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'
import Circle from '../../components/Circle'
import TopBar from '../../components/TopBar/TopBarBackHome'
import Helper from '../../utils/Helper'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import InvoiceItem from '../../components/ListItems/InvoiceItem'
import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'
import { connect } from 'react-redux';
import { Fonts } from '../../utils/Fonts'

class Invoices extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            invoices:[],
            isLoading:false,
            refreshing:false,
        }
        this.renderInvoiceItem = this.renderInvoiceItem.bind(this)
    }
    componentDidMount(){
        this.getInvoices()
    }
    renderInvoiceItem({item}){
        return <InvoiceItem 
            item={item}
            onPayClick={() => {
                console.log(item)
                if(item.invoice_pay_now_link != ''){
                    if(item.invoice_pay_now_link.slice(0,4) == 'http'){
                        Linking.openURL(item.invoice_pay_now_link)
                    }
                    else{
                        Helper.showToast(item.invoice_pay_now_link)
                    }
                    
                }
                else{
                    Helper.showToast('No Link Found!')
                }
            }}
            onViewClick={() => {
                if(item.invoice_link != ''){
                    Linking.openURL(item.invoice_link)
                }else{
                    Helper.showToast('No Link Found!')
                }
                
            }}
        />  
    }
    async getInvoices(){
        this.setState({isLoading:true})
        const response = await request.PostRequest(
            payload.GetAllInvoicesPayloads(
                this.props.user.id,
            ),
            api.GetAllInvoicesAPI()
        )
        this.setState({isLoading:false})
        if(response.status == true){
            this.setState({
                invoices:response.data
            })
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
                    title={'Invoices'}
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
                {
                !this.state.isLoading && !this.state.refreshing && <Text style={{
                    marginVertical:10,
                    fontSize:12,
                    alignSelf:'center',
                    fontFamily:Fonts.regular,
                    color:'#8E8E93'
                }}>{'Pull down to Refresh'}</Text>
                }
                <FlatList 
                    refreshControl={<RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={async () => {
                            this.setState({
                                refreshing:true,
                                invoices:[]
                            })
                            await this.getInvoices()
                            this.setState({
                                refreshing:false
                            })

                        }}
                      />}
                    data={this.state.invoices}
                    renderItem={this.renderInvoiceItem}
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
export default connect( mapStateToProps,null)(Invoices);