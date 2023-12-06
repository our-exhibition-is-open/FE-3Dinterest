import axiosInstance from "./instance";

async function getContributeListApi(postId) {
  const response = await axiosInstance.get(`/contribute/${postId}`);
  console.log(response.data)
  return await response.data;
}

export { getContributeListApi };
