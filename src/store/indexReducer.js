import {combineReducers} from "redux";
import userReducer from './reducers/user/userReducer'
import booksReducer from "./reducers/books/booksReducer";

const reducers=() =>combineReducers(
    {
        users:userReducer,
        books:booksReducer,
    }
)

export default reducers