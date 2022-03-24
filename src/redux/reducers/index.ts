import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import oneSessionReducer from "./oneSessionReducer";
import patientsReducer from "./patientsReducer";
import sessionsReducer from "./sessionsReducer";

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  id: sessionsReducer,
  session: oneSessionReducer,
  patients: patientsReducer,
  patient: patientsReducer,
  loginData: loginReducer,
});

export default rootReducer;
