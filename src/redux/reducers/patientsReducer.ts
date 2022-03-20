import { AnyAction } from "redux";
import { PatientShape } from "../../components/Patient/Patient";
import { actionTypes } from "../actions/actionTypes";

const patientsReducer = (
  patients: PatientShape[] = [],
  action: AnyAction = { type: "", patients }
) => {
  let newPatientsList;

  switch (action.type) {
    case actionTypes.loadPatientsList:
      newPatientsList = [...action.patients];
      break;
    case actionTypes.register:
      newPatientsList = [patients, ...action.patient];
      break;
    default:
      newPatientsList = [...patients];
  }

  return newPatientsList;
};

export default patientsReducer;
