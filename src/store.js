import rootReducer from "./reducers/index.js";
import {createStore} from "redux";

const store = createStore(
    rootReducer
)


export default store;