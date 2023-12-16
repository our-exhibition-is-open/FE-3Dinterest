export class UploadModel {
  constructor(title, userId) {
    this.title = title;
    this.user_id = userId;
    this.tagA = false;
    this.tagB = false;
    this.tagC = false;
    this.tagD = false;
  }
}
//title, userID, postId, imageUrl, modelUrl => 생성시 바로 만들기 