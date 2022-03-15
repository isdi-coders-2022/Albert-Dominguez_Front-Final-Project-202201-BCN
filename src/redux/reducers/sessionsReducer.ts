import { actionTypes } from "../actions/actionTypes";
import { SessionShape } from "../../components/Session/Session";
import { AnyAction } from "redux";

const sessionsReducer = (
  sessions: SessionShape[] = [],
  action: AnyAction = { type: "", sessions }
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
