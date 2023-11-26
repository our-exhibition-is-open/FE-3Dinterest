import { http, HttpResponse } from "msw";
import posts from "./dummyPost.json";

export const handlers = [
  http.get("/", () => {
    return HttpResponse.json(posts);
  }),

  http.get("/contribute", () => {
    return HttpResponse.json(posts);
  }),
  
  http.post("/api/posts/:postId/like", ({params}) => {
    console.log("msw : " + params.postId);
    return HttpResponse(null, {status: 200})
  })
];
