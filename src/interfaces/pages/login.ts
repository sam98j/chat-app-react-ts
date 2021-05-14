import { UserCredentials } from "../actionsCreators/auth";
// login component state
export interface LoginState {
    isLoading: boolean;
    credentials: UserCredentials
}