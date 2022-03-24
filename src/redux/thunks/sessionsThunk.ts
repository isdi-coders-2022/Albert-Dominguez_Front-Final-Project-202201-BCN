import { toast } from "react-toastify";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { SessionShape } from "../../components/Session/Session";
import {
  createNewSessionAction,
  deleteOneSessionAction,
  loadOneSessionAction,
  loadSessionsAction,
  updateSessionAction,
} from "../actions/actionsCreator";
const token = localStorage.getItem("UserToken");

export const loadSessionsListThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_API}sessions/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const sessionsListResponse = await response.json();
    dispatch(loadSessionsAction(sessionsListResponse));
  } else {
    toast.warn("Failed to load sessions");
  }
};

export const loadOneSessionThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(`${process.env.REACT_APP_API}sessions/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const oneSession = await response.json();
    dispatch(loadOneSessionAction(oneSession));
  };

export const deleteOneSessionThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(`${process.env.REACT_APP_API}sessions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      dispatch(deleteOneSessionAction(id));
    }
  };

export const createNewSessionThunk =
  (session: {}) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(`${process.env.REACT_APP_API}sessions/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(session),
    });
    if (response.ok) {
      const newSession = await response.json();
      dispatch(createNewSessionAction(newSession));
    }
  };

export const updateSessionThunk =
  (session: SessionShape) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API}sessions/${session._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(session),
      }
    );
    if (response.ok) {
      dispatch(updateSessionAction(session));
    }
  };
