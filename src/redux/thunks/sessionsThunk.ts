import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import {
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
