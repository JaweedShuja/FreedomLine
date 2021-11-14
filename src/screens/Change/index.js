import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView
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

import ProfileCard from '../../components/ProfileCard'
import ProfileBottomOptions from '../../components/ProfileBottomOptions'
import { Fonts } from '../../utils/Fonts'
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedOption:"1",
            type:this.props.route.params.type
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
                    onHomeClick={() => { console.log('home')}}
                />
                <Circle/>                

                <ProfileCard />
                <ScrollView>
                    
                        {
                            this.state.type === "Address" 
                        ? <View style={{flex:1}}>
                            <Input placeholder={'New Address'} />
                            <Input placeholder={'Street Address'}/>
                            <Input placeholder={'City'}/>
                            <Input placeholder={'Zip'}/>
                            <Input placeholder={'State'}/>
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

export default Profile