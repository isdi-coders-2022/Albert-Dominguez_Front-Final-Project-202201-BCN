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
  gap: 10px;
  width: 90vw;
`;

const SessionsList = ({
  sessionsArray,
  actionOnClick,
}: SessionsListProps): JSX.Element => {
  return (
    <ListContainer>
      {sessionsArray.map((session) => {
        return (
          <Session
            key={session._id}
            session={session}
            actionOnClick={actionOnClick}
          />
        );
      })}
    </ListContainer>
  );
};

export default SessionsList;
