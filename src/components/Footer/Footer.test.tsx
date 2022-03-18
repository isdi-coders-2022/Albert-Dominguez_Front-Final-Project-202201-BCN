import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading", () => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      );

      const logo = screen.getByRole("img");

      expect(logo).toBeInTheDocument();
    });
  });
});
