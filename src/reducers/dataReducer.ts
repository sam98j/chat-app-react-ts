import { DataActionsTypes } from "../constants/data";
import { DataState } from "../interfaces/store";
// inital state
const initState: DataState = {
    pChatData: {
        messages: [],
        chattingWith: {
            _id: null,
            username: null,
            avatar: null
        }
    },
};
// auth reducer
const dataReducer = (state = initState, action: {type: string, payload: any}): DataState => {
    const {pChatData, setUserChatingWith, AddNewMessage, addMessageToLocalMessages} = DataActionsTypes;
    switch(action.type){
        case pChatData:
            return {
                ...state,
                pChatData: action.payload
            }
        case setUserChatingWith:
            return {
                ...state,
                pChatData: {
                    ...state.pChatData,
                    chattingWith: {...action.payload}
                }
            }
        case AddNewMessage:
            return {
                ...state,
                pChatData: {
                    ...state.pChatData,
                    messages: [...state.pChatData.messages, action.payload]
                }
            }
        case addMessageToLocalMessages:
            return {
                ...state,
                pChatData: {
                    ...state.pChatData,
                    messages: [...state.pChatData.messages, action.payload]
                }
            }
        default:
            return state
    }
}
// export
export default dataReducer