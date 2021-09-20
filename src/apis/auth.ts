import { UserCredentials } from '../interfaces/apis/auth';
import {AuthActionsTypes} from '../constants/auth'
export default class AuthActions {
    // gettodos
    login(credentioals: UserCredentials){
        return async (dispatch: Function) => {
            const reqConfig: RequestInit = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentioals)
            }
            try {
                const reqPending = await fetch("http://localhost:5000/auth/login", reqConfig);
                if(reqPending.status === 200) {
                    const res = await reqPending.json();
                    dispatch({type: AuthActionsTypes.LOGIN, payload: res})
                }
            } catch(error){
                console.log(error)
            }
        }
    }
    // check User
    checkUser = () => async (dispatch: Function) => {
        const reqConfig: RequestInit = {
            method: "GET",
            headers: {
                authorization: localStorage.getItem('token')!
            }
        };

        // establish connection
        try {
            const reqPending = await fetch('http://localhost:5000/auth/check_user', reqConfig);
            // check for the req status
            if(reqPending.status === 200) {
                const res = await reqPending.json();
                dispatch({type: AuthActionsTypes.CHECK_USER, payload: res})
                return
            }
            dispatch({type: AuthActionsTypes.CHECK_USER, payload: undefined})
        } catch(err) {
            console.log(err)
        }
    }
    // logout
    logout(){
        return (dispatch: Function) => {
            dispatch({type: AuthActionsTypes.LogOut})
        }
    }
}
