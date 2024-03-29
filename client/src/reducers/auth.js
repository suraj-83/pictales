import { AUTH, LOGOUT } from '../constants/auth.js'

export default (state = { authData: null }, action) => {
    switch(action.type) {
        case AUTH:
            console.log(action?.data)
            return state
        
        case LOGOUT:
            return state
        
        default:
            return state
    }
}