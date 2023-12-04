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

  http.post("/api/posts/:postId/like", ({ params }) => {
    console.log("msw : " + params.postId);
    return new HttpResponse(null, { status: 200 });
  }),
  http.post("/login", ({ params }) => {
    console.log("msw : " + params.userId + "pw : " + params.password);
    const enteredId = params.userId;
    const enteredPw = params.password;
    if (checkingUser(enteredId, enteredPw))
      return new HttpResponse(null, { status: 200 });
    else return new HttpResponse(null, { status: 400 });
  }),
];
