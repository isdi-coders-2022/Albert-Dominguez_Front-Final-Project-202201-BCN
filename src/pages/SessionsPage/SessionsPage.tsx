import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SessionsList from "../../components/SessionsList/SessionsList";
import { RootState } from "../../redux/store";
import { loadSessionsListThunk } from "../../redux/thunks/sessionsThunk";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
/* const sessionList = [
  {
    id: "1a",
    when: "Tomorrow",
    where: "Where eagles dare",
    patient: { name: "Teodoro", lastname: "Maloso", username: "Tmaloso" },
    doctor: {
      name: "Doctor",
      lastname: "Strange",
      username: "DrStrange",
    },
  },
  {
    id: "1b",
    when: "Today",
    where: "Where eagles dare",
    patient: { name: "Teodoro", lastname: "Maloso", username: "Tmaloso" },
    doctor: {
      name: "Doctor",
      lastname: "Strange",
      username: "DrStrange",
    },
  },
];
 */
const SessionsPage = () => {
  const dispatch = useDispatch();
  const sessionsList = useSelector((state: RootState) => state.sessions);

  useEffect(() => {
    dispatch(loadSessionsListThunk);
  }, [dispatch]);

  return (
    <Main>
      <h2>MY SESSIONS</h2>
      <SessionsList sessionsArray={sessionsList} actionOnClick={() => {}} />
    </Main>
  );
};
export default SessionsPage;
