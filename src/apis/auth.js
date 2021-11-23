import { getServer } from './index';

const server = getServer();

export const authEmailLoginResult = async (payload) => {
  const res = await server.post('/auth/email/login', payload);

  return res;
};

export const authCheckMeResult = async ({ token }) => {
  const res = await server.post('/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const authLogoutResult = async ({ token }) => {
  const res = await server.post('/auth/logout', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
