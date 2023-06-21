import { createStore } from "redux";
import { counterReducer } from "./Reducers/reducer";

export const store = createStore(counterReducer) ;