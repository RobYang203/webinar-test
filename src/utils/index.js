const setValidateResult = (isValidate, errors = {}) => {
  return {
    isValidate,
    errors,
  };
};

export const validate = (schema, payload) => {
  try {
    schema.validateSync(payload, { abortEarly: false });
    return setValidateResult(true);
  } catch (error) {
    const errorsResult = error.inner.reduce((currentError, nextError) => {
      const name = nextError.path;
      const message = nextError.message;
      return { ...currentError, [name]: message };
    }, {});

    return setValidateResult(false, errorsResult);
  }
};

export const setUserToken = (token) => {
  localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
};

export const getUserToken = () => {
  return localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
};
