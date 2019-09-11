import {USER_LOGIN} from './types'

export const userLogin = (username,password) =>{
    type:USER_LOGIN,
    username,password
}