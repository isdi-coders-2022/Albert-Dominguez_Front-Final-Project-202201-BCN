import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SessionsList from "../../components/SessionsList/SessionsList";
import { RootState } from "../../redux/store";
import { loadSessionsListThunk } from "../../redux/thunks/sessionsThunk";

const Main = styled.main`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;

  padding-bottom: 20vh;
`;

const SessionsPage = () => {
  const sessionsList = useSelector((state: RootState) => state.sessions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSessionsListThunk);
  }, [dispatch, sessionsList.length]);

  return (
    <Main>
      <h2>MY SESSIONS</h2>
      <SessionsList sessionsArray={sessionsList} />
    </Main>
  );
};
export default SessionsPage;
