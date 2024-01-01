import { LOGIN, LOGOUT, SIGNUP } from "./ActionTypes"

export const signup = (data) => {
    return{
        type:SIGNUP,
        payload:data
    };
};
export const login = (data) => {
    return{
        type:LOGIN,
        payload:data
    };
};
export const logout = (data) => {
    return{
        type:LOGOUT,
    };
};