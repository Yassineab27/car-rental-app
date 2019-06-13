import { combineReducers } from "redux";
import rentalsReducer from "./rentalsReducer";

const reducers = combineReducers({
  rentalStore: rentalsReducer
});

export default reducers;
