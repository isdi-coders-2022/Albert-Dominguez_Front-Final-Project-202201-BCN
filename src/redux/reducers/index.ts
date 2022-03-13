import { combineReducers } from "redux";
import patientsReducer from "./patientsReducer";
import sessionsReducer from "./sessionsReducer";

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  patients: patientsReducer,
});

export default rootReducer;
