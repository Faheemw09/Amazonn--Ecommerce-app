

import thunk from "redux-thunk"
import {combineReducers,legacy_createStore,applyMiddleware} from "redux"
import AdminReducer from "./AdminReducer"
import { reducer as cartReducer } from "./cartreducer/reducers"

const root_reducer=combineReducers({
    AdminReducer,
    cartReducer

})
export const store=legacy_createStore( root_reducer ,applyMiddleware(thunk))

