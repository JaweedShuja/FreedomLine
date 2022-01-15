import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
    Modal
} from 'react-native'
import styles from './style'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'
import Circle from '../../components/Circle'
import TopBar from '../../components/TopBar/TopBarBackHome'
import Input from './input'
import { connect } from 'react-redux';
import ProfileCard from '../../components/ProfileCard'
import * as api from '../../networking/api'
import * as request from '../../networking/request'
import * as payload from '../../networking/payload'
import EditProfileModal from './EditProfileModal'

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
            
            modalVisibleUpdate:false
        }
        this.setModalVisibleUpdate = this.setModalVisibleUpdate.bind(this)
    }
    setModalVisibleUpdate(){
        this.setState({ 
            modalVisibleUpdate:!this.state.modalVisibleUpdate
        })
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
                <Modal
                    visible={this.state.modalVisibleUpdate}
                    onRequestClose={this.setModalVisibleUpdate}
                    animationType='fade'
                    transparent
                >
                    <EditProfileModal 
                        contact={this.state.contact}
                        email={this.state.email}
                        modalVisible={this.setModalVisibleUpdate}
                    />

                </Modal>
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
                    phoneNumber={this.state.phoneNumber}
                />
                <ScrollView>
                    <Input value={this.state.email}
                        onChangeText={(value) => {this.setState({email:value})}}
                        placeholder={'Email'}/>
                    <Input value={this.state.contact}
                        onChangeText={(value) => {this.setState({contact:value})}}
                        placeholder={'Cell phone'} />
                    <Input value={''}
                        onChangeText={(value) => {}}
                        placeholder={'Homephone'}/>
                    <Input value={''}
                        onChangeText={(value) => {}}
                        placeholder={'Kin Number'}/>
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
                    <TouchableOpacity 
                    onPress={this.setModalVisibleUpdate}
                    style={styles.updateButton}>
                        <Text style={styles.updateButtonText}>
                            Update
                        </Text>
                    </TouchableOpacity>
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
export default connect( mapStateToProps,null)(Profile);