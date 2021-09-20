import { UsersActionsTypes } from "../constants/users";
import { AuthActionsTypes } from "../constants/auth";
import { UsersState } from "../interfaces/store";
// inital state
const initState = [] as UsersState
// auth reducer
const usersReducer = (state = initState, action: {type: string, payload: any}): UsersState => {
    const {GET_ALL_USERS, SetUserOnline} = UsersActionsTypes;
    // auth actions
    const {LogOut} = AuthActionsTypes;
    switch(action.type){
        case GET_ALL_USERS:
            return [...state, ...action.payload.users! as []];
        case SetUserOnline:
            const users = state.map(user => {
                if(user._id === action.payload._id!) {
                    user.online = action.payload.online!
                    return user
                }
                return user
            })
            return users
        case LogOut:
            return []
        default:
            return state
    }
}
// export
export default usersReducer