import axiosInstance from "./instance";

export async function postContributeApi(postId, parentId) {
  const parmas = new URLSearchParams();
  parmas.append("post_id", postId);
  parmas.append("parent_id", parentId);
  const response = await axiosInstance.post(`/contribute_record`, parmas);
  return await response.status;
}

