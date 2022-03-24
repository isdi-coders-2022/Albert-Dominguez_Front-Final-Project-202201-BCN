import { AnyAction } from "redux";
import { actionTypes } from "../actions/actionTypes";

const loginReducer = (userInfo: any, action: AnyAction = { type: "" }) => {
  let loginData;

  switch (action.type) {
    case actionTypes.login:
      loginData = { loggedIn: true };
      break;

    case actionTypes.logout:
      loginData = { loggedIn: false };
      break;

    default:
      localStorage.getItem("UserToken")
        ? (loginData = { loggedIn: true })
        : (loginData = { loggedIn: false });
  }
  return loginData;
};

export default loginReducer;
