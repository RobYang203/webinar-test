import jsonwebtoken from 'jsonwebtoken';
import { trim } from 'lodash';

const PRIVATE_KEY = 'webinartest';

export const getUserInfo = (schema, email) => {
  return schema.users.findBy({
    email,
  });
};

export const createUser = (schema, name, email, password) => {
  return schema.users.create({
    email,
    name,
    password,
  });
};

export const createUserAuthToken = (user) => {
  const token = jsonwebtoken.sign(user, PRIVATE_KEY);
  return token;
};

export const verifyUserAuthToken = (schema, bearerAuthToken) => {
  if (!Boolean(bearerAuthToken)) return null;

  const token = trim(bearerAuthToken.replace(/^Bearer/, ''));

  if (!Boolean(token)) return null;

  const { email } = jsonwebtoken.verify(token, PRIVATE_KEY);

  return getUserInfo(schema, email);
};

export const getAllWebinars = (schema, user, page, perPage) => {
  const count = schema.db.webinars.length;

  const morePage = count % perPage > 0 ? 1 : 0;
  const totalPages = parseInt(count / perPage) + morePage;

  const webinarAllPage = schema.webinars.all();

  const pageStart = (page - 1) * perPage;
  const pageEnd = pageStart + perPage - 1;

  const webinarPages = webinarAllPage.filter((item, i) => {
    return i <= pageEnd && i >= pageStart;
  });

  const subscribes = user
    ? schema.subscribes.where({
        userId: user.id,
      }).models
    : [];


  return {
    total_pages: totalPages,
    list: webinarPages.models.map((webinar) => {
      return {
        ...webinar.attrs,
        favourited: subscribes.some((subscribe) => {
          const { webinarId } = subscribe.attrs;
          return webinarId === webinar.id;
        }),
      };
    }),
  };
};

export const getWebinar = (schema, id) => {
  return schema.webinars.findBy({
    id,
  });
};

export const subscribeWebinar = (schema, userId, webinarId) => {
  const targetWebinar = schema.webinars.find(webinarId);

  if (targetWebinar.length === 0) return null;

  return schema.subscribes.create({
    userId,
    webinarId,
  });
};

export const removeFavouritesById = (schema, userId, webinarId) => {
  schema.subscribes
    .findBy({
      userId: userId,
      webinarId: webinarId,
    })
    .destroy();
};
