import {
  createUserAuthToken,
  getAllWebinars,
  getUserInfo,
  verifyUserAuthToken,
} from 'mocks/db';
import { rest } from 'msw';
import * as yup from 'yup';

export const authMeHandler = rest.post('/auth/me', (req, res, ctx) => {
  try {
    const bearerAuthToken = req.headers.get('Authorization');

    const user = verifyUserAuthToken(bearerAuthToken);

    if (!Boolean(user)) throw Error('token error');

    return res(
      ctx.status(200),
      ctx.json({
        user,
      })
    );
  } catch (e) {
    return res(
      ctx.status(401),
      ctx.json({
        message: e.message,
      })
    );
  }
});

const loginSchema = yup.object().shape({
  email: yup.string().email().required('email error'),
  password: yup.string().min(4).required('password  error'),
});

export const authLoginHandler = rest.post(
  '/auth/email/login',
  (req, res, ctx) => {
    try {
      const { email, password } = req.body;

      loginSchema.validateSync({ email, password });

      const user = getUserInfo(email);

      if (!Boolean(user)) throw Error('user not found');

      if (user.password !== password) throw Error('password  error');

      const token = createUserAuthToken(user);

      return res(
        ctx.status(200),
        ctx.json({
          user,
          token,
        })
      );
    } catch (e) {
      return res(
        ctx.status(401),
        ctx.json({
          message: e.message,
        })
      );
    }
  }
);

export const postHandler = rest.get('/posts', (req, res, ctx) => {
  try {
    // const bearerAuthToken = req.headers.get('Authorization');

    // if (!Boolean(bearerAuthToken)) throw Error('token empty');

    // const user = verifyUserAuthToken(bearerAuthToken);

    // if (!Boolean(user)) throw Error('token error');

    const data = getAllWebinars();

    return res(
      ctx.status(200),
      ctx.json({
        meta:{
          pagination:{
            current_page: 1, 
            total_pages : 1
          }
        },
        data,
      })
    );
  } catch (e) {
    return res(
      ctx.status(401),
      ctx.json({
        message: e.message,
      })
    );
  }
});
