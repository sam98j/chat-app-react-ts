import { AuthActionsTypes } from "../constants/auth";
import { AuthState } from "../interfaces/store";
// inital state
const initState: AuthState = {
    user: null
};
// auth reducer
const authReducer = (state = initState, action: {type: string, payload: any}): AuthState => {
    const {CHECK_USER, LOGIN, LogOut} = AuthActionsTypes;
    switch(action.type){
        case LOGIN:
            localStorage.setItem('token', `Bearar ${action.payload.token!}`)
            return {
                ...state,
                user: action.payload.user
            }
        case CHECK_USER:
            return {
                ...state,
                user: action.payload
            }
        case LogOut:
            localStorage.clear()
            return {
                user: undefined
            }
        default:
            return state
    }
}
// export
export default authReducer