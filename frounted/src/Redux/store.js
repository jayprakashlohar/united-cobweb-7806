import { productReducer } from "./Product Reducer/ProductReducer";
import thunk from "redux-thunk";
import { reducer, cartreducer } from "./Card Reducer/reducer";
import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";

const rootReducer = combineReducers({
  products: productReducer,
  reducer,
  cartreducer,
});

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// const middleware = [middleware1];
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer);
