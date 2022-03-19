import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PatientShape } from "../Patient/Patient";
import { DateTime } from "luxon";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

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
  when: any;
  where: string;
  patient: PatientShape;
  doctor: PatientShape;
}

interface SessionProps {
  session: SessionShape;
  actionOnClick: (event: React.MouseEvent<SVGSVGElement>) => void;
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  width: 80vw;
  border-style: solid;
  border-radius: 20px;
  border-color: #fa9956;
  p {
    margin: 0;
  }
  @media (min-width: 400px) {
    width: 350px;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  p {
    margin: 0;
  }
  &:hover .linked {
    color: white;
  }
  .linked {
    cursor: pointer;
    color: #fa9956;
  }
`;

const IconContainer = styled.div`
  width: 20%;
  padding-right: 10px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  right: -5%;
`;

const StyledFA = styled(FontAwesomeIcon)`
  justify-self: flex-end;
  cursor: pointer;
  position: relative;
  padding: 10px;
  :hover {
    color: #fa9956;
  }
`;

const Session = ({ session, actionOnClick }: SessionProps): JSX.Element => {
  const navigate = useNavigate();
  const detailedSession = () => {
    navigate(`/sessions/${session._id}`);
  };
  return session.patient ? (
    <Container>
      <InfoContainer>
        <p className={"linked"} onClick={detailedSession}>
          {DateTime.fromISO(session.when).toRelativeCalendar()}
        </p>
        <p
          className={"linked"}
          onClick={detailedSession}
        >{`At: ${session.where}`}</p>
        <p>{`Therapist: ${session.doctor.name}`}</p>
        <p>{`Patient: ${session.patient.name}`}</p>
      </InfoContainer>
      <IconContainer>
        <StyledFA icon={faEdit} />
        <StyledFA
          icon={faTrashCan}
          onClick={actionOnClick}
          data-testid="deleteIcon"
        />
      </IconContainer>
    </Container>
  ) : (
    <Container>
      <InfoContainer>
        <p onClick={detailedSession}>
          {" "}
          {DateTime.fromISO(session.when).toRelativeCalendar()}
        </p>
        <p onClick={detailedSession}>{`At: ${session.where}`}</p>
        <p>{`Therapist: ${session.doctor.name}`}</p>
        <p>{`Patient: No longer here`}</p>
      </InfoContainer>
      <IconContainer>
        <StyledFA icon={faEdit} />
        <FontAwesomeIcon
          icon={faTrashCan}
          onClick={actionOnClick}
          data-testid="deleteIcon"
        />
      </IconContainer>
    </Container>
  );
};

export default Session;
