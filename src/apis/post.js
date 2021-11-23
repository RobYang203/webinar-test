import { getServer } from './index';

const server = getServer();

export const getPostsResult = async ({ token ,...payload}) => {
  const res = await server.get('/posts', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: payload,
  });

  return res;
};

export const getPostResult = async ({ token , id }) => {
  const res = await server.get(`/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};