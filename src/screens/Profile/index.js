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

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import InvoiceItem from '../../components/ListItems/InvoiceItem'
import Input from './input'
import { connect } from 'react-redux';
import ProfileCard from '../../components/ProfileCard'
import ProfileBottomOptions from '../../components/ProfileBottomOptions'
import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedOption:"1",
            isLoading:false,

            //1
            firstName:'',
            middleName:"",
            lastName:'',
            dob:'',
            email:"",
            phoneNumber:"",
            gender:'',
            refferedBy:'',

            //2
            contact:'',

            //3
            address:"",
            city:"",
            state:"",
            zip:"",

        }
    }
    async getProfile(){
        this.setState({ isLoading:true })
        const response = await request.PostRequest(
            payload.GetUserProfilePayloads(
                this.props.user.id,
                this.props.user.token
            ),
            api.GetUserProfileAPI()
        )
        this.setState({ isLoading:false })
        if(response.status == true){
            //1
            this.setState({
                firstName:response.data.userProfileDetail.firstName,
                middleName:response.data.userProfileDetail.middleName,
                lastName:response.data.userProfileDetail.lastName,
                dob:response.data.userProfileDetail.dob,
                email:response.data.userProfileDetail.email,
                phoneNumber:response.data.userProfileDetail.phoneNumber,
                gender:response.data.userProfileDetail.gender,
                refferedBy:response.data.userProfileDetail.refferedBy,
            })
            //2
            if(response.data.clientContacts.length != 0){
                this.setState({
                    contact:response.data.clientContacts[0].contact
                })
            }
            //3
            if(response.data.clientAddresses.length != 0){
                this.setState({
                    address:response.data.clientAddresses[0].address,
                    city:response.data.clientAddresses[0].city,
                    state:response.data.clientAddresses[0].state,
                    zip:response.data.clientAddresses[0].zip,
                })
            }

        }
    }
    componentDidMount(){
        this.getProfile()
    }
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <TopBar 
                    title={'Profile'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard') }}
                />
                {
                    this.state.isLoading && <View style={styles.loadingScreen}>
                        <ActivityIndicator 
                            size={'small'}
                            color={Colors.primary1}
                        />
                    </View>
                }
                <Circle/>                

                <ProfileCard 
                    name={this.state.firstName + " " + this.state.lastName}
                    address={this.state.address}
                />
                <ScrollView>
                    
                        {
                            this.state.selectedOption === "1" 
                        ? <View style={{flex:1}}>
                            <Input value={this.state.firstName}
                                onChangeText={(value) => {this.setState({firstName:value})}}
                                placeholder={'First Name'} />
                            <Input value={this.state.middleName}
                                onChangeText={(value) => {this.setState({middleName:value})}}
                                placeholder={'Middle Name'}/>
                            <Input value={this.state.lastName}
                                onChangeText={(value) => {this.setState({lastName:value})}}
                                placeholder={'Last Name'}/>
                            <Input value={this.state.dob}
                                onChangeText={(value) => {this.setState({dob:value})}}
                                placeholder={'Date Of Birth'}/>
                            <Input value={this.state.email}
                                onChangeText={(value) => {this.setState({email:value})}}
                                placeholder={'Email'}/>
                            <Input value={this.state.phoneNumber}
                                onChangeText={(value) => {this.setState({phoneNumber:value})}}
                                placeholder={'Cell No'}/>
                            <Input value={this.state.gender}
                                onChangeText={(value) => {this.setState({gender:value})}}
                                placeholder={'Gender'}/>
                            <Input value={this.state.refferedBy}
                                onChangeText={(value) => {this.setState({refferedBy:value})}}
                                placeholder={'Referred By'}/>
                        </View>
                        : null
                        }
                        {
                            this.state.selectedOption === "2" 
                            ? <View style={{flex:1,}}>
                                <Input value={this.state.contact}
                                    onChangeText={(value) => {this.setState({contact:value})}}
                                    placeholder={'Cell phone'} />
                                <Input value={''}
                                    onChangeText={(value) => {}}
                                    placeholder={'Homephone'}/>
                                <Input value={''}
                                    onChangeText={(value) => {}}
                                    placeholder={'Kin Number'}/>

                                <TouchableOpacity style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Update
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            : null
                        }
                        {
                            this.state.selectedOption === "3" 
                            ? <View style={{flex:1,}}>
                                <Input value={this.state.address}
                                    onChangeText={(value) => {this.setState({address:value})}}
                                    placeholder={'Address'} />
                                <Input value={this.state.city}
                                    onChangeText={(value) => {this.setState({city:value})}}
                                    placeholder={'City'}/>
                                <Input value={this.state.state}
                                    onChangeText={(value) => {this.setState({state:value})}}
                                    placeholder={'State'}/>
                                <Input value={this.state.zip}
                                    onChangeText={(value) => {this.setState({zip:value})}}
                                    placeholder={'Zip'}/>

                                <TouchableOpacity style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Update
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            : null
                        }
                        {
                            this.state.selectedOption === "4" 
                            ? <View style={{flex:1,}}>
                                <View style={styles.documentContainer}>
                                    <View style={styles.document}>
                                        <FontAwesome5 
                                            size={40}
                                            color={Colors.primary2}
                                            name={'file-invoice'}
                                        />
                                    </View>
                                    <View style={[styles.document,{
                                        marginLeft:30
                                    }]}>
                                        <FontAwesome5 
                                            size={40}
                                            color={Colors.primary2}
                                            name={'file-invoice'}
                                        />
                                    </View>
                                </View>
                                <Text style={styles.link}>{'*linked to websites*'}</Text>
                                <TouchableOpacity 
                                onPress={() => {
                                    this.props.navigation.navigate('UploadDocuments')
                                }}
                                style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Upload Docs
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            : null
                        }
                </ScrollView>
                <ProfileBottomOptions
                    selectedOption={this.state.selectedOption}
                    onSelectOption={(selectedOption) => {
                        this.setState({selectedOption})
                    }}
                />
               
            </View>
        )
    }
}
const mapStateToProps = state => {
	return {
		user: state.user
	}
}
export default connect( mapStateToProps,null)(Profile);