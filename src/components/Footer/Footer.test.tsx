import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a logo that renders a menu when clicked", () => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      );

      const logo = screen.getByRole("img");
      userEvent.click(logo);
      const menu = screen.getByRole("list");

      expect(logo).toBeInTheDocument();
      expect(menu).toBeInTheDocument();
    });
  });
});
