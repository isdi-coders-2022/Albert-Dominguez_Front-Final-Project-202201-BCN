import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
  createNewSessionAction,
  deleteOneSessionAction,
  loadOneSessionAction,
  loadSessionsAction,
} from "../actions/actionsCreator";

export const loadSessionsListThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_API}sessions/`);
  const sessionsListResponse = await response.json();
  dispatch(loadSessionsAction(sessionsListResponse));
};

export const loadOneSessionThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(`${process.env.REACT_APP_API}sessions/${id}`);
    const oneSession = await response.json();
    dispatch(loadOneSessionAction(oneSession));
  };

export const deleteOneSessionThunk =
  (id: string) => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(`${process.env.REACT_APP_API}sessions/${id}`, {
      method: "DELETE",
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
      },
      body: JSON.stringify(session),
    });
    if (response.ok) {
      const newSession = await response.json();
      dispatch(createNewSessionAction(newSession));
    }
  };
