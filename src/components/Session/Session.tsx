import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PatientShape } from "../Patient/Patient";

export interface UserShape {
  name: string;
  lastname: string;
  username: string;
  password: string;
  sessions: string;
  progress: string;
}

export interface SessionShape {
  _id: string;
  when: string;
  where: string;
  patient: PatientShape;
  doctor: PatientShape;
}

interface SessionProps {
  session: SessionShape;
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
  p {
    margin: 0;
  }
`;

const Session = ({ session, actionOnClick }: SessionProps): JSX.Element => {
  const navigate = useNavigate();
  const detailedSession = () => {
    navigate(`/sessions/${session._id}`);
  };
  return session.patient ? (
    <Container onClick={detailedSession}>
      <p>{session.when}</p>
      <p>{`At: ${session.where}`}</p>
      <p>{`Therapist: ${session.doctor.name}`}</p>
      <p>{`Patient: ${session.patient.name}`}</p>
      <FontAwesomeIcon icon={faTrashCan} />
    </Container>
  ) : (
    <Container onClick={detailedSession}>
      <p>{session.when}</p>
      <p>{`At: ${session.where}`}</p>
      <p>{`Therapist: ${session.doctor.name}`}</p>
      <p>{`Patient: No longer here`}</p>
      <FontAwesomeIcon icon={faTrashCan} />
    </Container>
  );
};

export default Session;
