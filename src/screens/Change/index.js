import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from 'react-native'
import styles from './style'
import StatusBar from '../../components/StatusBar'
import { Colors } from '../../utils/Colors'
import {commonStyles} from '../../utils/commonStyles'
import Circle from '../../components/Circle'
import TopBar from '../../components/TopBar/TopBarBackHome'
import Helper from '../../utils/Helper'
import Input from './input'
import ProfileCard from '../../components/ProfileCard'
import { Fonts } from '../../utils/Fonts'
import { connect } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo'
import DocumentPicker from 'react-native-document-picker';


class Chanage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedOption:"1",
            type:this.props.route.params.type,
            policyId:this.props.route.params.policyId,
            policyNumber:this.props.route.params.policyNumber,
            isLoading:false,
            //change of address
            address:'',
            city:'',
            zip:'',
            state:'',
            documents: [],
            usermessage:"",

            selectedMethod: '1',
        }
    }
    selectFile = async () => {
        try {
          const res = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.allFiles],
          });
          console.log('res : ' + JSON.stringify(res));
          this.setState({
            documents:[...this.state.documents,...res]
          })
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
          } else {
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
          }
        }
      };
    uploadDocuments = async (documenttype, usermessage) => {
        var today = new Date();
        var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
        // Check if any file is selected or not
        if (this.state.documents.length != 0) {
            this.setState({
                isLoading:true
            })
            const fileToUpload = this.state.documents
            const data = new FormData();
            data.append('city', this.state.city);
            data.append('clientid', this.props.user.id);
            data.append('clientpolicyid', this.state.policyId);

            
            if(this.state.selectedMethod == '1'){
                //method 1
                data.append('documents',JSON.stringify(fileToUpload))
            }
            else if(this.state.selectedMethod == '2'){
                //method 2
                for(let i = 0; i < fileToUpload.length; i++){
                    data.append('documents[]',{
                        uri: fileToUpload[i].uri,
                        name: fileToUpload[i].name,
                        type: fileToUpload[i].type,
                    })
                }
            }
            else if(this.state.selectedMethod == '3'){
                //method 3
                for(let i = 0; i < fileToUpload.length; i++){
                    data.append('documents',{
                        uri: fileToUpload[i].uri,
                        name: fileToUpload[i].name,
                        type: fileToUpload[i].type,
                    })
                }
            }            
            
            data.append('documenttype', documenttype);
            data.append('effectivedate', date);
            data.append('newaddress', this.state.address);
            data.append('policynumber', this.state.policyNumber);
            data.append('requestdate', date);
            data.append('state', this.state.state);
            data.append('streetaddress', '');
            data.append('usermessage', usermessage);
            data.append('zip', this.state.zip);

            console.log(JSON.stringify(data))
            
            let res = await fetch(
                'http://47.21.85.156:7777/api/Endorsement/AddEndorsement',
                {
                    method: 'POST',
                    body: data,
                }
            );
            console.log(JSON.stringify(res))            
            this.setState({
                isLoading:false,
                // documents:[]
            })
            Helper.showToast('Change Request Has Been Sent')   
            console.log('selected method' + this.state.selectedMethod)
        } else {
            Helper.showToast('Please Select File first')
        }
    };
    render(){
        return(
            <View style={styles.container}>
                <StatusBar 
                    barStyle={commonStyles.statusBarStyleDark}
                    backgroundColor={Colors.statusBarBackgroundColor_White}
                />
                <TopBar 
                    title={this.state.type == 'Other' ? `Other Endorsement` : `Change of ${this.state.type}`}
                    onBackClick={() => { this.props.navigation.goBack() }}
                    onHomeClick={() => { this.props.navigation.navigate('Dashboard')}}
                />
                <Circle/>                

                <ProfileCard 
                    name={this.props.user.name}
                    noPhone
                />
                <Text style={{
                    fontFamily:Fonts.semiBold,
                    color:'black',
                    alignSelf:'center',
                    marginVertical:10,
                    fontSize:16
                }}>{`Policy No : ${this.state.policyNumber}`}</Text>
                <ScrollView contentContainerStyle={{paddingBottom:50}}>
                    
                        {
                            this.state.type === "Address" 
                        ? <View style={{flex:1}}>
                             <View style={{
                                    width:'90%',
                                    borderBottomWidth:1,
                                    alignSelf:'center',
                                    marginBottom:10,
                                }}>
                                    <Text style={{
                                        fontFamily:Fonts.regular,
                                        fontSize:16,
                                        marginTop:10,
                                        marginBottom:20,
                                        color:'black'
                                    }}>{'Selected files are'}</Text>
                                    {
                                        this.state.documents.map((_item,index) => {
                                            return <View style={{
                                                flexDirection:'row',
                                                alignItems:'center',
                                                marginBottom:5,
                                                // justifyContent:'center'
                                            }}>
                                                <TouchableOpacity 
                                                    onPress={() => {
                                                        this.setState({
                                                            documents:this.state.documents.filter((el,i) => {
                                                                return index != i
                                                            })
                                                        })
                                                    }}
                                                    style={{
                                                        height:30,
                                                        width:30,
                                                        borderRadius:15,
                                                        borderColor:'black',
                                                        alignItems:'center',
                                                        justifyContent:'center'
                                                    }}>
                                                    <Entypo name="cross" size={20} color="black" />

                                                </TouchableOpacity>

                                                <Text key={index.toString()}style={{
                                                fontFamily:Fonts.regular,
                                                marginLeft:10,
                                                marginVertical:5,
                                                color:'black',
                                                marginLeft:5,
                                            }}>{_item.name}</Text>
                                                </View>
                                        })

                                    }
                                </View>
                            <Input value={this.state.address}
                                onChangeText={(value) => this.setState({address:value})}
                                placeholder={'New Address'} />
                            <Input value={this.state.city}
                                onChangeText={(value) => this.setState({city:value})}
                                placeholder={'City'}/>
                            <Input value={this.state.state}
                                onChangeText={(value) => this.setState({state:value})}
                                placeholder={'State'}/>
                            <Input value={this.state.zip}
                                onChangeText={(value) => this.setState({zip:value})}
                                placeholder={'Zip'}/>
                            
                            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                <TouchableOpacity onPress={() => { this.selectFile() }}
                                    style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Attach files
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                disabled={this.state.isLoading}
                                onPress={() => this.uploadDocuments(
                                    'address',
                                    '',
                                )}
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
                                <View style={{
                                    width:'90%',
                                    borderBottomWidth:1,
                                    alignSelf:'center'
                                }}>
                                    <Text style={{
                                        fontFamily:Fonts.regular,
                                        fontSize:16,
                                        marginTop:10,
                                        marginBottom:20,
                                        color:'black'
                                    }}>{'Selected files are'}</Text>
                                    {/* {
                                        this.state.documents.map((_item,index) => {
                                            return <Text key={index.toString()}style={{
                                                fontFamily:Fonts.regular,
                                                marginLeft:10,
                                                marginVertical:5,
                                                color:'black'
                                            }}>{_item.name}</Text>
                                        })

                                    } */}
                                     {
                                        this.state.documents.map((_item,index) => {
                                            return <View style={{
                                                flexDirection:'row',
                                                alignItems:'center',
                                                marginBottom:5,
                                                // justifyContent:'center'
                                            }}>
                                                <TouchableOpacity 
                                                    onPress={() => {
                                                        this.setState({
                                                            documents:this.state.documents.filter((el,i) => {
                                                                return index != i
                                                            })
                                                        })
                                                    }}
                                                    style={{
                                                        height:30,
                                                        width:30,
                                                        borderRadius:15,
                                                        borderColor:'black',
                                                        alignItems:'center',
                                                        justifyContent:'center'
                                                    }}>
                                                    <Entypo name="cross" size={20} color="black" />

                                                </TouchableOpacity>

                                                <Text key={index.toString()}style={{
                                                fontFamily:Fonts.regular,
                                                marginLeft:10,
                                                marginVertical:5,
                                                color:'black',
                                                marginLeft:5,
                                            }}>{_item.name}</Text>
                                                </View>
                                        })

                                    }
                                </View>

                                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                <TouchableOpacity 
                                onPress={() => {
                                    this.selectFile()
                                }}
                                style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Attach files
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={() => this.uploadDocuments(
                                    'driver',
                                    '',
                                )}
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
                            this.state.type === "Vehicle" 
                            ? <View style={{flex:1,}}>
                                <View style={{
                                    width:'90%',
                                    borderBottomWidth:1,
                                    alignSelf:'center'
                                }}>
                                    <Text style={{
                                        fontFamily:Fonts.regular,
                                        fontSize:16,
                                        marginTop:10,
                                        marginBottom:20,
                                        color:'black'
                                    }}>{'Selected files are'}</Text>
                                    {/* {
                                        this.state.documents.map((_item,index) => {
                                            return <Text key={index.toString()}style={{
                                                fontFamily:Fonts.regular,
                                                marginLeft:10,
                                                marginVertical:5,
                                                color:'black'
                                            }}>{_item.name}</Text>
                                        })

                                    } */}
                                     {
                                        this.state.documents.map((_item,index) => {
                                            return <View style={{
                                                flexDirection:'row',
                                                alignItems:'center',
                                                marginBottom:5,
                                                // justifyContent:'center'
                                            }}>
                                                <TouchableOpacity 
                                                    onPress={() => {
                                                        this.setState({
                                                            documents:this.state.documents.filter((el,i) => {
                                                                return index != i
                                                            })
                                                        })
                                                    }}
                                                    style={{
                                                        height:30,
                                                        width:30,
                                                        borderRadius:15,
                                                        borderColor:'black',
                                                        alignItems:'center',
                                                        justifyContent:'center'
                                                    }}>
                                                    <Entypo name="cross" size={20} color="black" />

                                                </TouchableOpacity>

                                                <Text key={index.toString()}style={{
                                                fontFamily:Fonts.regular,
                                                marginLeft:10,
                                                marginVertical:5,
                                                color:'black',
                                                marginLeft:5,
                                            }}>{_item.name}</Text>
                                                </View>
                                        })

                                    }
                                </View>

                                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                <TouchableOpacity 
                                onPress={() => {
                                    this.selectFile()
                                }}
                                style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Attach files
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={() => this.uploadDocuments(
                                    'vehicle',
                                    '',
                                )}
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
                            this.state.type === "Other" 
                            ? <View style={{flex:1,}}>
                                <Text style={{
                                    fontFamily:Fonts.semiBold,
                                    color:Colors.primary2,
                                    marginHorizontal:20,
                                    marginTop:10,
                                }}>
                                    Please let us know, what kind of change you want to do in the policy.
                                </Text>
                                    <Input 
                                        value={this.state.usermessage}
                                        onChangeText={(value) => this.setState({usermessage:value})}
                                        placeholder={'Type message here:'}/>

                                    
                                    <View style={{
                                    width:'90%',
                                    borderBottomWidth:1,
                                    alignSelf:'center'
                                }}>
                                    <Text style={{
                                        fontFamily:Fonts.regular,
                                        fontSize:16,
                                        marginTop:10,
                                        marginBottom:20,
                                        color:'black'
                                    }}>{'Selected files are'}</Text>
                                    {/* {
                                        this.state.documents.map((_item,index) => {
                                            return <Text key={index.toString()}style={{
                                                fontFamily:Fonts.regular,
                                                marginLeft:10,
                                                marginVertical:5,
                                                color:'black'
                                            }}>{_item.name}</Text>
                                        })

                                    } */}
                                     {
                                        this.state.documents.map((_item,index) => {
                                            return <View style={{
                                                flexDirection:'row',
                                                alignItems:'center',
                                                marginBottom:5,
                                                // justifyContent:'center'
                                            }}>
                                                <TouchableOpacity 
                                                    onPress={() => {
                                                        this.setState({
                                                            documents:this.state.documents.filter((el,i) => {
                                                                return index != i
                                                            })
                                                        })
                                                    }}
                                                    style={{
                                                        height:30,
                                                        width:30,
                                                        borderRadius:15,
                                                        borderColor:'black',
                                                        alignItems:'center',
                                                        justifyContent:'center'
                                                    }}>
                                                    <Entypo name="cross" size={20} color="black" />

                                                </TouchableOpacity>

                                                <Text key={index.toString()}style={{
                                                fontFamily:Fonts.regular,
                                                marginLeft:10,
                                                marginVertical:5,
                                                color:'black',
                                                marginLeft:5,
                                            }}>{_item.name}</Text>
                                                </View>
                                        })

                                    }
                                </View>

                                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                                <TouchableOpacity 
                                    onPress={() => {
                                        this.selectFile()
                                    }}
                                style={styles.updateButton}>
                                    <Text style={styles.updateButtonText}>
                                        Attach files
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={() => this.uploadDocuments(
                                    'other',
                                    this.state.usermessage,
                                )}
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


                        <View style={{
                            marginTop:10,
                            marginLeft:20,
                        }}>
                            <TouchableOpacity 
                            onPress={() => {
                                this.setState({
                                    selectedMethod:'1'
                                })
                            }}
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                marginBottom:10
                            }}>
                                <View style={{
                                    height:30,
                                    width:30,
                                    borderWidth:1,
                                    borderColor:Colors.primary2,
                                    borderRadius:15,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    {
                                        this.state.selectedMethod == '1' && <View 
                                            style={{
                                                height:20,
                                                width:20,
                                                borderRadius:10,
                                                backgroundColor:Colors.primary2
                                            }}
                                        />
                                    }

                                </View>

                                <Text style={{
                                    marginLeft:10,
                                }}>Method 1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            onPress={() => {
                                this.setState({
                                    selectedMethod:'2'
                                })
                            }}
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                marginBottom:10
                            }}>
                                <View style={{
                                    height:30,
                                    width:30,
                                    borderWidth:1,
                                    borderColor:Colors.primary2,
                                    borderRadius:15,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    {
                                        this.state.selectedMethod == '2' && <View 
                                            style={{
                                                height:20,
                                                width:20,
                                                borderRadius:10,
                                                backgroundColor:Colors.primary2
                                            }}
                                        />
                                    }

                                </View>

                                <Text style={{
                                    marginLeft:10,
                                }}>Method 2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            onPress={() => {
                                this.setState({
                                    selectedMethod:'3'
                                })
                            }}
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                marginBottom:10
                            }}>
                                <View style={{
                                    height:30,
                                    width:30,
                                    borderWidth:1,
                                    borderColor:Colors.primary2,
                                    borderRadius:15,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                    {
                                        this.state.selectedMethod == '3' && <View 
                                            style={{
                                                height:20,
                                                width:20,
                                                borderRadius:10,
                                                backgroundColor:Colors.primary2
                                            }}
                                        />
                                    }

                                </View>

                                <Text style={{
                                    marginLeft:10,
                                }}>Method 3</Text>
                            </TouchableOpacity>

                            
                        </View>
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