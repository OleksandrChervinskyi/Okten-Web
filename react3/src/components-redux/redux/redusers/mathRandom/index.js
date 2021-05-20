import { DELETE, GENNEWRANDOM } from '../../action-types'

const initialState = {
    row: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GENNEWRANDOM:
            return {
                ...state,
                row: Math.random(),
            }

        case DELETE:
            return {
                ...state,
                row: 0,
            }

        default:
            return state
    }
}


export default reducer