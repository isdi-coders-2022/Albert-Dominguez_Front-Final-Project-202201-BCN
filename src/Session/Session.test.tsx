import { render, screen } from "@testing-library/react";
import Session, { SessionShape } from "./Session";

describe("Given a Session component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a session card", () => {
      const firstSession: SessionShape = {
        when: "Tomorrow",
        where: "Where eagles dare",
        patient: { name: "Teodoro", lastname: "Maloso", username: "Tmaloso" },
        doctor: { name: "Doctor", lastname: "Strange", username: "DrStrange" },
      };
      const mockFunction = jest.fn();

      render(<Session session={firstSession} actionOnClick={mockFunction} />);

      const paragraph = screen.getByText("Tomorrow");

      expect(paragraph).toBeInTheDocument();
    });
  });
});
