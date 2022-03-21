import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FooterMenu from "./FooterMenu";

describe("Given a Navigation component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading", () => {
      const onclick = jest.fn();
      render(
        <MemoryRouter>
          <FooterMenu isActive={true} actionOnClick={onclick} />
        </MemoryRouter>
      );

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});
