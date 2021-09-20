import { PchatDataRes } from '../interfaces/apis/data';
import {DataActionsTypes} from '../constants/data'
import { Message } from '../interfaces/pages/privateChat';
import { User } from '../interfaces/store';

export default class DataActions {
    // gettodos
    getPchatData(recUserId: string){
        return async (dispatch: Function) => {
            // req config
            const reqConfig: RequestInit = {
                method: "POST",
                headers: {
                    authorization: localStorage.getItem('token')!,
                    "Content-type": "application/json"
                },
                body: JSON.stringify({recUserId})
            }
            try {
                const reqPending = await fetch("http://localhost:5000/data/private_chat_data", reqConfig);
                if(reqPending.status === 200) {
                    const pChatData: PchatDataRes = await reqPending.json();
                    dispatch({type: DataActionsTypes.pChatData, payload: pChatData})
                }
                if(reqPending.status === 400) {
                    dispatch({type: DataActionsTypes.pChatData, payload: {} as PchatDataRes })
                }
            } catch(error){
                console.log(error)
            }
        }
    }
    // user_chating_with
    setUserChatingWith(user_chating_with: User){
        return (dispatch: Function) => {
            dispatch({type: DataActionsTypes.setUserChatingWith, payload: user_chating_with})
        }
    }
    // add new message to the pChat messages
    reciveNewMessage(message: Message){
        return (dispactch: Function) => {
            dispactch({type: DataActionsTypes.AddNewMessage, payload: message})
        }
    }
    // add new message
    sendMessage(message: Message){
        return (dispatch: Function) => {
            dispatch({type: DataActionsTypes.addMessageToLocalMessages, payload: message})
        }
    }
}