import axios from 'axios';

export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

// dùng async await
export const get = async (path, option) => {
    const response = await httpRequest.get(path, option);
    return response.data;
};

// dùng promise.then().catch()
export const get2 = (path, option) => {
    return httpRequest
        .get(path, option)
        .then((res) => {
            return res.data;
            // console.log(res);
        })
        .catch((err) => console.log(err));
};
