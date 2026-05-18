import { http, HttpResponse } from "msw";
import posts from "./dummyPost.json";
import { checkingUser } from "../util/LoginUtil/checkingUser";

export const handlers = [
  http.get("/postlist", () => {
    return HttpResponse.json(JSON.stringify(posts));
  }),

  http.get("/contribute/:postId", ({params}) => {
    console.log(params);
    return HttpResponse.json(JSON.stringify(posts));
  }),
  http.get("/contribute_list/:userId", ({params}) => {
    console.log(params);
    return HttpResponse.json(JSON.stringify(posts));
  }),

  http.post("/api/posts/:postId/like", async ({ request, params }) => {
    const { postId } = params;
    const { value, value2 } = await request.json();

    return new HttpResponse(null, { status: 200 });
  }),
  
  http.post('/api/login', async ({ request }) => {
    const { id, pw } = await request.json();
    const storedUsers = JSON.parse(localStorage.getItem("storedUserData")) || [];
    const foundUser = storedUsers.find(user => user.id === id);

    if (foundUser && foundUser.pw === pw) {
      return HttpResponse.json({
        message: "Login Success",
        token: "mock-jwt-token-abcd1234"
      }, { status: 200 });
    } else {
      return HttpResponse.json({
        message: "Invalid ID or Password"
      }, { status: 400 });
    }
  }),
  http.post("/download", async ({request}) => {
    const {post_id, user_id} = await request.json();
    console.log({post_id, user_id});
    return new HttpResponse(null, {status: 200});
  }),
  http.post('/upload', async ({request}) => {
    console.log(request.formData());
    console.log("msw mocking upload api success!");
    return new HttpResponse(null, {status: 200});
  }),
];
