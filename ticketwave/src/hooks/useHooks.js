import * as dashboardApi from "../api/dashboardApi";
import * as loginApi from "../api/loginApi";
import { useDispatch } from 'react-redux';
import { resetMovie } from '../components/movieSlice';
import { resetLogin } from '../components/loginSlice';

export const useApis = () => {
    const dispatch = useDispatch(); //dont remove to reuse 

    async function loadAllMovies() {
        const response = await dashboardApi.getAllMovies();
        dispatch(resetMovie(response.data));
    };

    async function createAccount (name, email, password) {
        const response = await loginApi.addAccount
            ({  
                accountName: name, 
                accountEmail: email, 
                accountPassword: password
            });
        dispatch(resetLogin(response.data));
    };

    return {
        loadAllMovies,
        createAccount,
    };
}