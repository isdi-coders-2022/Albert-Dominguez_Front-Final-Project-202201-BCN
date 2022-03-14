import { render, screen } from "@testing-library/react";
import PatientsList from "./PatientList";

describe("Given a PatientList component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list of patient cards", () => {
      const patientsArray = [
        {
          _id: "11",
          name: "Petri",
          lastname: "Petroli",
          username: "pptroli",
          progress: "Not progressing",
          password: "12345",
          admin: true,
          sessions: [
            {
              _id: "1",
              when: "Tomorrow",
              where: "Where eagles dare",
              patient: {
                name: "Teodoro",
                lastname: "Maloso",
                username: "Tmaloso",
              },
              doctor: {
                name: "Doctor",
                lastname: "Strange",
                username: "DrStrange",
              },
            },
          ],
        },
        {
          _id: "11",
          name: "Petrus",
          lastname: "Petroleus",
          username: "pptroli",
          progress: "Not progressing",
          password: "12345",
          admin: true,
          sessions: [
            {
              _id: "1",
              when: "Tomorrow",
              where: "Where eagles dare",
              patient: {
                name: "Teodoro",
                lastname: "Maloso",
                username: "Tmaloso",
              },
              doctor: {
                name: "Doctor",
                lastname: "Strange",
                username: "DrStrange",
              },
            },
          ],
        },
      ];
      const mockFunction = jest.fn();

      render(
        <PatientsList
          patientsArray={patientsArray}
          actionOnClick={mockFunction}
        />
      );

      const paragraph = screen.getByText("Petri Petroli");

      expect(paragraph).toBeInTheDocument();
    });
  });
});
