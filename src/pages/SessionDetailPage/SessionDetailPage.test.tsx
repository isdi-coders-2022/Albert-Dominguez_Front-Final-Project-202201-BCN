import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import SessionDetailPage from "./SessionDetailPage";

describe("Given a SessionsPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list of session cards", () => {
      render(
        <Provider store={store}>
          <SessionDetailPage />
        </Provider>
      );

      const paragraph = screen.getByRole("heading", { name: "MY SESSIONS" });

      expect(paragraph).toBeInTheDocument();
    });
  });
});
