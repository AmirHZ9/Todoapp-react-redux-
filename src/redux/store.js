import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
