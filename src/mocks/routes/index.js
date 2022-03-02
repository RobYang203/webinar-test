import { rest } from "msw";

export const authMeHandler = rest.get('/auth/me' , (req, res, ctx)=>{
    return res(
      ctx.status(401),
      ctx.json({
        error: 'test error'
      })
    )
})

export const authLoginHandler = rest.post('/auth/email/login' , (req, res, ctx)=>{
console.log("🚀 ~ file: handlers.js ~ line 13 ~ authLoginHandler ~ req", req)
  return res(
    ctx.status(401),
    ctx.json({
      ...req.body
    })
  )
})


