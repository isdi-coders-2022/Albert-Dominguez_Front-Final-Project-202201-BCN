import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PatientShape } from "../Patient/Patient";
import { SessionShape } from "../Session/Session";
import SessionDetail from "./SessionDetail";

describe("Given a Session component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a session card", () => {
      const firstSession: SessionShape = {
        _id: "1",
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
      };

      render(
        <MemoryRouter>
          <SessionDetail session={firstSession} />
        </MemoryRouter>
      );

      const paragraph = screen.getByText("At: Where eagles dare");

      expect(paragraph).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with a session that has no patient", () => {
    test("Then it should render a session card anyway", () => {
      const firstSession: SessionShape = {
        _id: "1",
        when: "Tomorrow",
        where: "Where eagles dare",
        patient: null as unknown as PatientShape,
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
      };

      render(
        <MemoryRouter>
          <SessionDetail session={firstSession} />
        </MemoryRouter>
      );

      const paragraph = screen.getByRole("heading", {
        name: "MESSAGE BOARD",
      });

      expect(paragraph).toBeInTheDocument();
    });
  });
});
