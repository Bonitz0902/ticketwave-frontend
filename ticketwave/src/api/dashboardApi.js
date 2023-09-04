import api from "./api";

export const getAllMovies = () => {
    return api.get('/todos');
}

export const searchMovieByTitle = (movieTitle) => {
    return api.get('/movies', {
        params: {
            movieTitle: movieTitle,
        },
    });
}