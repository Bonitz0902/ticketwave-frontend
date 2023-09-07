import api from "./api";

export const getAllMovies = () => {
    return api.get('/movies');
}

export const getAllAvailableMovies = () => {
    return api.get('/movies/available');
}
