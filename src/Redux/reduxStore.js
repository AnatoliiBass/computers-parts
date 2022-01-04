import { combineReducers, createStore } from "redux";
import categoryReducer from "./Reducers/categoryReducer";
import usersReducer from "./Reducers/usersReducer";

const reducers = combineReducers({
   categories: categoryReducer,
   users: usersReducer
})


const store = createStore(reducers)


export default store