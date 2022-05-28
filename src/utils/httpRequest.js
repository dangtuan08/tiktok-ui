import axios from 'axios';
// console.log(process.env);
export const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (url, params) => {
    const result = await request.get(url, params);
    return result.data;
};
