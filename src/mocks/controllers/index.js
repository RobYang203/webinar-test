import faker from '@faker-js/faker';
import jsonwebtoken from 'jsonwebtoken';
import { trim } from 'lodash';
import DBSchema from '../db';

const PRIVATE_KEY = 'webinartest';

export const getUserInfo = (email) => {
  return DBSchema.users.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });
};

export const createUserAuthToken = (user) => {
  const token = jsonwebtoken.sign(user, PRIVATE_KEY);
  return token;
};

export const verifyUserAuthToken = (bearerAuthToken) => {
  if (!Boolean(bearerAuthToken)) return null;

  const token = trim(bearerAuthToken.replace(/^Bearer/, ''));

  if(!Boolean(token)) return null;
  
  const { email } = jsonwebtoken.verify(token, PRIVATE_KEY);

  return getUserInfo(email);
};

export const getAllWebinars = (page, perPage) => {
  const count = DBSchema.webinars.count();

  const morePage = count % perPage > 0 ? 1 : 0;
  const totalPages = parseInt(count / perPage) + morePage;

  const webinarPages = DBSchema.webinars.findMany({
    take: perPage,
    skip: (page - 1) * perPage,
  });

  return {
    total_pages: totalPages,
    list: webinarPages,
  };
};

export const serverInit = () => {
  DBSchema.users.create({
    name: 'Tony',
    password: '123456',
    email: 'tony@gmail.com',
  });

  Array.from({ length: 51 }, () => {
    DBSchema.webinars.create({
      title: faker.lorem.words(),
      content: `<p>${faker.lorem.paragraphs()}</p> <p>${faker.lorem.paragraphs()}</p>`,
      created_at: faker.time.recent('unix'),
    });
  });
};
