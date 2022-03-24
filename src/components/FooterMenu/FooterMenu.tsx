import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { logoutThunk } from "../../redux/thunks/usersThunk";

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
  @media (min-width: 450px) {
    display: none;
  }
`;

const Div = styled.div`
  background-color: #fa9956;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 25px;
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
  const user: any = useSelector((state: RootState) => state.loginData);
  const dispatch = useDispatch();
  return (
    <Container
      onClick={actionOnClick}
      className={`menu-container${isActive ? " active" : " unactive"}`}
      data-testid="onclick"
      title="onclick"
    >
      <List title="menuList">
        <li>
          <Div>
            {user.loggedIn && (
              <Link to={"/calendar"} title="calendar">
                Calendar
              </Link>
            )}
          </Div>
        </li>
        <li>
          <Div>{user.loggedIn && <Link to={"/sessions"}>Sessions</Link>}</Div>
        </li>
        <li>
          <Div>{user.loggedIn && <Link to={"/patients"}>Patients</Link>}</Div>
        </li>
        <li>
          <Div>
            {user.loggedIn ? (
              <Link to={"/newsession"}>Create Session</Link>
            ) : (
              <Link to={"/register"} title={"register"}>
                Register
              </Link>
            )}
          </Div>
        </li>{" "}
        <li>
          <Div>
            {user.loggedIn ? (
              <Link
                onClick={async () => {
                  localStorage.clear();
                  await dispatch(logoutThunk());
                }}
                to={"/login"}
              >
                Log Out
              </Link>
            ) : (
              <Link to={"/login"} title={"login"}>
                Login
              </Link>
            )}
          </Div>
        </li>
      </List>{" "}
    </Container>
  );
};

export default FooterMenu;
