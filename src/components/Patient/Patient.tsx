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
  width: 250px;
  p {
    margin: 0;
  }
  @media (min-width: 400px) {
    width: 350px;
  }
`;

const Patient = ({ patient }: PatientProps): JSX.Element => {
  return patient.sessions ? (
    <Container>
      <p>
        {patient.name} {patient.lastname}
      </p>
      <p>{`Progress: ${patient.progress}`}</p>
      {patient.sessions.map((session) => (
        <>
          <p>{session.when}</p>
          <p> AT: {session.where}</p>
        </>
      ))}
    </Container>
  ) : (
    <Container>
      <p>
        {patient.name} {patient.lastname}
      </p>
      <p>{`Progress: ${patient.progress}`}</p>
    </Container>
  );
};

export default Patient;
