import { PostModel, datas } from '../model';
import {instance} from './instance';


function getPostListApi(userId) {
    // const jsonList = await instance.get('/getpostlist');
    // const dataList = JSON.parse(jsonList);
    const dataList = datas;
    const postList = dataList.map(data => new PostModel(data));

    return postList;
}

export {getPostListApi};