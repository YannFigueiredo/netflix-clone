import axios from 'axios';

const apiMidias = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default apiMidias;