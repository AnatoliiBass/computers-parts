import { combineReducers, createStore } from "redux";
import brandsReducer from "./Reducers/brandsReducer";
import categoryReducer from "./Reducers/categoryReducer";
import productsReducer from "./Reducers/productsReducer";
import usersReducer from "./Reducers/usersReducer";

const reducers = combineReducers({
   categories: categoryReducer,
   brands: brandsReducer,
   products: productsReducer,
   users: usersReducer
})


const store = createStore(reducers)


export default store