const timer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_TIMER':
            return {...state, time: action.time};
        default:
            return state
    }
}

export default timer;