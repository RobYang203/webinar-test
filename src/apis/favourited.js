import { getServer } from './index';

const server = getServer();

export const insertFavouriteResult = async ({ token, ...payload }) => {
  const res = await server.post(`/favourites`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const deleteFavouritedResult = async ({ token, id }) => {
  const res = await server.delete(`/favourites/post/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
