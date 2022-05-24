import axios from 'axios';

export const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// dùng async await
export const get = async (path, option) => {
    const response = await request.get(path, option);
    return response.data;
};

// dùng promise.then().catch()
export const get2 = (path, option) => {
    return request
        .get(path, option)
        .then((res) => {
            return res.data;
            // console.log(res);
        })
        .catch((err) => console.log(err));
};
