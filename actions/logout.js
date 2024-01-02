export const logoutSuccess = (msg) => {
  return { type: "LOGOUT_SUCCESS", value: msg };
};
export const logoutFail = (msg) => {
  return { type: "LOGOUT_FAIL", value: msg };
};
