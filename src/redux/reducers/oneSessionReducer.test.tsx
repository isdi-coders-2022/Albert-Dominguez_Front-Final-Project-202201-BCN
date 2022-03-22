import { SessionShape } from "../../components/Session/Session";
import oneSessionReducer from "./oneSessionReducer";

describe("Given a oneSession reducer", () => {
  describe("When it's called with a loadSession action with an id", () => {
    test("Then it should return a new state with a session object", () => {
      const sessionToLoad: SessionShape = {
        _id: "1a",
        when: "Tomorrow",
        where: "Where eagles dare",
        patient: {
          _id: "234",
          name: "Teodoro",
          lastname: "Maloso",
          username: "Tmaloso",
          password: "12345",
          admin: false,
          sessions: [],
          progress: "",
        },
        doctor: {
          _id: "234",
          name: "Doctor",
          lastname: "Strange",
          username: "DrStrange",
          password: "12345",
          admin: false,
          sessions: [],
          progress: "",
        },
      };
      const action = {
        type: "load-one-session",
        session: sessionToLoad,
      };

      const newState = oneSessionReducer(sessionToLoad, action);

      expect(newState).toEqual(sessionToLoad);
    });
  });

  describe("When it's called with an updateSession action", () => {
    test("Then it should return a new state with a modified session object", () => {
      const session: SessionShape = {
        _id: "1a",
        when: "Tomorrow",
        where: "Where eagles dare",
        patient: {
          _id: "234",
          name: "Teodoro",
          lastname: "Maloso",
          username: "Tmaloso",
          password: "12345",
          admin: false,
          sessions: [],
          progress: "",
        },
        doctor: {
          _id: "234",
          name: "Doctor",
          lastname: "Strange",
          username: "DrStrange",
          password: "12345",
          admin: false,
          sessions: [],
          progress: "",
        },
      };
      const modifiedSession: SessionShape = {
        _id: "1a",
        when: "Gomorrow",
        where: "Where eagles dare",
        patient: {
          _id: "234",
          name: "Teodoro",
          lastname: "Maloso",
          username: "Tmaloso",
          password: "12345",
          admin: false,
          sessions: [],
          progress: "",
        },
        doctor: {
          _id: "234",
          name: "Doctor",
          lastname: "Strange",
          username: "DrStrange",
          password: "12345",
          admin: false,
          sessions: [],
          progress: "",
        },
      };
      const action = {
        type: "update-session",
        session: modifiedSession,
      };

      const newState = oneSessionReducer(session, action);

      expect(newState).toEqual(modifiedSession);
    });
  });
});
