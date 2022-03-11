import styled from "styled-components";
import SessionsList from "../../components/SessionsList/SessionsList";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const sessionList = [
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

const SessionsPage = () => {
  return (
    <Main>
      <h2>MY SESSIONS</h2>
      <SessionsList sessionsArray={sessionList} actionOnClick={() => {}} />
    </Main>
  );
};
export default SessionsPage;
