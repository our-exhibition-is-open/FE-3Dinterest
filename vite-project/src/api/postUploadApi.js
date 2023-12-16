import axiosInstance from "./instance";

export async function postUploadApi(file, image, uploadModel) {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("model", file);

  // const meta = new Object();
  // meta.title = uploadModel.title;
  // meta.userId = uploadModel.userId;
  
  formData.append(
    "requestUploadDto",
    new Blob([JSON.stringify(uploadModel)], {
      type: "application/json",
    })
  );
  console.log(formData.get("requestUploadDto"));
  const response = await axiosInstance.post(`/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
  return await response;
}

