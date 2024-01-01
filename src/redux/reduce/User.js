import { LOGIN, LOGOUT, SIGNUP } from "../ActionTypes";



let initialstate = {
    UserData:{},
    isLogin:false,
}

export const user = (state = initialstate,{type,payload}) => {
    switch(type) {
        case SIGNUP:
            return{
                ...state,
                userdata: payload,
                islogin: true
            }
            case LOGIN:
                return{
                    ...state,
                    userdata: payload,
                    islogin: true
                }
            case LOGOUT:
                return{
                    ...state,
                    userData: {},
                    islogin: false,
                };    

                default:
                    return state ;
    }

}