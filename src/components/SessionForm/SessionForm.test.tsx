import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import SessionForm from "./SessionForm";

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a SessionForm component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a form", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <SessionForm />
          </Provider>
        </MemoryRouter>
      );

      const button = screen.getByRole("button", { name: "CREATE SESSION" });
      const text = screen.getByRole("textbox", { name: "Place:" });
      const combox = screen.getByRole("combobox", { name: "Doctor:" });
      const option = await screen.findAllByRole("option");

      expect(button).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(combox).toBeInTheDocument();
      expect(option).toHaveLength(2);
    });
  });
  describe("When the user types in every input", () => {
    test("Then the register button should be enabled", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <SessionForm />
          </Provider>
        </MemoryRouter>
      );
      const nameInput = screen.getByLabelText("Date:");
      userEvent.type(nameInput, "1312-01-12T00:14:44.000");

      const lastnameInput = screen.getByLabelText("Place:");
      userEvent.type(lastnameInput, "123456");

      const usernameInput = screen.getByLabelText(/doctor/i);
      userEvent.selectOptions(usernameInput, "Choose a doctor");

      const passwordInput = screen.getByLabelText(/patient/i);
      userEvent.selectOptions(passwordInput, "Choose a patient");

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
      fireEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
