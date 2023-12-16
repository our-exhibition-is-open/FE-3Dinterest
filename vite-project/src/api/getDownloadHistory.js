import axiosInstance from "./instance";

export async function getDownloadHistoryApi(userId) {
  const response = await axiosInstance.get(`/contribute_list`, {params: {user_id: userId}});
  console.log(response.data)
  return await response;
}
