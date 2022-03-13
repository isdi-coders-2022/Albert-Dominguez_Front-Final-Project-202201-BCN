import styled from "styled-components";
import Patient, { PatientShape } from "../Patient/Patient";

interface PatientsListProps {
  patientsArray: PatientShape[];
  actionOnClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 90vw;
`;

const PatientsList = ({
  patientsArray,
  actionOnClick,
}: PatientsListProps): JSX.Element => {
  return (
    <ListContainer>
      {patientsArray.map((patient) => {
        return (
          <Patient
            key={patient._id}
            patient={patient}
            actionOnClick={actionOnClick}
          />
        );
      })}
    </ListContainer>
  );
};

export default PatientsList;
