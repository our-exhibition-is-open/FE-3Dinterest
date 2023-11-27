import axiosInstance from './instance';

async function getPostListApi(userId) {
    const response = await axiosInstance.get('/');
    console.log("good")
    return await response.data;
}


export {getPostListApi};