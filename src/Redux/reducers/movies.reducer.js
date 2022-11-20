import { SET_TRENDING_MOVIES }
    from '../actions/constants';


const initialState = {
    movies: []
}

export const Movies = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRENDING_MOVIES: {
            return {
                ...state,
                movies: action.payload
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}