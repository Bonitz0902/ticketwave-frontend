import api from "./api";


export const getAllLocation = () => {
    return api.get(`/locations`)
}

export const getAllCinemasByLocationAndMovie = (locationId, movieId) => {
    return api.get(`/cinemas/locations/${locationId}/movies/${movieId}`)
}

export const getAllCinema = () => {
    return api.get('/cinemas');
}

export const getMovieSchedule = () => {
    return api.get('/movie-schedules');
}