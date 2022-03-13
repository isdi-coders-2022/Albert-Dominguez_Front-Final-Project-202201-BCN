import { loadSessionsAction } from "./actionsCreator";

describe("Given a load sessions action creator", () => {
  describe("When it's invoked passing an array of sessions", () => {
    test("Then it should return an action with type load sessions and those sessions", () => {
      const sessions = [
        {
          _id: "1a",
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
          _id: "1b",
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
      const expectedAction = {
        type: "load-session-list",
        sessions,
      };

      const action = loadSessionsAction(sessions);

      expect(action).toEqual(expectedAction);
    });
  });
});
