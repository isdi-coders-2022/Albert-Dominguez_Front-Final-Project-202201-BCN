import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import RegisterForm from "./RegisterForm";

import userEvent from "@testing-library/user-event";

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a RegisterForm component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a form", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </MemoryRouter>
      );

      const button = screen.getByRole("button", { name: "REGISTER" });
      const text = screen.getByRole("textbox", { name: "Username:" });

      expect(button).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
    describe("When the user types in every input", () => {
      test("Then the register button should be enabled", () => {
        render(
          <MemoryRouter>
            <Provider store={store}>
              <RegisterForm />
            </Provider>
          </MemoryRouter>
        );
        const nameInput = screen.getByLabelText(/name/);
        userEvent.type(nameInput, "123456");

        const lastnameInput = screen.getByLabelText(/last name/i);
        userEvent.type(lastnameInput, "123456");

        const usernameInput = screen.getByLabelText(/username/i);
        userEvent.type(usernameInput, "123456");

        const passwordInput = screen.getByLabelText(/password/i);
        userEvent.type(passwordInput, "123456");

        const button = screen.getByRole("button");

        expect(button).not.toBeDisabled();
        userEvent.click(button);

        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });
});
