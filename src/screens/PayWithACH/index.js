import React from 'react'
import {
    View,
    Text
} from 'react-native'
import StatusBar from '../../components/StatusBar'
import styles from './style'
import TopBar from '../../components/TopBar/TopBarBackHome'

class PayWithACH extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            total_amount: this.props.route.params.total_amount
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar 
                    backgroundColor="#fff"
                    barStyle="dark-content"
                />
                <TopBar 
                    title={'Pay With ACH'}
                    onBackClick={() => this.props.navigation.goBack()}
                    onHomeClick={() => this.props.navigation.navigate('Dashboard')}
                />
                <View style={styles.topContainer}>
                    <Text style={styles.totalText}>
                        Total
                    </Text>
                    <Text style={styles.totalText}>
                        {this.state.total_amount}
                    </Text>
                </View>
            </View>
        )
    }
}

export default PayWithACH