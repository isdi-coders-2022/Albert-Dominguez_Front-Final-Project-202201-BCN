import styled from "styled-components";
import Session, { SessionShape } from "../Session/Session";

interface SessionsListProps {
  sessionsArray: SessionShape[];
  actionOnClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SessionsList = ({
  sessionsArray,
  actionOnClick,
}: SessionsListProps): JSX.Element => {
  return (
    <ListContainer>
      {sessionsArray.map((session) => {
        return <Session session={session} actionOnClick={actionOnClick} />;
      })}
    </ListContainer>
  );
};

export default SessionsList;
