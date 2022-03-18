import { deleteOneSessionThunk, loadSessionsListThunk } from "./sessionsThunk";

describe("Given a loadSessionsList thunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      await loadSessionsListThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteOneSession thunk", () => {
  describe("When it's called with an existent id", () => {
    test("Then it should call dispatch with de deleteOneSessionAction as parameter", async () => {
      const id = "6229d6f84197f335af2c3ca9";
      const expectedAction = {
        type: "delete-one-session",
        id: id,
      };
      const dispatch = jest.fn();

      const deleteThunk = deleteOneSessionThunk(id);
      await deleteThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
