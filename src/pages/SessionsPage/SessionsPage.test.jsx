import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import SessionsPage from "./SessionsPage";

describe("Given a SessionsPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list of session cards", () => {
      const sessionList = [
        {
          id: "1a",
          when: "Tomorrow",
          where: "Where eagles dare",
          patient: { name: "Teodoro", lastname: "Maloso", username: "Tmaloso" },
          doctor: {
            name: "Doctor",
            lastname: "Strange",
            username: "DrStrange",
          },
        },
        {
          id: "1b",
          when: "Today",
          where: "Where eagles dare",
          patient: { name: "Teodoro", lastname: "Maloso", username: "Tmaloso" },
          doctor: {
            name: "Doctor",
            lastname: "Strange",
            username: "DrStrange",
          },
        },
      ];
      const mockFunction = jest.fn();

      render(
        <Provider store={store}>
          <SessionsPage
            sessionsArray={sessionList}
            actionOnClick={mockFunction}
          />
        </Provider>
      );

      const paragraph = screen.getByRole("heading", { name: "MY SESSIONS" });

      expect(paragraph).toBeInTheDocument();
    });
  });
});
