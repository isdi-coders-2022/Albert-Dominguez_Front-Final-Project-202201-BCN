import styled from "styled-components";

import UpdateSessionForm from "../../components/updateSessionForm/updateSessionForm";

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

const UpdateSessionPage = () => {
  return (
    <Main>
      <h2>UPDATE SESSION</h2>
      <UpdateSessionForm />
    </Main>
  );
};
export default UpdateSessionPage;
