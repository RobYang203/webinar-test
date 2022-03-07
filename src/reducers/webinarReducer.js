import types from 'actions/types';
import { webinarState } from './initialState';

const settingWebinars = ({ list, detail }, { data, meta }) => {
  const { current_page, total_pages } = meta.pagination;

  return {
    detail,
    list: {
      hasMore: current_page < total_pages,
      currentPage: current_page,
      data: [...list.data, ...data],
    },
  };
};

const changeUserWebinarFavourited = (
  { list, detail },
  { targetId },
  favourited
) => {
  const newData = [...list.data];
  const index = newData.findIndex(({ id }) => targetId === id);

  newData[index] = {
    ...newData[index],
    favourited,
  };

  return {
    ...detail,
    list: {
      ...list,
      data: newData,
    },
  };
};

export default function webinarReducer(
  webinar = webinarState,
  { type, payload }
) {
  switch (type) {
    case types.GET_NEXT_WEBINARS_SUCCESS:
      return settingWebinars(webinar, payload);
    case types.ADD_USER_WEBINAR_SUCCESS:
      return changeUserWebinarFavourited(webinar, payload, true);
    case types.DELETE_USER_WEBINAR_SUCCESS:
      return changeUserWebinarFavourited(webinar, payload, false);
    case types.GET_WEBINAR_DETAIL_SUCCESS:
      return { ...webinar, detail: { ...payload } };
    case types.INITIAL_WEBINAR_DETAIL:
      return { ...webinar, detail: {} };
    case types.INITIAL_WEBINARS:
      return { ...webinar, list: { ...webinarState.list } };
    case types.GET_WEBINAR_DETAIL:
    case types.GET_WEBINAR_DETAIL_ERROR:
    case types.ADD_USER_WEBINAR:
    case types.DELETE_USER_WEBINAR:
    case types.DELETE_USER_WEBINAR_ERROR:
    case types.GET_NEXT_WEBINARS_ERROR:
    case types.GET_NEXT_WEBINARS:
    default:
      return webinar;
  }
}
