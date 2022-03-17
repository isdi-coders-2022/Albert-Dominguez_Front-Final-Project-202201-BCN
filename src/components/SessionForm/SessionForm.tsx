import styled from "styled-components";

const FormContainer = styled.div`
  width: 300px;
  border-style: solid;
  border-radius: 20px;
  border-color: #fa9956;
  border-width: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  @media (max-width: 400px) {
    border-style: none;
  }
`;
const Form = styled.form`
  width: 200px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    border-radius: 10px;
  }
  button {
    background-color: #fa9956;
    border-style: none;
    border-radius: 10px;
    margin-top: 10px;
    color: white;
    cursor: pointer;
  }
`;

const SessionForm = (): JSX.Element => {
  return (
    <FormContainer>
      <Form>
        <label htmlFor="when">Date: </label>
        <input type={"datetime-local"} id="when" />
        <label htmlFor="where">Place: </label>
        <input type={"text"} id="where" />
        <label htmlFor="doctor">Doctor: </label>
        <input type={"text"} id="doctor" />
        <label htmlFor="patient">Patient: </label>
        <input type={"text"} id="patient" />
        <button>CREATE SESSION</button>
      </Form>
    </FormContainer>
  );
};

export default SessionForm;
