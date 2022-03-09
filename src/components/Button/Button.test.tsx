import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it receives an action and a button is clicked", () => {
    test("Then it should call the action", () => {
      const action = jest.fn();

      render(<Button text="text" actionOnClick={action} />);

      userEvent.click(screen.getByRole("button"));

      expect(action).toHaveBeenCalled();
    });
  });
});
