import axiosInstance from "./instance";

export async function postContributeApi(parentId) {
  const response = await axiosInstance.post(`/contribute_record`, {
    parent_id: parentId,
  },{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  return await response.status;
}

