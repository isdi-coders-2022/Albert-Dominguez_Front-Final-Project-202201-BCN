import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";

const Main = styled.main`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  overflow: auto;
  padding-bottom: 20vh;
`;

const LoginPage = () => {
  return (
    <Main>
      <h2>LOGIN</h2>
      <LoginForm />
    </Main>
  );
};
export default LoginPage;
