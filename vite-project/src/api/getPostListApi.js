import axiosInstance from './instance';

async function getPostListApi() {
    const response = await axiosInstance.get('/postlist');
    
    return await response.data;
}


export {getPostListApi};