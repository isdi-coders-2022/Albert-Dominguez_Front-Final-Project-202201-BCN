import { actionTypes } from "../actions/actionTypes";
import loginReducer from "./loginReducer";

describe("Given a userReducer function", () => {
  describe("When it receives current user with username 'Tom' and login-user action with user 'Lila'", () => {
    test("Then it should retern user 'Lila'", () => {
      const currentUser = {
        loggedIn: false,
      };
      const newUser = {
        loggedIn: false,
      };
      const action = {
        type: actionTypes.login,
        loginData: newUser,
      };
      const expectedUser = {
        loggedIn: true,
      };

      const user = loginReducer(currentUser, action);

      expect(user).toEqual(expectedUser);
    });
  });

  describe("When it doesn't receive user and action", () => {
    test("Then it should return initialData", () => {
      const initialUserData = {
        loggedIn: false,
      };
      const currentUser = undefined;
      const action = {
        type: "",
      };

      const user = loginReducer(currentUser, action);

      expect(user).toEqual(initialUserData);
    });
  });
});
