import { render, screen } from "@testing-library/react";

import Patient, { PatientShape } from "./Patient";

describe("Given a Patient component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a patient card", () => {
      const firstPatient: PatientShape = {
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
              _id: "234",
              name: "Teodoro",
              lastname: "Maloso",
              username: "Tmaloso",
              password: "12345",
              admin: false,
              sessions: [],
              progress: "",
            },
            doctor: {
              _id: "234",
              name: "Doctor",
              lastname: "Strange",
              username: "DrStrange",
              password: "12345",
              admin: false,
              sessions: [],
              progress: "",
            },
          },
        ],
      };
      const mockFunction = jest.fn();

      render(<Patient patient={firstPatient} actionOnClick={mockFunction} />);

      const paragraph = screen.getByText("Petri Petroli");
      const doctor = screen.getByText("Tomorrow");

      expect(paragraph).toBeInTheDocument();
      expect(doctor).toBeInTheDocument();
    });
  });
});
