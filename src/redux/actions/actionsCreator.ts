import { SessionShape } from "../../components/Session/Session";
import { actionTypes } from "./actionTypes";

export const loadSessionsAction = (sessions: SessionShape[]) => ({
  type: actionTypes.loadSessionsList,
  sessions,
});
