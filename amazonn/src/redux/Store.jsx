
import thunk from "redux-thunk"
import {combineReducers,legacy_createStore,applyMiddleware} from "redux"
import AdminReducer from "./AdminReducer"
import { reducer as cartReducer } from "./cartreducer/reducers"
import CartItemsAdded from "../redux/Search/CartReducer"
import ItemsAdded from "../redux/Search/ListReducer"
import OrderAdded from "../redux/Search/OrderReducer"
const root_reducer=combineReducers({
    AdminReducer,
    cartReducer,
    CartItemsAdded,
    ItemsAdded,
    OrderAdded
})
export const store=legacy_createStore( root_reducer ,applyMiddleware(thunk))

