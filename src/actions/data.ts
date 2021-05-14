import {DataActionsTypes} from '../interfaces/actionsTypes/auth'
export default class DataActions {
    // gettodos
    getTodos(){
        return async (dispatch: Function) => {
            try {
                const reqPending = await fetch("https://jsonplaceholder.typicode.com/todos");
                if(reqPending.status === 200) {
                    const todos = await reqPending.json();
                    dispatch({type: DataActionsTypes.FETCH_DATA, payload: todos})
                }
            } catch(error){
                console.log(error)
            }
        }
    }
}