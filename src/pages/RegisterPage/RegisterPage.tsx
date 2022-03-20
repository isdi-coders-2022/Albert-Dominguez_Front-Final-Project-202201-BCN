import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

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

const RegisterPage = () => {
  return (
    <Main>
      <h2>REGISTER</h2>
      <RegisterForm />
    </Main>
  );
};
export default RegisterPage;
