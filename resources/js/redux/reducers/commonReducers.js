const Common = (state = {}, action) => {
    switch (action.type) {
        case constant.SET_HEADER:
            return Object.assign({}, state, action.error)
        default:
            return state
    }

}

export default Common;