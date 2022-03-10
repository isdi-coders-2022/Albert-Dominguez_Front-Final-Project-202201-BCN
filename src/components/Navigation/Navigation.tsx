import styled from "styled-components";

const Header = styled.header`
  background-color: #f37370;
  margin-top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
`;
const Title = styled.h1`
  margin: 10px;
  font-size: large;
`;

const Anchor = styled.a`
  color: inherit;
  text-decoration: inherit;
  font-weight: inherit;
`;

const List = styled.ul`
  list-style: none;
  margin: 10px;
`;

const Navigation = (): JSX.Element => {
  return (
    <Header>
      <Title>NICEST SHRINK</Title>
      <nav>
        <List>
          <li>
            <Anchor href="Calendar">Calendar</Anchor>
          </li>
          <li>
            <Anchor href="Sessions">Sessions</Anchor>
          </li>
          <li>
            <Anchor href="Patients">Patients</Anchor>
          </li>
          <li>
            <Anchor href="LogIn">Log In</Anchor>
          </li>
          <li>
            <Anchor href="LogOut">Log Out</Anchor>
          </li>
        </List>
      </nav>
    </Header>
  );
};

export default Navigation;
