import { combineReducers } from "redux";
import rentalsReducer from "./rentalsReducer";
import carsReducer from "./carsReducer";

const reducers = combineReducers({
  rentalStore: rentalsReducer,
  carStore: carsReducer
});

export default reducers;
