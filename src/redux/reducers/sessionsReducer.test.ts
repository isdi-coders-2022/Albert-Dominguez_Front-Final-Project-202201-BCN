import { SessionShape } from "../../components/Session/Session";
import sessionsReducer from "./sessionsReducer";

describe("Given a sessions reducer", () => {
  describe("When it's called with a loadSessions action with an array of sessions", () => {
    test("Then it should return a new state with an array of sessions", () => {
      const sessions: SessionShape[] = [];
      const sessionsToLoad: SessionShape[] = [
        {
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
        },
        {
          _id: "1b",
          when: "Today",
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
        },
      ];
      const action = {
        type: "load-session-list",
        sessions: sessionsToLoad,
      };

      const newState = sessionsReducer(sessions, action);

      expect(newState).toEqual(sessionsToLoad);
    });

    describe("When it's called with an nonexistent action", () => {
      test("Then it should return a new state with the current state (initial state)", () => {
        const sessions: SessionShape[] = [
          {
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
          },
          {
            _id: "1b",
            when: "Today",
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
          },
        ];

        const action = {
          type: "none",
          sessions: sessions,
        };

        const newState = sessionsReducer(sessions, action);

        expect(newState).toEqual(sessions);
      });
    });
  });
});
