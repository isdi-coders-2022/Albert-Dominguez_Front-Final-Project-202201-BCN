import { PatientShape } from "../../components/Patient/Patient";
import { SessionShape } from "../../components/Session/Session";
import { actionTypes } from "./actionTypes";

export const loadSessionsAction = (sessions: SessionShape[]) => ({
  type: actionTypes.loadSessionsList,
  sessions,
});

export const loadOneSessionAction = (session: SessionShape) => ({
  type: actionTypes.loadOneSession,
  session,
});

export const deleteOneSessionAction = (id: string) => ({
  type: actionTypes.deleteOneSession,
  id,
});

export const createNewSessionAction = (session: SessionShape) => ({
  type: actionTypes.createNewSession,
  session,
});

export const updateSessionAction = (session: SessionShape) => ({
  type: actionTypes.updateSession,
  session,
});

export const loadPatientsAction = (patients: PatientShape[]) => ({
  type: actionTypes.loadPatientsList,
  patients,
});

export const registerAction = (user: PatientShape) => ({
  type: actionTypes.register,
  user,
});

export const loginAction = (user: any) => ({
  type: actionTypes.login,
  user,
});
