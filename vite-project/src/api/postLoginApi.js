import axiosInstance from "./instance";

async function postLoginApi(userId, password) {
  console.log(userId);
  console.log(password);
  const response = await axiosInstance.post(`/api/login`, {
    id: userId,
    pw: password,
  },{
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response;
}

export { postLoginApi };
