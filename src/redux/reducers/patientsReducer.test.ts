import { PatientShape } from "../../components/Patient/Patient";
import patientsReducer from "./patientsReducer";

describe("Given a patients reducer", () => {
  describe("When it's called with a loadPatients action with an array of patients", () => {
    test("Then it should return a new state with an array of patients", () => {
      const patients: PatientShape[] = [];
      const patientsToLoad: PatientShape[] = [
        {
          _id: "12",
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
