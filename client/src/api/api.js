import axios from 'axios';

const BASE_URL = 'https://hackathon-drug-it.onrender.com/api/v1/drugs';

export default axios.create({
    baseURL: BASE_URL,
});
