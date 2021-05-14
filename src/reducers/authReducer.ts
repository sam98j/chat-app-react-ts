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