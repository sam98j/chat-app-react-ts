import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";
import usersReducer from "./users";

const rootReducer = combineReducers({
    auth: authReducer,
    data: dataReducer,
    users: usersReducer
})

export default rootReducer