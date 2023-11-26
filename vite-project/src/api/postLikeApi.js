import axiosInstance from "./instance";

async function postLikeApi(postId, userId) {
  const response = await axiosInstance.post(`/api/posts/${postId}/like`, null, {
    params: { value: userId },
  });
  // console.log(response.data)
  return await response.data;
}

export { postLikeApi };
