import axiosInstance from "./instance";

async function getLoginApi(userId, password) {
  const response = await axiosInstance.post(`/login`, null, {
    params: { userId: userId, password: password }, //isLiked : true ? -> ++1
  });
  console.log(response);
  return await response;
}

export { getLoginApi };
