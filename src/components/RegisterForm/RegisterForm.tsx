import { useState } from "react";

import { useNavigate } from "react-router-dom";
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
  flex-direction: column;
  p {
    font-size: 11px;
    text-align: center;
    a {
      color: inherit;
    }
  }

  align-items: center;
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
  select {
    border-radius: 10px;
    option:hover {
      background-color: #f37370;
    }
  }

  button {
    background-color: #fa9956;
    border-style: none;
    border-radius: 10px;
    margin-top: 10px;
    color: white;
    cursor: pointer;
    :disabled {
      opacity: 0.5;
    }
  }
`;

const RegisterForm = (): JSX.Element => {
  const emptyDataForm = {
    name: "",
    lastname: "",
    username: "",
    password: "",
  };

  const handleForm = (event: any) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  const [formData, setFormData] = useState(emptyDataForm);

  const resetForm = () => {
    setFormData(emptyDataForm);
  };

  const formSubmit = (event: any) => {
    event.preventDefault();
    setTimeout(() => {
      goToSessionsPage();
    }, 2000);

    resetForm();
  };

  const navigate = useNavigate();
  const goToSessionsPage = () => {
    navigate("/calendar");
  };

  return (
    <FormContainer>
      <Form onSubmit={formSubmit} autoComplete={"off"}>
        <label htmlFor="username">Name: </label>
        <input
          type={"text"}
          id="name"
          value={formData.name}
          onChange={handleForm}
        />
        <label htmlFor="password">Last Name: </label>
        <input
          type={"lastname"}
          id="lastname"
          value={formData.lastname}
          onChange={handleForm}
        />

        <label htmlFor="username">Username: </label>
        <input
          type={"text"}
          id="username"
          value={formData.username}
          onChange={handleForm}
        />
        <label htmlFor="username">Password: </label>
        <input
          type={"text"}
          id="password"
          value={formData.password}
          onChange={handleForm}
        />

        <button
          type={"submit"}
          disabled={
            formData.username === "" || formData.password === "" ? true : false
          }
        >
          REGISTER
        </button>
      </Form>
      <p>
        Already have an account? click <a href="/login">HERE</a> to Log in
      </p>
    </FormContainer>
  );
};

export default RegisterForm;
