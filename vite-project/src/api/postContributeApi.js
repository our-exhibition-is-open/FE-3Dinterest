import axiosInstance from "./instance";

export async function postContributeApi(postId, parentId) {
  const response = await axiosInstance.post(`/contribute_record`, {
    post_id: postId,
    parent_id: parentId,
  },{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  return await response.status;
}

