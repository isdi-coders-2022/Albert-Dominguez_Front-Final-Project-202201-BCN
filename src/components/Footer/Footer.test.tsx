import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a logo that renders a menu when clicked", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Footer />
          </MemoryRouter>
        </Provider>
      );

      const logo = screen.getByTitle("onclick");
      const menu = await screen.findByTitle("menuList");
      await userEvent.click(logo);

      expect(logo).toBeInTheDocument();
      expect(menu).toBeInTheDocument();
    });
    test("Then it shouldn't render a list if the image has not been clicked", async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Footer />
          </MemoryRouter>
        </Provider>
      );

      const logo = screen.getByTitle("onclick");
      await userEvent.click(logo);
      const menu = await screen.findByTitle("register");
      const link = await screen.findByTitle("login");
      await userEvent.click(link);

      expect(menu).not.toBeVisible();
    });
  });
});
