import { combineReducers } from "redux";
import dataFromJSON from './saveData'

export const reducer = combineReducers({
    lot1 : dataFromJSON,
})