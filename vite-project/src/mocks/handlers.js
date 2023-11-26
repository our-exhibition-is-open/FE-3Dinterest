import { http, HttpResponse } from "msw";
import posts from "./dummyPost.json";

export const handlers = [
  http.get("/", () => {
    return HttpResponse.json(posts);
  }),

  http.get("/contribute", () => {
    return HttpResponse.json(posts);
  }),
];
