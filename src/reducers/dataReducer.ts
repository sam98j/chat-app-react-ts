import { DataActionsTypes } from "../interfaces/actionsTypes/auth";
import { AuthState, DataState } from "../interfaces/store";
// inital state
const initState: DataState = {
    todos: []
};
// auth reducer
const dataReducer = (state = initState, action: {type: string, payload: any}): DataState => {
    switch(action.type){
        case DataActionsTypes.FETCH_DATA:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state
    }
}
// export
export default dataReducer