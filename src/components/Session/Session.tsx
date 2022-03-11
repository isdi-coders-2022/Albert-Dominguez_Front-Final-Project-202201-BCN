import styled from "styled-components";

export interface UserShape {
  name: string;
  lastname: string;
  username: string;
}

export interface SessionShape {
  id: string;
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

const Session = ({ session, actionOnClick }: SessionProps): JSX.Element => {
  return (
    <Container onClick={actionOnClick}>
      <p>{session.when}</p>
      <p>{session.doctor.name}</p>
      <p>{session.patient.name}</p>
    </Container>
  );
};

export default Session;
