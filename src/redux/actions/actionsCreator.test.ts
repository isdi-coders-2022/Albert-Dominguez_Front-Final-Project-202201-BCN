import { loadSessionsAction } from "./actionsCreator";

describe("Given a load sessions action creator", () => {
  describe("When it's invoked passing an array of sessions", () => {
    test("Then it should return an action with type load sessions and those sessions", () => {
      const sessions = [
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
      const expectedAction = {
        type: "load-session-list",
        sessions,
      };

      const action = loadSessionsAction(sessions);

      expect(action).toEqual(expectedAction);
    });
  });
});
