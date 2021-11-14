import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'

class CameraModal extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Text style={[styles.detailsText,{
                        fontFamily:Fonts.bold,
                        fontSize:16,
                        marginLeft:10,
                    }]}>
                        {`Take Picture`}
                    </Text>
                    <View style={styles.bottomButtonContainer}>
                        <TouchableOpacity 
                        onPress={() => {
                            this.props.modalVisible()
                        }}
                        style={styles.bottomButton}>
                            <Text style={styles.bottomText}>{'Camera'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => {
                            this.props.modalVisible()
                        }}
                        style={styles.bottomButton}>
                            <Text style={styles.bottomText}>{'Gallery'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default CameraModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modalView:{
        width:"90%",
        backgroundColor:Colors.primary2,
        borderRadius:10,
        ...commonStyles.shadow,
        padding:10,  
    },
    detailsText:{
        color:'white'
    },
    bottomButtonContainer:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-around',
        marginTop:30
    },
    bottomButton:{
        height:35,
        width:140,
        borderRadius:5,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    bottomText:{
        fontFamily:Fonts.bold,
        fontSize:12,
    }
})