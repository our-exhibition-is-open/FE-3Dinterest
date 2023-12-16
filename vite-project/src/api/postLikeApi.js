import axiosInstance from "./instance";

async function getLikeApi(postId, userId, isLiked) {
  const response = await axiosInstance.get(
    `/api/posts/${postId}/like`,
    {params: {userId: userId}} //isLiked : true ? -> ++1
  );
  console.log(response.data);
  return await response.data;
}

export { getLikeApi };
