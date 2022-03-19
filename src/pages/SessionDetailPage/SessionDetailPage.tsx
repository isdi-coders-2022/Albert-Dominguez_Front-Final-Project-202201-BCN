import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SessionDetail from "../../components/SessionDetail/SessionDetail";
import { RootState } from "../../redux/store";
import { loadOneSessionThunk } from "../../redux/thunks/sessionsThunk";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const Main = styled.main`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  overflow: auto;
  padding-bottom: 20vh;
`;

const SessionDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionDetail = useSelector((state: RootState) => state.session);

  useEffect(() => {
    dispatch(loadOneSessionThunk(id as string));
  }, [dispatch, id]);

  return sessionDetail._id ? (
    <Main>
      <h2>MY SESSIONS</h2>
      <SessionDetail session={sessionDetail} actionOnClick={() => {}} />
    </Main>
  ) : (
    <NotFoundPage />
  );
};
export default SessionDetailPage;
