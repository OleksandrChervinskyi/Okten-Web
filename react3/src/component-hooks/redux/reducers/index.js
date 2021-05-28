import { combineReducers } from "redux";
import dataFromJSON from './saveData';
import counter1 from './counter1'

export const reducer = combineReducers({
    lot1 : dataFromJSON,
    counter : counter1,
})