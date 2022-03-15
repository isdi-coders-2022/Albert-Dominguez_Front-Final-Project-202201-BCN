import { render, screen } from "@testing-library/react";
import CalendarPage from "./CalendarPage";

describe("Given a Calendar component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a button with day name", () => {
      render(<CalendarPage />);

      const month = screen.getByRole("heading", { name: "MY CALENDAR" });

      expect(month).toBeInTheDocument();
    });
  });
});
