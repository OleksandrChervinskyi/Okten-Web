import {
    INC,
    DEC,
    RESET,
    ADDTOSTORE,
    SAVEINPUTSVALEU
} from '../action-types'

const incCounter = () => ({ type: INC })
const decCounter = () => ({ type: DEC })
const resetCounter = () => ({ type: RESET })
const addToStore = (payload) => ({ type: ADDTOSTORE, payload })
const saveInputsValue = (payload) => ({ type: SAVEINPUTSVALEU, payload })

export {
    incCounter,
    decCounter,
    resetCounter,
    addToStore,
    saveInputsValue,
}