import { json } from 'react-router-dom';
import { PostModel, datas } from '../model';
import axiosInstance from './instance';
import axios from 'axios';

async function getPostListApi(userId) {
    const response = await axiosInstance.get('/');
    return await response.data;
}


export {getPostListApi};