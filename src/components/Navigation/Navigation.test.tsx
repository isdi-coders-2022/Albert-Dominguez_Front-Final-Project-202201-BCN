import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading", () => {
      render(<Navigation />);

      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
    });
  });
});
