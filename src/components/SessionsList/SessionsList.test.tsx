import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import { SessionShape } from "../Session/Session";
import SessionsList from "./SessionsList";

describe("Given a SessionsList component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list of session cards", () => {
      const sessionList: SessionShape[] = [
        {
          _id: "1a",
          when: "Tomorrow",
          where: "Where eagles dare",
          patient: {
            _id: "234",
            name: "Teodoro",
            lastname: "Maloso",
            username: "Tmaloso",
            password: "12345",
            admin: false,
            sessions: [],
            progress: "",
          },
          doctor: {
            _id: "234",
            name: "Doctor",
            lastname: "Strange",
            username: "DrStrange",
            password: "12345",
            admin: false,
            sessions: [],
            progress: "",
          },
        },
        {
          _id: "1b",
          when: "Today",
          where: "Where eagles dare",
          patient: {
            _id: "234",
            name: "Teodoro",
            lastname: "Maloso",
            username: "Tmaloso",
            password: "12345",
            admin: false,
            sessions: [],
            progress: "",
          },
          doctor: {
            _id: "234",
            name: "Doctor",
            lastname: "Strange",
            username: "DrStrange",
            password: "12345",
            admin: false,
            sessions: [],
            progress: "",
          },
        },
      ];

      render(
        <Provider store={store}>
          <MemoryRouter>
            <SessionsList sessionsArray={sessionList} />
          </MemoryRouter>
        </Provider>
      );

      const paragraph = screen.getByText("Tomorrow");

      expect(paragraph).toBeInTheDocument();
    });
  });
});
