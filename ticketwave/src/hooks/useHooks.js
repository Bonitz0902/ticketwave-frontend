import * as dashboardApi from "../api/dashboardApi";
import * as loginApi from "../api/loginApi";
import { useDispatch } from 'react-redux';
import { resetMovie, resetAllMovie } from '../components/movieSlice';
import { resetLogin, accountLogin } from '../components/loginSlice';

export const useApis = () => {
    const dispatch = useDispatch(); //dont remove to reuse 

    async function loadAllMovies() {
        const response = await dashboardApi.getAllMovies();
        dispatch(resetMovie(response.data));
    };

    async function loadAllAvailableMovies() {
        const response = await dashboardApi.getAllAvailableMovies();
        dispatch(resetAllMovie(response.data));
    };


    async function createAccount(name, email, password) {
        const response = await loginApi.addAccount
            ({
                accountName: name,
                accountEmail: email,
                accountPassword: password
            });
        dispatch(resetLogin(response.data));
    };

    async function loadAccount(email, password) {
        const response = await loginApi.getAccount({ accountEmail: email, accountPassword: password });
        dispatch(accountLogin(response.data));
    };

    return {
        loadAllMovies,
        loadAllAvailableMovies,
        createAccount,
        loadAccount,
    };
}