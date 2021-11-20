import { ADD_USER } from "./userType";

const initialState = {
    token:'',
    name:'',
    email:'',
    id:'',
    isLogin:false
}

const UserReducar = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER : 
            return {
                ...action.payload
            }
        default : 
            return state
    }
}

export default UserReducar