import axios from 'axios';

export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (url, params) => {
    const result = await request.get(url, params);
    return result.data;
};
