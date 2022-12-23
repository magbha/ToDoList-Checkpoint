import { createStore } from "redux";
import rootReducer from "../Reducer/indexReducer";

const store = createStore (rootReducer)

export default store;