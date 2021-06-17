import { UsersActionsTypes } from "../constants/users";
import { UsersState } from "../interfaces/store";
// inital state
const initState = [] as UsersState
// auth reducer
const usersReducer = (state = initState, action: {type: string, payload: any}): UsersState => {
    switch(action.type){
        case UsersActionsTypes.GET_ALL_USERS:
            return [...state, ...action.payload.users! as []]
        default:
            return state
    }
}
// export
export default usersReducer