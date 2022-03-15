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

  if (action.type === actionTypes.loadOneSession) {
    newSession = action.session;
  } else {
    newSession = session;
  }

  return newSession;
};

export default oneSessionReducer;
