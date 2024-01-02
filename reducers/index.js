import authReducer from "./loginReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: authReducer,
});

export default allReducers;
