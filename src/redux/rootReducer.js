import {combineReducers} from "redux"
import reducer from "./Todo/todoReducer"
const rootReducer = combineReducers({
    todoState:reducer
})
export default rootReducer