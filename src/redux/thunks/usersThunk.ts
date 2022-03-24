import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  loadPatientsAction,
  loginUserAction,
  logoutUserAction,
  registerAction,
} from "../actions/actionsCreator";

const myToken = localStorage.getItem("UserToken");
interface MyToken {
  id: string;
  name: string;
}

export const loadPatientssListThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_API}users/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${myToken}`,
    },
  });
  const patientsListResponse = await response.json();
  dispatch(loadPatientsAction(patientsListResponse));
};

export const registerThunk =
  (user: {}) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(`${process.env.REACT_APP_API}users/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const newUser = await response.json();
      dispatch(registerAction(newUser));
    }
  };

export const loginThunk =
  (user: {}) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(`${process.env.REACT_APP_API}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const token = await response.json();
      const { name } = jwtDecode<MyToken>(token.token);

      localStorage.setItem("UserToken", token.token);
      localStorage.userName = name;
      dispatch(loginUserAction({ loggedIn: true }));
      toast.success("Logged in!");
    }
  };

export const logoutThunk =
  () => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    localStorage.clear();
    dispatch(logoutUserAction());
    toast.success("Logged out");
  };
