import { PchatDataRes } from '../interfaces/actionsCreators/data';
import {DataActionsTypes} from '../interfaces/actionsTypes/data'
export default class DataActions {
    // gettodos
    getPchatData(recUserId: string){
        return async (dispatch: Function) => {
            // req config
            const reqConfig: RequestInit = {
                method: "POST",
                headers: {
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
                    dispatch({type: DataActionsTypes.pChatData, payload: {
                        recId: "",
                        avatar: "",
                        messages: [],
                        username: "",
                    } as PchatDataRes })
                }
            } catch(error){
                console.log(error)
            }
        }
    }
}