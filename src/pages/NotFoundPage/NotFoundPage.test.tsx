import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a Navigation component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading", () => {
      render(<NotFoundPage />);

      const heading = screen.getByRole("heading");

      expect(heading).toBeInTheDocument();
    });
  });
});
