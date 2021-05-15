
// a part of state that returned from auth Reducer
export interface AuthState {
    user: any
}
// a part of state that returned from data Reducer
export interface DataState {
    todos: []
}
// the whole app state
export interface AppState {
    auth: AuthState,
    data: DataState,
    users: UsersState
}
// users State
export type UsersState = []