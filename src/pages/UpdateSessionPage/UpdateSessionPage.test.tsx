import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import UpdateSessionPage from "./UpdateSessionPage";

describe("Given an UpdateSessionPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <UpdateSessionPage />
          </Provider>
        </MemoryRouter>
      );

      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
    });
  });
});
