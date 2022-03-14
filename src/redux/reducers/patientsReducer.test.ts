import { PatientShape } from "../../components/Patient/Patient";
import patientsReducer from "./patientsReducer";

describe("Given a patients reducer", () => {
  describe("When it's called with a loadPatients action with an array of patients", () => {
    test("Then it should return a new state with an array of patients", () => {
      const patients: PatientShape[] = [];
      const patientsToLoad: PatientShape[] = [
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

      const action = {
        type: "load-patients-list",
        patients: patientsToLoad,
      };

      const newState = patientsReducer(patients, action);

      expect(newState).toEqual(patientsToLoad);
    });

    describe("When it's called with an nonexistent action", () => {
      test("Then it should return a new state with the current state (initial state)", () => {
        const patients: PatientShape[] = [];

        const action = {
          type: "none",
          patients: patients,
        };

        const newState = patientsReducer(patients, action);

        expect(newState).toEqual(patients);
      });
    });
  });
});
