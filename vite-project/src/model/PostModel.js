export class PostModel {
    constructor({imageUrl, modelUrl, title, user, postId, uploadTime})
    {
        this.imageUrl = imageUrl ?? "";
        this.modelUrl = modelUrl ?? null;
        this.title = title ?? "제목이 존재하지 않습니다.";
        this.user = user ?? "유저가 존재하지 않습니다.";
        this.postId = postId ?? null;

        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; 
        const day = now.getDate();
        this.uploadTime = uploadTime ?? year + "-" + month + "-" + day;
    }l
}

export const datas = [
    {
        imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
        modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
        title: "한국어 조아",
        user:"adsf",
        postId:0,
        uploadTime: "asdfsadf-asdff"
},
{
    imageUrl:"https://i.pinimg.com/564x/ad/a2/f5/ada2f596ecdbe72f079ee1e6cd30bd00.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},
{
    imageUrl:"https://i.pinimg.com/564x/47/82/9d/47829dcd56f85a7c63a985a25ec89f11.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},
{
    imageUrl:"https://i.pinimg.com/474x/a4/d8/47/a4d847c88f5f02ab34d0768b60cae2e0.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},
{
    imageUrl:"https://i.pinimg.com/474x/22/91/59/2291594acd064b61c99ef1038a78f4ed.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},
{
    imageUrl:"https://i.pinimg.com/474x/d7/8b/c7/d78bc797197012cf6dd6b90ab039dd1a.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},
{
    imageUrl:"https://i.pinimg.com/474x/ab/67/38/ab6738db103c8d90e96f5b0383d310ca.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},
{
    imageUrl:"https://i.pinimg.com/474x/43/e2/d0/43e2d072cb46f66129cb67127c46ad52.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},
{
    imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},
{
    imageUrl:"https://i.pinimg.com/474x/c9/ce/16/c9ce163cb5cc319b4e7be1ae031aeda2.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},
{
    imageUrl:"https://i.pinimg.com/474x/40/d0/5c/40d05c089bc5b09d4fc6c6cc07396ff0.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},{
    imageUrl:"https://i.pinimg.com/474x/9f/ed/b2/9fedb207ef997499772dd197fb5e1f91.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},{
    imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
    title: "한국어 조아",
    user:"adsf",
    postId:0,
    uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
{
imageUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
modelUrl:"https://i.pinimg.com/474x/76/34/55/7634550e3a215d2da8dc659b174b2689.jpg",
title: "한국어 조아",
user:"adsf",
postId:0,
uploadTime: "asdfsadf-asdff"
},
    
];