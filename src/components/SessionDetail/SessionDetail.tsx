import styled from "styled-components";

export interface UserShape {
  name: string;
  lastname: string;
  username: string;
}

export interface SessionShape {
  _id: string;
  when: string;
  where: string;
  patient: UserShape;
  doctor: UserShape;
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
`;
const MeetContainer = styled.div`
  background-color: #f37370;
  color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Session = ({ session, actionOnClick }: SessionProps): JSX.Element => {
  return (
    <Container onClick={actionOnClick}>
      <MeetContainer>
        <p>{session.when}</p>
        <p>{`At: ${session.where}`}</p>
        <p>{`Therapist: ${session.doctor.name}`}</p>
        <p>{`Patient: ${session.patient.name}`}</p>
      </MeetContainer>
      <h3>MESSAGE BOARD</h3>
    </Container>
  );
};

export default Session;
