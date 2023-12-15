import axiosInstance from "./instance";

export async function getDownloadHistoryApi(userId) {
  const response = await axiosInstance.get(`/contribute_list/${userId}`);
  console.log(response.data)
  return await response.data;
}
