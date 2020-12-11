import { combineReducers } from "redux";
import { reducer as counterzReducer } from "../components/counterz/reducer";
import { reducer as todozReducer } from "../components/todoz/reducer";

export const reducer = combineReducers({
  todoz: todozReducer,
  counterz: counterzReducer,
});
