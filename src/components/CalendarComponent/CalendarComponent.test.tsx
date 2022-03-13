import { render, screen } from "@testing-library/react";
import CalendarComponent from "./CalendarComponent";

describe("Given a Calendar component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a button with day name", () => {
      render(<CalendarComponent />);

      const month = screen.getByRole("button", { name: "March 5, 2022" });

      expect(month).toBeInTheDocument();
    });
  });
});
