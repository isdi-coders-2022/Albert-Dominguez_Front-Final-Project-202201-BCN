import { PatientShape } from "../../components/Patient/Patient";
import { actionTypes } from "../actions/actionTypes";

const patientsReducer = (
  patients: PatientShape[] = [],
  action: { type: string; patients: PatientShape[] }
) => {
  let newPatientsList;

  if (action.type === actionTypes.loadPatientsList) {
    newPatientsList = [...action.patients];
    console.log(newPatientsList);
  } else {
    newPatientsList = [...patients];
  }

  return newPatientsList;
};

export default patientsReducer;
