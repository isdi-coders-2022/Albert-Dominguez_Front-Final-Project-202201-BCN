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
    console.log(oneSession + "hola que tal");
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

export const updateSessionThunk =
  (session: SessionShape) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const response = await fetch(
      `${process.env.REACT_APP_API}sessions/${session._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(session),
      }
    );
    if (response.ok) {
      dispatch(updateSessionAction(session));
    }
  };
