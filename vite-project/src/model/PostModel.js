import { fileNameParser } from "../util/uploadUtil/fileNameParser";

export class PostModel {
  constructor({image_uuid, like_cnt, model_uuid, postId, tag_a,tag_b,tag_c,tag_d, title, upload_date, user_id}) {
    this.postId = parseInt(postId);
    this.userId = user_id;
    this.title = title;
    this.uploadDate = upload_date;
    this.imageUrl = `https://s3.ap-northeast-2.amazonaws.com/open-source-development-project/${image_uuid}`
    this.modelUrl = `https://s3.ap-northeast-2.amazonaws.com/open-source-development-project/${model_uuid}`
    this.type = fileNameParser(model_uuid);
  }
}
//title, userID, postId, imageUrl, modelUrl => 생성시 바로 만들기 