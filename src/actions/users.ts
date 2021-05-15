import { UsersActionsTypes } from '../interfaces/actionsTypes/users';
export default class UsersActions {
    // gettodos
    getAllUsers(){
        return async (dispatch: Function) => {
            try {
                const reqPending = await fetch("http://localhost:5000/users/all_users");
                if(reqPending.status === 200) {
                    const users = await reqPending.json();
                    dispatch({type: UsersActionsTypes.GET_ALL_USERS, payload: users})
                }
            } catch(error){
                console.log(error)
            }
        }
    }
}