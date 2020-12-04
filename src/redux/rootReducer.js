import { combineReducers } from "redux";
import weatherReducer from "./weather/weatherReducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
