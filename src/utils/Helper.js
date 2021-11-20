// import Toast from 'react-native-simple-toast';

// export default class Helper{
//     static async showToast(msg) {
//         Toast.show(msg);
//     }
// }
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keys} from './Keys' 

const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {}
};

const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {}
};

export default class Helper{
    static async showToast(msg) {
        Toast.show(msg);
    }

    static saveUser(user) {
        storeData(Keys.USER_DATA, user);
    }
    static async getUser() {
        let user = await getData(Keys.USER_DATA);
        return user;
    }

    static saveToken(token) {
        storeData(Keys.ACCESS_TOKEN, token);
    }
    static async getToken() {
        let token = await getData(Keys.ACCESS_TOKEN);
        return token;
    }

    static async setIsLogined(bool) {
        storeData(Keys.IS_LOGINED, bool);
    }
    static async isLogined() {
        let isLogined = await getData(Keys.IS_LOGINED);
        return isLogined;
    }
    static parseDateTime(datetime){
        var months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]
        var arr = datetime.split(' ')
        return arr[0].split('-')[2] + " " +months[parseInt(arr[0].split('-')[1])] + ", " + arr[0].split('-')[0] + " " + arr[1]
    }
    
}