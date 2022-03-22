import { Response } from 'miragejs';
import {
  createUserAuthToken,
  getAllWebinars,
  getUserInfo,
  getWebinar,
  removeFavouritesById,
  subscribeWebinar,
  verifyUserAuthToken,
  createUser,
} from 'mocks/controllers';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email().required('email error'),
  password: yup.string().min(4).required('password  error'),
});

const signupSchema = yup.object().shape({
  name: yup.string().min(4).required('name  error'),
  email: yup.string().email().required('email error'),
  password: yup.string().min(4).required('password  error'),
});

const getRoutes = function () {
  this.namespace = '/webinar-test';

  this.post('/auth/me', (schema, req) => {
    try {
      const bearerAuthToken = req.requestHeaders['Authorization'];

      const userDBItem = verifyUserAuthToken(schema, bearerAuthToken);

      if (!Boolean(userDBItem)) throw Error('token error');

      const user = userDBItem.attrs;

      return {
        user,
      };
    } catch (e) {
      return new Response(401, { error: e.message }, e.message);
    }
  });

  this.post('/auth/email/login', (schema, req) => {
    try {
      const { email, password } = JSON.parse(req.requestBody);

      loginSchema.validateSync({ email, password });

      const userDBItem = getUserInfo(schema, email);

      if (!Boolean(userDBItem)) throw Error('user not found');

      const user = userDBItem.attrs;

      if (user.password !== password) throw Error('password  error');

      const token = createUserAuthToken(user);

      return {
        token,
        user,
      };
    } catch (e) {
      return new Response(401, { error: e.message }, e.message);
    }
  });

  this.post('/auth/signup', (schema, req) => {
    try {
      const { name, password, email } = JSON.parse(req.requestBody);

      signupSchema.validateSync({ name, email, password });

      const user = getUserInfo(email);

      if (Boolean(user)) throw Error('user is exist');

      const newUser = createUser(schema, name, email, password);

      if (!Boolean(newUser)) throw Error('create user is fail');

      return {
        user: newUser.attrs,
      };
    } catch (e) {
      return new Response(401, { error: e.message }, e.message);
    }
  });

  this.post('/auth/logout', (schema, req) => {
    try {
      const bearerAuthToken = req.requestHeaders['Authorization'];

      const user = verifyUserAuthToken(schema, bearerAuthToken);

      if (!Boolean(user)) throw Error('token error');

      return {};
    } catch (e) {
      return new Response(401, { error: e.message }, e.message);
    }
  });

  this.get('/posts', (schema, req) => {
    try {
      const bearerAuthToken = req.requestHeaders['Authorization'];

      const page = Number(req.queryParams['page']);
      const perPage = Number(req.queryParams['per_page']);

      const user = verifyUserAuthToken(schema, bearerAuthToken);

      const { total_pages, list } = getAllWebinars(schema, user, page, perPage);

      return {
        meta: {
          pagination: {
            current_page: page,
            total_pages,
          },
        },
        data: list,
      };
    } catch (e) {
      return new Response(401, { error: e.message }, e.message);
    }
  });

  this.get('/posts/:id', (schema, req) => {
    try {
      const id = req.params['id'];

      const data = getWebinar(schema, id);

      if (!Boolean(data)) throw Error('data not found');

      return {
        data,
      };
    } catch (e) {
      return new Response(401, { error: e.message }, e.message);
    }
  });

  this.del('/favourites/post/:id', (schema, req) => {
    try {
      const bearerAuthToken = req.requestHeaders['Authorization'];
      const user = verifyUserAuthToken(schema, bearerAuthToken);

      if (!Boolean(user)) throw Error('user not found');
      
      const id = req.params['id'];
      removeFavouritesById(schema, user.id, id);

      return {};
    } catch (e) {
      return new Response(401, { error: e.message }, e.message);
    }
  });

  this.post('/favourites', (schema, req) => {
    try {
      const bearerAuthToken = req.requestHeaders['Authorization'];

      const user = verifyUserAuthToken(schema, bearerAuthToken);

      if (!Boolean(user)) throw Error('user not found');

      const { ids } = JSON.parse(req.requestBody);

      if (ids.length === 0) throw Error('no favourite item');

      const data = subscribeWebinar(schema, user.id, ids[0]);

      if (!Boolean(data)) throw Error('data not found');

      return {
        data,
      };
    } catch (e) {
      return new Response(401, { error: e.message }, e.message);
    }
  });
};

export default getRoutes;
