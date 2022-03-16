import { actionTypes } from "../actions/actionTypes";
import { SessionShape } from "../../components/Session/Session";
import { AnyAction } from "redux";

const sessionsReducer = (
  sessions: SessionShape[] = [],
  action: AnyAction = { type: "", sessions }
) => {
  let newSessionsList: SessionShape[];
  switch (action.type) {
    case actionTypes.loadSessionsList:
      newSessionsList = [...action.sessions];
      break;

    case actionTypes.deleteOneSession:
      newSessionsList = sessions.filter((session) => session._id !== action.id);
      break;
    default:
      newSessionsList = [...sessions];
  }

  return newSessionsList;
};

export default sessionsReducer;
