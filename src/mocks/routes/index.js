import {
  createUserAuthToken,
  getAllWebinars,
  getUserInfo,
  getWebinar,
  removeFavouritesById,
  subscribeWebinar,
  verifyUserAuthToken,
} from 'mocks/controllers';
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

export const authLogoutHandler = rest.post('/auth/logout', (req, res, ctx) => {
  try {
    const bearerAuthToken = req.headers.get('Authorization');

    const user = verifyUserAuthToken(bearerAuthToken);

    if (!Boolean(user)) throw Error('token error');

    return res(
      ctx.status(200),
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

export const getPostsHandler = rest.get('/posts', (req, res, ctx) => {
  try {
    const bearerAuthToken = req.headers.get('Authorization');

    const page = Number(req.url.searchParams.get('page'));
    const perPage = Number(req.url.searchParams.get('per_page'));

    const user = verifyUserAuthToken(bearerAuthToken);

    const { total_pages, list } = getAllWebinars(user, page, perPage);

    return res(
      ctx.status(200),
      ctx.json({
        meta: {
          pagination: {
            current_page: page,
            total_pages,
          },
        },
        data: list,
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

export const getPostHandler = rest.get('/posts/:id', (req, res, ctx) => {
  try {
    const id = req.params['id'];

    const data = getWebinar(id);

    if(!Boolean(data)) throw Error('data not found');

    return res(
      ctx.status(200),
      ctx.json({
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


export const deleteFavouriteHandler = rest.delete('/favourites/post/:id', (req, res, ctx) => {
  try {
    const bearerAuthToken = req.headers.get('Authorization');
    const user = verifyUserAuthToken(bearerAuthToken);

    if (!Boolean(user)) throw Error('user not found');

    const id = req.params['id'];
    const data = removeFavouritesById(user.id , id);

    if(!Boolean(data)) throw Error('data not found');

    return res(
      ctx.status(200),
      ctx.json({
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


export const settingFavouritesHandler = rest.post('/favourites', (req, res, ctx) => {
  try {
    const bearerAuthToken = req.headers.get('Authorization');

    const user = verifyUserAuthToken(bearerAuthToken);

    if (!Boolean(user)) throw Error('user not found');

    const {ids} = req.body;

    if(ids.length === 0) throw Error('no favourite item');

    const data = subscribeWebinar(user.id , ids[0]);

    if(!Boolean(data)) throw Error('data not found');
    
    return res(
      ctx.status(200),
      ctx.json({
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
