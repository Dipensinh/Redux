import { legacy_createStore } from "redux";
import rootReducers from "./Reducer/index";


const Store = legacy_createStore(rootReducers)

export default Store