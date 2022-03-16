import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../redux/store";
import SessionsPage from "./SessionsPage";

describe("Given a SessionsPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list of session cards", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SessionsPage></SessionsPage>
          </Provider>
        </BrowserRouter>
      );

      const paragraph = screen.getByRole("heading", { name: "MY SESSIONS" });

      expect(paragraph).toBeInTheDocument();
    });
  });
});
