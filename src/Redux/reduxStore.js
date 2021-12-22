import { combineReducers, createStore } from "redux";
import categoryReducer from "./Reducers/categoryReducer";

const reducers = combineReducers({ content: categoryReducer })

const store = createStore(reducers)

export default store