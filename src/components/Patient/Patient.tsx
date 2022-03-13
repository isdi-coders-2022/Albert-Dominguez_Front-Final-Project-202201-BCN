import styled from "styled-components";
import { SessionShape } from "../Session/Session";

export interface PatientShape {
  _id: string;
  name: string;
  lastname: string;
  username: string;
  progress: string;
  password: string;
  admin: boolean;
  sessions: SessionShape[];
}

interface PatientProps {
  patient: PatientShape;
  actionOnClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border-style: solid;
  border-radius: 20px;
  border-color: #fa9956;
`;

const Patient = ({ patient, actionOnClick }: PatientProps): JSX.Element => {
  return (
    <Container onClick={actionOnClick}>
      <p>
        {patient.name} {patient.lastname}
      </p>
      <p>{`Progress: ${patient.progress}`}</p>
      {patient.sessions.map((session) => (
        <p>
          {session.when} AT: {session.where} Dr: {session.doctor.name}
        </p>
      ))}
    </Container>
  );
};

export default Patient;
