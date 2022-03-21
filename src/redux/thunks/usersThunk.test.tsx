import { loadPatientssListThunk, registerThunk } from "./usersThunk";

describe("Given a loadSessionsList thunk function", () => {
  describe("When it is called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      await loadPatientssListThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a register thunk", () => {
  describe("When it's called with an existent id", () => {
    test("Then it should call dispatch with de resgisterAction as parameter", async () => {
      const userObject = {
        name: "lalala",
        lastname: "lalalala",
        username: "lalalalala",
        password: "lalalalalala",
      };
      const expectedAction = {
        type: "register",
        user: userObject,
      };
      const dispatch = jest.fn();

      const regThunk = registerThunk(userObject);
      await regThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
