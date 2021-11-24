export const removeUserToken = () => {
  localStorage.removeItem(process.env.REACT_APP_TOKEN_KEY);
};

export const setUserToken = (token) => {
  localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
};

export const getUserToken = () => {
  return localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
};
