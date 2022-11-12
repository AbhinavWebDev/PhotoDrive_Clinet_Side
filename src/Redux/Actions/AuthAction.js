import * as AuthApi from "../../Api/AuthRequest";

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "LOGIN_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOGIN_FAIL" });

  }
};


export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
