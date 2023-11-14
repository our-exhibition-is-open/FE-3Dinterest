import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://123.123.123/',
    timeout: 1000,
});