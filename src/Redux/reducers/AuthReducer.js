const defaultState = require("../Store/state.json");
const authReducer = (state = defaultState, action) => {
  switch (action.type) {

    case "LOGIN_START":
      return { ...state, error: false };
    case "LOGIN_SUCCESS":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
        error: false,
      };

    case "LOGIN_FAIL":
      return { ...state, error: true };

    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null, error: false };
    default:
      return state;
  }
};

export default authReducer;
