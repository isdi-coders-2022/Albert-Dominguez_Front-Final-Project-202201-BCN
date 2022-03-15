import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import SessionDetailPage from "./SessionDetailPage";

describe("Given a SessionDetailPage component", () => {
  describe("When it's instantiated without session params", () => {
    test("Then it should render a not found page", () => {
      render(
        <Provider store={store}>
          <SessionDetailPage />
        </Provider>
      );

      const paragraph = screen.getByRole("heading", {
        name: "SORRY, PAGE NOT FOUND",
      });

      expect(paragraph).toBeInTheDocument();
    });
  });
});
