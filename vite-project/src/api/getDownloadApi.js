import axiosInstance from "./instance";

export async function getDownloadApi(userId, postId) {
  console.log(userId);
  const response = await axiosInstance.get(`/download`,{params: {user_id: userId, post_id: postId}});
  return await response.status;
}

