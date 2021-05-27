const initialState = {
    dataFromJSON: [],
    inputsValue : ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDTOSTORE':
            return {
                ...state,
                dataFromJSON: [action.payload]
            }

        case 'SAVEINPUTSVALEU':
            return {
                ...state,
                inputsValue: [action.payload]
            }

        default:
            return state
    }
}

export default reducer