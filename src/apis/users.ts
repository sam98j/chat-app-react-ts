import { UsersActionsTypes } from '../constants/users';
export default class UsersActions {
    // gettodos
    getAllUsers(_id: string){
        return async (dispatch: Function) => {
            try {
                const reqPending = await fetch(`http://localhost:5000/users/all_users/?user_id=${_id}`);
                if(reqPending.status === 200) {
                    const users = await reqPending.json();
                    dispatch({type: UsersActionsTypes.GET_ALL_USERS, payload: users})
                }
            } catch(error){
                console.log(error)
            }
        }
    }
    // user online 
    setUserOnline(data: {_id: string, online: boolean}) {
        console.log(data)
        return (dispatch: Function) => {
            dispatch({type: UsersActionsTypes.SetUserOnline, payload: data})
        }
    }
}