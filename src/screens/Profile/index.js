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
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedOption:"1",
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
                    title={'Profile'}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />
                <Circle/>                

                <ProfileCard />
                <ScrollView>
                    
                        {
                            this.state.selectedOption === "1" 
                        ? <View style={{flex:1}}>
                            <Input placeholder={'First Name'} />
                            <Input placeholder={'Middle Name'}/>
                            <Input placeholder={'Last Name'}/>
                            <Input placeholder={'Date Of Birth'}/>
                            <Input placeholder={'Email'}/>
                            <Input placeholder={'Cell No'}/>
                            <Input placeholder={'Gender'}/>
                            <Input placeholder={'Referred By'}/>
                        </View>
                        : null
                        }
                        {
                            this.state.selectedOption === "2" 
                            ? <View style={{flex:1,}}>
                                <Input placeholder={'Cell phone'} />
                                <Input placeholder={'Homephone'}/>
                                <Input placeholder={'Kin Number'}/>

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
                                <Input placeholder={'Address'} />
                                <Input placeholder={'City'}/>
                                <Input placeholder={'Kin Number'}/>
                                <Input placeholder={'Zip'}/>

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

export default Profile