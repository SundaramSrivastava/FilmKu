import { LOGOUT, SET_USER }
    from '../actions/constants';


const initialState = {
    email: '',
    loggedIn: false
}

export const User = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                email: action.payload,
                loggedIn: true
            }
        }
            break;
        case LOGOUT: {
            return {
                ...state,
                email: '',
                loggedIn: false
            }
        }
            break;
        default: {
            return {
                ...state
            }
        }
    }
}