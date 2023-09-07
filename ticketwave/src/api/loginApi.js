import api from "./api";

export const addAccount = (account) => {
    return api.post('/account/create', account);
}

export const getAccount = (account) => {
    return api.post('/account/login', account);
}