import { USER_LOGIN } from './types'
import axios from 'axios'
const initState = {
    user: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            //login
            // axios.post('/api/v1/login',{username:action.username,password:action.password})
            state.user = action.user;
            console.log(action.user);
            console.log(state);
            return state;
        default:
            return state;
    }
}