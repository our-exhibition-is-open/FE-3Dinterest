import axiosInstance from "./instance";

async function getContributeListApi(userId) {
  const response = await axiosInstance.get(`/contribute_list/${userId}`);
  console.log(response.data)
  return await response.data;
}

export { getContributeListApi };
