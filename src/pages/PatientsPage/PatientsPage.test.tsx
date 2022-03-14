import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import PatientsPage from "./PatientsPage";

describe("Given a PatientsPage component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list of patient cards", () => {
      render(
        <Provider store={store}>
          <PatientsPage />
        </Provider>
      );

      const paragraph = screen.getByRole("heading", { name: "MY PATIENTS" });

      expect(paragraph).toBeInTheDocument();
    });
  });
});
