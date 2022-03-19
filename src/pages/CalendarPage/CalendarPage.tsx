import styled from "styled-components";
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  overflow: auto;
  padding-bottom: 20vh;
`;

const CalendarPage = () => {
  return (
    <Main>
      <h2>MY CALENDAR</h2>
      <CalendarComponent />
    </Main>
  );
};

export default CalendarPage;
