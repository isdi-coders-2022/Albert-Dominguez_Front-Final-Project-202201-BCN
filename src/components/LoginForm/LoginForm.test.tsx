import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import LoginForm from "./LoginForm";

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
  });
});
