export const loginSuccess = (userData) => {
  return {
    type: "LOGIN_SUCCESS",
    value: userData,
  };
};

export const loginFailure = (errorMessage) => {
  return { type: "LOGIN_FAILURE", value: errorMessage };
};
