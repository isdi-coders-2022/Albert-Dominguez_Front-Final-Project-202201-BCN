import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: #f37370;
  margin-top: 0;
  margin-bottom: 5vh;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  box-shadow: 0px 0px 10px white;
`;
const Title = styled.h1`
  margin: 20px;
  width: 130px;
  font-size: large;
  margin-bottom: 0%;
`;

const Links = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  font-weight: inherit;
  padding-right: 10px;
`;

const List = styled.ul`
  list-style: none;
  margin-right: 20px;
  padding-left: 0;
  display: none;

  @media (min-width: 450px) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 560px) {
    font-size: 10px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    margin: 3px;
    padding: 0;
    font-size: 10px;
  }
`;

const Navigation = (): JSX.Element => {
  return (
    <Header>
      <TitleContainer>
        <Title>NICEST SHRINK</Title>
        {localStorage.userName ? (
          <p>Logged In as {localStorage.userName}</p>
        ) : (
          <></>
        )}
      </TitleContainer>

      <nav>
        <List>
          <li>
            {localStorage.userName ? (
              <Links to="/calendar">Calendar</Links>
            ) : (
              ""
            )}
          </li>

          <li>
            {localStorage.userName ? (
              <Links to="/sessions">Sessions</Links>
            ) : (
              ""
            )}
          </li>

          <li>
            {localStorage.userName ? (
              <Links to={"/patients"}>Patients</Links>
            ) : (
              ""
            )}
          </li>

          <li>
            {localStorage.userName ? (
              <Links to={"/newsession"}>Create Session</Links>
            ) : (
              <Links to={"/register"}>Register</Links>
            )}
          </li>

          <li>
            {localStorage.userName ? (
              <Links onClick={() => localStorage.clear()} to={"/login"}>
                Log Out
              </Links>
            ) : (
              <Links to={"/login"}>Login</Links>
            )}
          </li>
        </List>
      </nav>
    </Header>
  );
};

export default Navigation;
