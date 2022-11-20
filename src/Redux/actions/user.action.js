import { LOGOUT, SET_USER } from "./constants"

export const SetUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const Logout = () => {
    return {
        type: LOGOUT
    }
}