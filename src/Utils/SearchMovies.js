import APP_CONSTANTS from "../../APP_CONSTANTS"
import APP_SECRETS from "../../APP_SECRETS"


export default function SearchMovies(query, page) {
    return new Promise((resolve, reject) => {
        fetch(`${APP_CONSTANTS.IMDB_URL}/search/movie?api_key=${APP_SECRETS.API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`)
            .then(data => data.json())
            .then(data => {
                if (data.page) {
                    return resolve(data.results)
                } else {
                    return reject(data.error)
                }
            })
            .catch(err => reject(err))
    })
}