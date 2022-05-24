import * as searchApi from '~/utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await searchApi.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
