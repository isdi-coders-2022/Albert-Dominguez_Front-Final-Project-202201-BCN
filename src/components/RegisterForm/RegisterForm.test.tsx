import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import RegisterForm from "./RegisterForm";

describe("Given a LoginForm component", () => {
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
  });
});
