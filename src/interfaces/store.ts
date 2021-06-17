import { PchatDataRes } from "./apis/data";

// a part of state that returned from auth Reducer
export interface AuthState {
    user: {
        id: string,
        username: string
    } | null
}
// a part of state that returned from data Reducer
export interface DataState {
    pChatData: PchatDataRes,
}
// users State
export type UsersState = User[];
// user interface
export interface User {
    _id: string;
    username: string;
    password?: string
}
// the whole app state
export interface AppState {
    auth: AuthState,
    data: DataState,
    users: UsersState
}