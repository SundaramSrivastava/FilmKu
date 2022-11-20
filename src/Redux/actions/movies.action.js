import { SET_TRENDING_MOVIES } from "./constants"

export const SetTrendingMovies = (movies) => {
    return {
        type: SET_TRENDING_MOVIES,
        payload: movies
    }
}