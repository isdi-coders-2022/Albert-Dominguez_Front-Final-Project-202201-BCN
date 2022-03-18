import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  background-color: #f37370;
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  position: fixed;
  box-shadow: 0px 0px 10px white;
`;
const Title = styled.h1`
  margin: 10px;
  font-size: large;
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
  display: none;
  @media (min-width: 400px) {
    display: flex;
    flex-direction: row;
  }
`;

const Navigation = (): JSX.Element => {
  return (
    <Header>
      <Title>NICEST SHRINK</Title>
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
            <Anchor to="/login">Log In</Anchor>
          </li>

          <li>
            <Anchor to="/newsession">Create Session</Anchor>
          </li>
        </List>
      </nav>
    </Header>
  );
};

export default Navigation;
