import { http, HttpResponse } from "msw";
import posts from "./dummyPost.json";
import { checkingUser } from "../util/LoginUtil/checkingUser";

export const handlers = [
  http.get("/", () => {
    return HttpResponse.json(posts);
  }),

  http.get("/contribute", () => {
    return HttpResponse.json(posts);
  }),

  http.post("/api/posts/:postId/like", async ({ request, params }) => {
    const { postId } = params;
    const { value, value2 } = await request.json();

    return new HttpResponse(null, { status: 200 });
  }),
  http.post("/api/login", async ({ request }) => {
    const requestBody = await request.json();
    console.log(requestBody);
    if (checkingUser(requestBody.id, requestBody.pw))
      return new HttpResponse(null, { status: 200 });
    else {
      console.log("testestset");
      return new HttpResponse(null, { status: 400 });
    }
  }),
];
