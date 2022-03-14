import { actionTypes } from "../actions/actionTypes";
import { SessionShape } from "../../components/Session/Session";
import { AnyAction } from "redux";

const sessionsReducer = (
  sessions: SessionShape[] = [],
  action: AnyAction = { type: "", sessions }
) => {
  let newSessionsList;
  switch (action.type) {
    case actionTypes.loadSessionsList:
      newSessionsList = [...action.sessions];
      break;

    case actionTypes.loadOneSession:
      newSessionsList = sessions.filter((session) => action.id !== session._id);
      break;

    default:
      newSessionsList = [...sessions];
  }

  return newSessionsList;
};

export default sessionsReducer;
