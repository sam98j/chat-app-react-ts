import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk'
import { AppState } from "./interfaces/store";

const store = createStore<AppState, any, any, any>(rootReducer, applyMiddleware(thunk));

export default store