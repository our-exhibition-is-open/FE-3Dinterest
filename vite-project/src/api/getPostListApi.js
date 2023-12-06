import axiosInstance from './instance';

async function getPostListApi(userId) {
    const response = await axiosInstance.get('/postlist');
    
    return await response;
}


export {getPostListApi};