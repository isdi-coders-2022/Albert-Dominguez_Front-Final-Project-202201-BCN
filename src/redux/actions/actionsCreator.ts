import { PatientShape } from "../../components/Patient/Patient";
import { SessionShape } from "../../components/Session/Session";
import { actionTypes } from "./actionTypes";

export const loadSessionsAction = (sessions: SessionShape[]) => ({
  type: actionTypes.loadSessionsList,
  sessions,
});
export const loadPatientsAction = (patients: PatientShape[]) => ({
  type: actionTypes.loadPatientsList,
  patients,
});
