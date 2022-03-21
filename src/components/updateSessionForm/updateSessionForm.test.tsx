import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import UpdateSessionForm from "./updateSessionForm";

describe("Given a updateSessionForm component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a form", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <UpdateSessionForm />
          </Provider>
        </MemoryRouter>
      );

      const button = screen.getByRole("button", { name: "UPDATE SESSION" });
      const text = screen.getByRole("textbox", { name: "Place:" });
      const combox = screen.getByRole("combobox", { name: "Doctor:" });
      const option = await screen.findAllByRole("option");

      expect(button).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(combox).toBeInTheDocument();
      expect(option).toHaveLength(2);
    });
  });
});
