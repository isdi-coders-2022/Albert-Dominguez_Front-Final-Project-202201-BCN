import { SessionShape } from "../../components/Session/Session";
import sessionsReducer from "./sessionsReducer";

describe("Given a sessions reducer", () => {
  describe("When it's called with a loadSessions action with an array of sessions", () => {
    test("Then it should return a new state with an array of sessions", () => {
      const sessions: SessionShape[] = [];
      const sessionsToLoad: SessionShape[] = [
        {
          id: "1a",
          when: "Tomorrow",
          where: "Where eagles dare",
          patient: { name: "Teodoro", lastname: "Maloso", username: "Tmaloso" },
          doctor: {
            name: "Doctor",
            lastname: "Strange",
            username: "DrStrange",
          },
        },
        {
          id: "1b",
          when: "Today",
          where: "Where eagles dare",
          patient: { name: "Teodoro", lastname: "Maloso", username: "Tmaloso" },
          doctor: {
            name: "Doctor",
            lastname: "Strange",
            username: "DrStrange",
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
            id: "1a",
            when: "Tomorrow",
            where: "Where eagles dare",
            patient: {
              name: "Teodoro",
              lastname: "Maloso",
              username: "Tmaloso",
            },
            doctor: {
              name: "Doctor",
              lastname: "Strange",
              username: "DrStrange",
            },
          },
          {
            id: "1b",
            when: "Today",
            where: "Where eagles dare",
            patient: {
              name: "Teodoro",
              lastname: "Maloso",
              username: "Tmaloso",
            },
            doctor: {
              name: "Doctor",
              lastname: "Strange",
              username: "DrStrange",
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
