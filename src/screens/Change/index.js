import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView,
    ActivityIndicator
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
import Input from './input'

import ProfileCard from '../../components/ProfileCard'
import ProfileBottomOptions from '../../components/ProfileBottomOptions'
import { Fonts } from '../../utils/Fonts'

import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'
import { connect } from 'react-redux';


class Chanage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedOption:"1",
            type:this.props.route.params.type,
            isLoading:false,

            //change of address
            address:'',
            city:'',
            zip:'',
            state:'',
        }
    }
    async changeOfAddress(){
        this.setState({isLoading:true})
        const response = await request.PostRequest(
            payload.ChangeAddressRequestPayloads(
                this.props.user.id,
                this.state.address,
                this.state.city,
                this.state.zip,
                this.state.state
            ),
            api.ChangeAddressRequestAPI()
        )
        this.setState({isLoading:false})
        if(response.status == true){
            Helper.showToast('Change Request Has Been Sent')   
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
                    title={`Change of ${this.state.type}`}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />
                <Circle/>                

                <ProfileCard 
                    name={this.props.user.name}
                    noPhone
                />
                <ScrollView>
                    
                        {
                            this.state.type === "Address" 
                        ? <View style={{flex:1}}>
                            <Input value={this.state.address}
                                onChangeText={(value) => this.setState({address:value})}
                                placeholder={'New Address'} />
                            <Input value={this.state.city}
                                onChangeText={(value) => this.setState({city:value})}
                                placeholder={'City'}/>
                            <Input value={this.state.zip}
                                onChangeText={(value) => this.setState({zip:value})}
                                placeholder={'Zip'}/>
                            <Input value={this.state.state}
                                onChangeText={(value) => this.setState({state:value})}
                                placeholder={'State'}/>
                            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                <TouchableOpacity 
                                disabled={this.state.isLoading}
                                onPress={() => this.changeOfAddress()}
                                style={styles.updateButton}>
                                    {
                                        this.state.isLoading
                                        ?
                                        <ActivityIndicator 
                                            size={'small'}
                                            color={'white'}
                                        />
                                        :
                                        <Text style={styles.updateButtonText}>
                                            Submit
                                        </Text>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        : null
                        }
                        {
                            this.state.type === "Driver" 
                            ? <View style={{flex:1,}}>
                                <Input placeholder={'Selected files are'}/>

                                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                <TouchableOpacity style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Attach files
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Submit
                                    </Text>
                                </TouchableOpacity>
                                    </View>
                            </View>
                            : null
                        }
                        {
                            this.state.type === "Vehicle" 
                            ? <View style={{flex:1,}}>
                                <Input placeholder={'Selected files are'}/>

                                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                <TouchableOpacity style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Attach files
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Submit
                                    </Text>
                                </TouchableOpacity>
                                    </View>
                            </View>
                            : null
                        }
                        {
                            this.state.type === "Other" 
                            ? <View style={{flex:1,}}>
                                <Text style={{
                                    fontFamily:Fonts.semiBold,
                                    color:Colors.primary2,
                                    marginHorizontal:20,
                                    marginTop:10,
                                }}>
                                    Please let us know, what kind of change you want to do in policy.
                                </Text>
                                    <Input placeholder={'Type message here:'}/>

                                    <Input placeholder={'Selected files are'}/>

                                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                <TouchableOpacity style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Attach files
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Submit
                                    </Text>
                                </TouchableOpacity>
                                </View>
                        </View>
                            : null
                        }
                </ScrollView>
               
               
            </View>
        )
    }
}
const mapStateToProps = state => {
	return {
		user: state.user
	}
}
export default connect( mapStateToProps,null)(Chanage);