import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../redux/store";

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
  const user: any = useSelector((state: RootState) => state.patient);

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
          <li>{user.loggedIn ? <Links to="/calendar">Calendar</Links> : ""}</li>

          <li>{user.loggedIn ? <Links to="/sessions">Sessions</Links> : ""}</li>

          <li>
            {user.loggedIn ? <Links to={"/patients"}>Patients</Links> : ""}
          </li>

          <li>
            {" "}
            {user.loggedIn ? (
              <Links to={"/newsession"}>Create Session</Links>
            ) : (
              <Links to={"/register"}>Register</Links>
            )}
          </li>

          <li>
            {" "}
            {user.loggedIn ? (
              <Links to={"/login"} onClick={() => localStorage.clear()}>
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
