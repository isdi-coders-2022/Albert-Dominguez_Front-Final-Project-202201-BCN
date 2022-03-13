import { render, screen } from "@testing-library/react";
import SessionsList from "./SessionsList";

describe("Given a SessionsList component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list of session cards", () => {
      const sessionList = [
        {
          _id: "1a",
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
          _id: "1b",
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
        <SessionsList
          sessionsArray={sessionList}
          actionOnClick={mockFunction}
        />
      );

      const paragraph = screen.getByText("Tomorrow");

      expect(paragraph).toBeInTheDocument();
    });
  });
});
