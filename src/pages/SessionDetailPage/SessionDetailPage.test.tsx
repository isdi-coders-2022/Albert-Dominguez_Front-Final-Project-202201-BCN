import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
/* import { MemoryRouter } from "react-router-dom"; */
import { store } from "../../redux/store";
import SessionDetailPage from "./SessionDetailPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => {
    return { id: 13 };
  },
}));

let mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

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
  /*   describe("When it's instantiated", () => {
    test("Then it should render a session card", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <SessionDetailPage />
          </Provider>
        </MemoryRouter>
      );

      const paragraph = await screen.findByText("fa 711 anys");

      expect(paragraph).toBeInTheDocument();
    });
  }); */
});
