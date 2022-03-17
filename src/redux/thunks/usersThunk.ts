import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { loadPatientsAction } from "../actions/actionsCreator";

export const loadPatientssListThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_API}users/`);
  console.log(response);
  const patientsListResponse = await response.json();
  dispatch(loadPatientsAction(patientsListResponse));
};
