import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { loadSessionsAction } from "../actions/actionsCreator";

export const loadSessionsListThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_API}sessions/`);
  console.log(response);
  const sessionsListResponse = await response.json();
  dispatch(loadSessionsAction(sessionsListResponse));
};
