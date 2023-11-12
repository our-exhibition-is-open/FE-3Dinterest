export class PostModel {
    constructor({imageUrl, modelUrl, title, user, uploadTime})
    {
        this.imageUrl = imageUrl ?? "https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp";
        this.modelUrl = modelUrl ?? null;
        this.title = title ?? "제목이 존재하지 않습니다.";
        this.user = user ?? "유저가 존재하지 않습니다.";

        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1; 
        const day = now.getDate();
        this.uploadTime = uploadTime ?? year + "-" + month + "-" + day;
    }
}

export const datas = [
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "한국어 조아", postId:0},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title:"한국어 좋아", postId:1},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title:"한국어 좋아", postId:3},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title:"한국어 좋아", postId:4},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title:"한국어 좋아", postId:5},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "한국어 좋아", postId:60},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "한국어 좋아", postId:30},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "한국어 좋아", postId:70},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "한국어 좋아", postId:70},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "한국어 좋아", postId:70},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "한국어 좋아", postId:70},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "한국어 좋아", postId:70},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "한국어 좋아", postId:70},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "한국어 좋아", postId:70},
    {imgUrl:"https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/3a38f5cfecc24e27af475294a5a19939~tplv-tej9nj120t-origin.webp", title: "한국어 좋아", postId:70},
];