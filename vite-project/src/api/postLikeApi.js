import axiosInstance from "./instance";

async function postLikeApi(postId, userId, isLiked) {
  const response = await axiosInstance.post(
    `/api/posts/${postId}/like`,
    { value: userId, value2: isLiked } //isLiked : true ? -> ++1
  );
  console.log(response.data);
  return await response.data;
}

export { postLikeApi };
