import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk'
import { AppState } from "./interfaces/store";
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore<AppState, any, any, any>(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store