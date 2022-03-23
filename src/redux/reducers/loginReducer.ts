import { AnyAction } from "redux";
import { actionTypes } from "../actions/actionTypes";

const initialLoginData = {
  name: "",
  username: "",
  id: "",
  loggedIn: false,
};

const loginReducer = (userInfo: any, action: AnyAction = { type: "" }) => {
  let loginData;

  switch (action.type) {
    case actionTypes.login:
      loginData = { ...action.userInfo };
      break;

    case actionTypes.logout:
      loginData = { ...initialLoginData };
      break;

    default:
      loginData = { ...userInfo };
  }
  return loginData;
};

export default loginReducer;
