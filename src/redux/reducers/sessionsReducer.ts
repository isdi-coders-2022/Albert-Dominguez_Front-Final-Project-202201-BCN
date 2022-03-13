import { actionTypes } from "../actions/actionTypes";
import { SessionShape } from "../../components/Session/Session";

const sessionsReducer = (
  sessions: SessionShape[] = [],
  action: { type: string; sessions: SessionShape[] }
) => {
  let newSessionsList;

  if (action.type === actionTypes.loadSessionsList) {
    newSessionsList = [...action.sessions];
  } else {
    newSessionsList = [...sessions];
  }

  return newSessionsList;
};

export default sessionsReducer;
