import axiosInstance from "./instance";

export async function postContributeApi(contribute_data_model) {
  const response = await axiosInstance.post(`/contribute_record`, {
    post_id: contribute_data_model.postId,
    parent_id: contribute_data_model.parentId,
  },{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
  return await response.status;
}

