import {combineReducers} from 'redux'
import counterOne from './counter-reducer-one'
import counterTwo from './counter-reducer-two'
import random from './mathRandom'

export const reducer = combineReducers({
    counter1 : counterOne,
    counter2 : counterTwo,
    randomNumber : random,
})