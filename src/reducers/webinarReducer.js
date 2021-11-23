import types from 'actions/types';
import { webinarState } from './initialState';
//_SUCCESS
//_ERROR

const setWebinar = ({ list, detail }, { data, meta }) => {
  const { current_page, total_pages } = meta.pagination;

  return {
    detail,
    list: {
      hasMore: current_page <= total_pages,
      currentPage: current_page,
      data: [...list.data, ...data],
    },
  };
};

const changeUserWebinarFavourited = ({ list, detail }, { ids }, favourited) => {
  const index = list.data.findIndex(({ id }) => ids[0] === id);

  list.data[index] = {
    ...list.data[index],
    favourited,
  };

  return {
    ...detail,
    list: {
      ...list,
    },
  };
};

export default function webinarReducer(
  webinar = webinarState,
  { type, payload }
) {
  switch (type) {
    case types.GET_WEBINARS_SUCCESS:
      return setWebinar(webinar, payload);
    case types.INITIAL_WEBINARS:
      return webinarState;
    case types.ADD_USER_WEBINAR_SUCCESS:
      return changeUserWebinarFavourited(webinar, payload, true);
    case types.DELETE_USER_WEBINAR_SUCCESS:
      return changeUserWebinarFavourited(webinar, payload, false);
    case types.ADD_USER_WEBINAR:
    case types.DELETE_USER_WEBINAR:
    case types.DELETE_USER_WEBINAR_ERROR:
    case types.GET_WEBINARS_ERROR:
    case types.GET_WEBINARS:
    default:
      return webinar;
  }
}
