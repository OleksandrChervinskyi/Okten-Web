import {
    INC,
    INC_CUSTOM,
    DEC,
    RESET,
    INC_TWO,
    INC_CUSTOM_TWO,
    DEC_TWO,
    RESET_TWO,
    DELETE,
    GENNEWRANDOM

} from '../action-types'

const incOne = () => ({ type: INC });
const incCustomOne = (payload) => ({ type: INC_CUSTOM, payload });
const decOne = () => ({ type: DEC });
const resetOne = () => ({ type: RESET });

const incTwo = () => ({ type: INC_TWO });
const incCustomTwo = (payload) => ({ type: INC_CUSTOM_TWO, payload });
const decTwo = () => ({ type: DEC_TWO });
const resetTwo = () => ({ type: RESET_TWO });

const createRandom = () => ({ type: GENNEWRANDOM })
const deleteRandom = () => ({ type: DELETE })



export {
    incOne,
    incCustomOne,
    decOne,
    resetOne,
    incTwo,
    incCustomTwo,
    decTwo,
    resetTwo,
    createRandom,
    deleteRandom,
}