import { combineReducers } from "redux";
import { reducer, cartreducer } from "./reducer";

const rootreducer = combineReducers({
  reducer,
  cartreducer,
});

export default rootreducer;
