import api from "./api";

export const getAllMovies = () => {
    return api.get('/movies');
}

export const getAllAvailableMovies = () => {
    return api.get('/movies/available');
}

export const getAllAvailableSeats = () => {
    return api.get('/seating');
}

export const bookMultipleSeat = (seatIds) => {
    return api.post('/seating//book-multiple-seats', seatIds);
}

