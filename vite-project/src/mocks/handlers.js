import {rest} from "msw";

posts = [

]

export const handlers = [
    rest.get("/", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json())
    }),

    rest.get("/login", (req, res, ctx) => {

    })
]