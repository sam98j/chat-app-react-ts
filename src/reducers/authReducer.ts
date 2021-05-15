import { AuthActionsTypes } from "../interfaces/actionsTypes/auth";
import { AuthState } from "../interfaces/store";
// inital state
const initState: AuthState = {
    user: null
};
// auth reducer
const authReducer = (state = initState, action: {type: string, payload: any}): AuthState => {
    switch(action.type){
        case AuthActionsTypes.LOGIN:
            localStorage.setItem('token', `Bearar ${action.payload.token!}`)
            return {
                ...state,
                user: action.payload.username!
            }
        case AuthActionsTypes.CHECK_USER:
            return {
                ...state,
                user: action.payload.username!
            }
        default:
            return state
    }
}
// export
export default authReducer