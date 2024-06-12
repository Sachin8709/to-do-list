import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import resducers from "./resducers";

export const store = createStore( resducers , {} , applyMiddleware (thunk) );