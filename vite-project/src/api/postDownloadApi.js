import axiosInstance from "./instance";

export async function postDownloadApi(userId, postId) {
  console.log(userId);
  const response = await axiosInstance.post(`/download`, {
    post_id: userId,
    user_id: postId,
  },{
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.status;
}

