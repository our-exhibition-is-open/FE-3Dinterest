import axios from 'axios';

export async function getModelFileApi(url) {
    
    const response = await axios.get(url, {
        responseType: 'blob'  // 응답 타입을 blob으로 설정
    }).catch((e) => {
        console.error("getModelFile axios error : ",e)
    })
    return await response;
}


