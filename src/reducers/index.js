import changeUser from "./first.js";
import changeLogin from "./loginReducer.js";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    changeUser, changeLogin
});

export default rootReducer;
