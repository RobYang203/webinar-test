import { getServer } from './index';

const server = getServer();

export const authEmailLoginResult = async (payload) => {
  const res = await server.post('/auth/email/login', payload);

  return res;
};

export const authCheckMeResult = async ({ token }) => {
  const res = await server.post('/auth/me', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const authLogoutResult = async ({ token }) => {
  const res = await server.post('/auth/logout', null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const authSignupResult = async (payload) => {
  const res = await server.post('/auth/signup', payload);

  return res;
};
