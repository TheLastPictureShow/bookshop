import bookReducer from "./bookReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  selectedBook: bookReducer,
});

export default allReducer;
