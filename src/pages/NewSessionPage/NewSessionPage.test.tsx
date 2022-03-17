import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import NewSessionPage from "./NewSessionPage";

describe("Given a Navigation component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <NewSessionPage />
          </Provider>
        </MemoryRouter>
      );

      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
    });
  });
});
