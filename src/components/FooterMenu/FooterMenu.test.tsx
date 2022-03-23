import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import FooterMenu from "./FooterMenu";

describe("Given a Navigation component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a heading", () => {
      const onclick = jest.fn();
      render(
        <Provider store={store}>
          <MemoryRouter>
            <FooterMenu isActive={true} actionOnClick={onclick} />
          </MemoryRouter>
        </Provider>
      );

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});
