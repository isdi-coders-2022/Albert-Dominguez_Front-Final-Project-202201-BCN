import { render, screen } from "@testing-library/react";
import PatientsList from "./PatientsList";

describe("Given a PatientList component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a list of patient cards", () => {
      const patientsArray = [
        {
          _id: "21",
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
        },
      ];

      render(<PatientsList patientsArray={patientsArray} />);

      const paragraph = screen.getByText("Petri Petroli");
      const otherParagraph = screen.getByText(
        `${patientsArray[0].name} ${patientsArray[0].lastname}`
      );

      expect(paragraph).toBeInTheDocument();
      expect(otherParagraph).toBeInTheDocument();
    });
  });
});
