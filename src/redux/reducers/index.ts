import { combineReducers } from "redux";
import oneSessionReducer from "./oneSessionReducer";
import patientsReducer from "./patientsReducer";
import sessionsReducer from "./sessionsReducer";

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  id: sessionsReducer,
  session: oneSessionReducer,
  patients: patientsReducer,
  patient: patientsReducer,
});

export default rootReducer;
