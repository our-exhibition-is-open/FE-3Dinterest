import axiosInstance from "./instance";

async function postUploadApi(file, image, title, userId, uploadTime) {
  const formData = new FormData();
  const metaData = new Object();
  metaData.user_id = userId;
  metaData.title = title;
  metaData.uploadTime = uploadTime;
  metaData.tagA = false;
  metaData.tagB = false;
  metaData.tagC = false;
  metaData.tagD = false;

  formData.append("image", image);
  formData.append("model", file);
  formData.append(
    "requestUploadDto",
    new Blob([JSON.stringify(metaData)], {
      type: "application/json",
    })
  );

  for (let key of formData.keys()) {
	console.log(key, ":", formData.get(key));
}
  const response = await axiosInstance.post(`/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
  return await response;
}

export { postUploadApi };

