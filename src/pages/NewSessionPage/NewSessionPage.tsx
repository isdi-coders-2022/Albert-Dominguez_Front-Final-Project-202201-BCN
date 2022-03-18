import styled from "styled-components";

import SessionForm from "../../components/SessionForm/SessionForm";

const Main = styled.main`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  padding-bottom: 20vh;
`;

const NewSessionPage = () => {
  return (
    <Main>
      <h2>NEW SESSION</h2>
      <SessionForm />
    </Main>
  );
};
export default NewSessionPage;
