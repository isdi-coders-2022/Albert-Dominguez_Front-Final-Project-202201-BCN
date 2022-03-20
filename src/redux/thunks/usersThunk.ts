import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { loadPatientsAction, registerAction } from "../actions/actionsCreator";

export const loadPatientssListThunk = async (
  dispatch: ThunkDispatch<void, unknown, AnyAction>
) => {
  const response = await fetch(`${process.env.REACT_APP_API}users/`);
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
      /*  toast.success("User registered correctly"); */
    }
  };
