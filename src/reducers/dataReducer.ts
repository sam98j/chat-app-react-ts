import { DataActionsTypes } from "../interfaces/actionsTypes/data";
import { DataState } from "../interfaces/store";
// inital state
const initState: DataState = {
    pChatData: {
        avatar: null,
        messages: [],
        username: "",
        recId: ""
    }
};
// auth reducer
const dataReducer = (state = initState, action: {type: string, payload: any}): DataState => {
    switch(action.type){
        case DataActionsTypes.pChatData:
            return {
                ...state,
                pChatData: action.payload
            }
        default:
            return state
    }
}
// export
export default dataReducer