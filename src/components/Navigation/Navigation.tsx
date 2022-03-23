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

const Anchor = styled(Link)`
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
            <Anchor to="/calendar">Calendar</Anchor>
          </li>
          <li>
            <Anchor to="/sessions">Sessions</Anchor>
          </li>
          <li>
            <Anchor to="/patients">Patients</Anchor>
          </li>
          <li>
            <Anchor to="/login">LogIn</Anchor>
          </li>

          <li>
            <Anchor to="/newsession">New Session</Anchor>
          </li>
        </List>
      </nav>
    </Header>
  );
};

export default Navigation;
