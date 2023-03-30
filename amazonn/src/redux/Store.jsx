

import thunk from "redux-thunk"
import {combineReducers,legacy_createStore,applyMiddleware} from "redux"
import AdminReducer from "./AdminReducer"

const root_reducer=combineReducers({
    AdminReducer

})
export const store=legacy_createStore( root_reducer ,applyMiddleware(thunk))

