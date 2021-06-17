import { UserCredentials } from "../apis/auth";
// login component state
export interface LoginState {
    isLoading: boolean;
    credentials: UserCredentials
}