
const initialState = {
  isLoggedIn: false,
  user: undefined,
  errorMessage: "",
};

const authReducer = (state = initialState, action) => {
  console.log("Reducer called with action type:", action.type);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: action.value,
        errorMessage: "",
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        errorMessage: action.value,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...initialState,
      };
    case "LOGOUT_FAIL":
      return {
        ...state,
        isLoggedIn: true,
        user: null,
        errorMessage: action.value,
      };

    default:
      return state;
  }
};

export default authReducer;
