import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";
import TestRenderer from "react-test-renderer";

describe("Given a Footer component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a logo that renders a menu when clicked", async () => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      );

      const logo = screen.getByTitle("onclick");
      const menu = await screen.findByTitle("menuList");
      await userEvent.click(logo);

      expect(logo).toBeInTheDocument();
      expect(menu).toBeInTheDocument();
    });
    test("Then it shouldn't render a list if the image has not been clicked", async () => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      );

      const logo = screen.getByTitle("onclick");
      await userEvent.click(logo);
      const menu = await screen.findByTitle("menuList");
      const link = await screen.findByTitle("calendar");
      await userEvent.click(link);

      expect(menu).not.toBeVisible();
    });
  });
  test("then it should match the snapshot", () => {
    const app = TestRenderer.create(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    ).toJSON();

    expect(app).toMatchSnapshot();
  });
});
