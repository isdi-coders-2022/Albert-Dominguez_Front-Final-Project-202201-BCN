import styled from "styled-components";
import Patient, { PatientShape } from "../Patient/Patient";

interface PatientsListProps {
  patientsArray: PatientShape[];
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90vw;
`;

const PatientsList = ({ patientsArray }: PatientsListProps): JSX.Element => {
  return (
    <ListContainer>
      {patientsArray.map((patient) => {
        return <Patient key={patient._id} patient={patient} />;
      })}
    </ListContainer>
  );
};

export default PatientsList;
