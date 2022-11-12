const defaultState = require("../Store/state.json");
const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "UPLOAD_START":
      return { ...state, error: false };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, error: true };

    case "RETREIVING_START":
      return { ...state, error: false };
    case "RETREIVING_SUCCESS":
      return {
        ...state,
        posts: action.data,
        error: false,
      };

    case "RETREIVING_FAIL":
      return { ...state, error: true };

    default:
      return state;
  }
};

export default postReducer;
