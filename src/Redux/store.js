import {
   applyMiddleware,
   combineReducers,
   legacy_createStore,
} from "redux";
import { cartReducer } from "./AddToCart/cartReducer";

const rootReducer = combineReducers({
   cart: cartReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
   next(action);
};

export const store = legacy_createStore(
   rootReducer,
   applyMiddleware(loggerMiddleware)
);

