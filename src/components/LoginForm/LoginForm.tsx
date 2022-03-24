import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginThunk } from "../../redux/thunks/usersThunk";

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

const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const emptyDataForm = {
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
    dispatch(loginThunk(formData));
    setTimeout(() => {
      goToSessionsPage();
    }, 2000);

    resetForm();
  };

  const navigate = useNavigate();
  const goToSessionsPage = () => {
    navigate("/sessions");
  };

  return (
    <FormContainer>
      <Form onSubmit={formSubmit} autoComplete={"off"}>
        <label htmlFor="username">Username: </label>
        <input
          type={"text"}
          id="username"
          value={formData.username}
          onChange={handleForm}
        />
        <label htmlFor="password">Password: </label>
        <input
          type={"password"}
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
          LOGIN
        </button>
      </Form>
      <p>
        If you want to create an account click <a href="/register">HERE</a>
      </p>
    </FormContainer>
  );
};

export default LoginForm;
