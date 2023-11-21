export class UserModel {
    constructor({id, modelUrl, title, user, postId, uploadTime})
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
    }
}
