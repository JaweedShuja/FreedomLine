import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native'
import styles from './style'
import * as image from '../../utils/imagePath'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'
import Circle from '../../components/Circle'
import TopBar from '../../components/TopBar/TopBarPaymentLogout'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

class Dashboard extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <TopBar 
                    title={'Dashboard'}
                    onCardClick={() => { console.log('card') }}
                    onLogoutClick={() => { console.log('logout')}}
                />

                <View style={styles.topCard}>
                    <Text style={styles.dueAmount}>Due Amount</Text>
                    <Text style={styles.amountText}>{'$428.0'}</Text>
                    <View style={styles.cardOptionRow}>
                        <View style={styles.cardOption}>
                            <Text style={styles.optionTitle}>{'Active Policies'}</Text>
                            <Text style={styles.optionDes}>{2}</Text>
                        </View>
                        <View style={styles.cardOption}>
                            <Text style={styles.optionTitle}>{'Pending Cancellation'}</Text>
                            <Text style={styles.optionDes}>{0}</Text>
                        </View>
                        <View style={styles.cardOption}>
                            <Text style={styles.optionTitle}>{'Cancelled Policies'}</Text>
                            <Text style={styles.optionDes}>{0}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.optionsRow}>
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('Policies')
                    }}
                    style={styles.option}>
                        <MaterialIcons 
                            size={30}
                            color={Colors.primary2}
                            name={'policy'}
                        />
                        <Text style={styles.optionText}>Policies</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('Invoices')
                    }}
                    style={styles.option}>
                        <FontAwesome5 
                            size={30}
                            color={Colors.primary2}
                            name={'file-invoice'}
                        />
                        <Text style={styles.optionText}>Invoices</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('Payments')
                    }}
                    style={styles.option}>
                        <MaterialIcons 
                            size={30}
                            color={Colors.primary2}
                            name={'payments'}
                        />
                        <Text style={styles.optionText}>Payments</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.optionsRow}>
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('Profile')
                    }}
                    style={styles.option}>
                        <FontAwesome5 
                            size={30}
                            color={Colors.primary2}
                            name={'user-alt'}
                        />
                        <Text style={styles.optionText}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('Endorsements')
                    }}
                    style={styles.option}>
                        <AntDesign 
                            size={30}
                            color={Colors.primary2}
                            name={'like1'}
                        />
                        <Text style={styles.optionText}>Endorsements</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {
                        this.props.navigation.navigate('Notifications')
                    }}
                    style={styles.option}>
                        <Ionicons 
                            size={30}
                            color={Colors.primary2}
                            name={'notifications'}
                        />
                        <Text style={styles.optionText}>Notifications</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.bottomButton}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={[styles.btnText,{
                            color:Colors.primary1
                        }]}>Get a free qoute</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btn,{
                        backgroundColor:"#DE791E"
                    }]}>
                        <Text style={[styles.btnText,{
                            color:Colors.white
                        }]}>Contact Us</Text>
                    </TouchableOpacity>
                </View>

                <Circle/>                
            </View>
        )
    }
}

export default Dashboard