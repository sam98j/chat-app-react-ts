import { UserCredentials } from '../interfaces/actionsCreators/auth';
import {AuthActionsTypes} from '../interfaces/actionsTypes/auth'
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
            const res = await reqPending.json();
            dispatch({type: AuthActionsTypes.CHECK_USER, payload: res})
        } catch(err) {
            console.log(err)
        }
    }
}