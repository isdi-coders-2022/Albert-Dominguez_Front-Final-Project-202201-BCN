import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import LoginForm from "./LoginForm";

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a LoginForm component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a form", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </MemoryRouter>
      );

      const button = screen.getByRole("button", { name: "LOGIN" });
      const text = screen.getByRole("textbox", { name: "Username:" });

      expect(button).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
    describe("When the user types in every input", () => {
      test("Then the register button should be enabled", () => {
        const expectedFields = [/username/i, /password/i];

        render(
          <MemoryRouter>
            <Provider store={store}>
              <LoginForm />
            </Provider>
          </MemoryRouter>
        );

        const fields = expectedFields.map((label) =>
          screen.getByLabelText(label)
        );

        const button = screen.getByRole("button");
        fields.forEach((field) => userEvent.type(field, "1234"));
        expect(button).not.toBeDisabled();
        userEvent.click(button);

        expect(fields[0]).toBeInTheDocument();

        expect(mockDispatch).toHaveBeenCalled();
      });
    });
  });
});
