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

class Splash extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <Image style={styles.logo}source={image.ImagePath.logo}/>

                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Login')}
                style={[styles.btn,{marginTop:30,}]}>
                    <Text style={styles.btnText}>Existing Client</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Get a Free Qoute</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Contact Us</Text>
                </TouchableOpacity>

                <View style={styles.bottomTabContainer}>
                    <View style={styles.optionRow}>
                        <TouchableOpacity style={styles.optionBtn}>
                            <Image style={styles.optionImage}
                                source={image.ImagePath.home}
                            />
                            <View style={styles.optionLabel}>
                                <Text style={styles.labelText}>HOME</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionBtn}>
                            <Image style={styles.optionImage}
                                source={image.ImagePath.tlc}
                            />
                            <View style={styles.optionLabel}>
                                <Text style={styles.labelText}>TLC</Text>

                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.optionRow,{marginTop:20}]}>
                        <TouchableOpacity style={styles.optionBtn}>
                            <Image style={styles.optionImage}
                                source={image.ImagePath.auto}
                            />
                            <View style={styles.optionLabel}>
                                <Text style={styles.labelText}>AUTO</Text>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionBtn}>
                            <Image style={styles.optionImage}
                                source={image.ImagePath.business}
                            />
                            <View style={styles.optionLabel}>
                                <Text style={styles.labelText}>BUSINESS</Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bgCircle}/>


            </View>
        )
    }
}

export default Splash