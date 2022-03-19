import { actionTypes } from "../actions/actionTypes";
import { SessionShape } from "../../components/Session/Session";
import { AnyAction } from "redux";

const oneSessionReducer = (
  session: SessionShape = {
    _id: "",
    when: "",
    where: "",
    patient: {
      _id: "",
      name: "",
      lastname: "",
      username: "",
      password: "",
      admin: false,
      sessions: [],
      progress: "",
    },
    doctor: {
      _id: "",
      name: "",
      lastname: "",
      username: "",
      password: "",
      admin: true,
      sessions: [],
      progress: "",
    },
  },
  action: AnyAction = { type: "", session }
) => {
  let newSession;

  switch (action.type) {
    case actionTypes.loadOneSession:
      newSession = action.session;
      break;

    case actionTypes.updateSession:
      newSession = action.session;
      break;

    default:
      newSession = session;
      break;
  }
  return newSession;
};

export default oneSessionReducer;
