import { Link } from "react-router-dom";
import styled from "styled-components";

type MenuProps = {
  isActive: any;
  actionOnClick: () => void;
};

const Container = styled.div`
  &.unactive {
    display: none;
  }
  &.active {
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    bottom: 0;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  bottom: 15vh;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  li {
    margin: 0;
  }
`;

const Div = styled.div`
  background-color: #fa9956;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  border-radius: 10px;
  width: 50vw;
  margin-bottom: 20px;
  a {
    color: inherit;
    text-decoration: inherit;
    font-weight: inherit;
  }
`;

const FooterMenu = ({ isActive, actionOnClick }: MenuProps) => {
  return (
    <Container
      onClick={actionOnClick}
      className={`menu-container${isActive ? " active" : " unactive"}`}
    >
      <List>
        <li>
          <Div>
            <Link to={"/calendar"}>Calendar</Link>
          </Div>
        </li>
        <li>
          <Div>
            <Link to={"/sessions"}>Sessions</Link>
          </Div>
        </li>
        <li>
          <Div>
            <Link to={"/patients"}>Patients</Link>
          </Div>
        </li>
        <li>
          <Div>
            <Link to={"/login"}>Login</Link>
          </Div>
        </li>
        <li>
          <Div>
            <Link to={"/newsession"}>Create Session</Link>
          </Div>
        </li>
      </List>{" "}
    </Container>
  );
};

export default FooterMenu;
