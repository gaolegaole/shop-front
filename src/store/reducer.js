import {CHANGE_USER_INFO} from './types'

const initState = {
    user: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case CHANGE_USER_INFO:
            state.user = action.info;
            return state;
        default:
            return state;
    }
}