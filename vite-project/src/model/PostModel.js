import { fileNameParser } from "../util/uploadUtil/fileNameParser";

export class PostModel {
  constructor({postId, userId, title, uploadDate, imageUrl, modelUrl}) {
    this.postId = postId;
    this.userId = userId;
    this.title = title;
    this.uploadDate = uploadDate;
    this.imageUrl = `https://s3.ap-northeast-2.amazonaws.com/open-source-development-project/${imageUrl}`
    this.modelUrl = `https://s3.ap-northeast-2.amazonaws.com/open-source-development-project/${modelUrl}`
    this.type = fileNameParser(modelUrl);
  }
}
//title, userID, postId, imageUrl, modelUrl => 생성시 바로 만들기 