import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { createNewSessionThunk } from "../../redux/thunks/sessionsThunk";
import { loadPatientssListThunk } from "../../redux/thunks/usersThunk";

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

const SessionForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const patientsList = useSelector((state: RootState) => state.patients);

  useEffect(() => {
    dispatch(loadPatientssListThunk);
  }, [dispatch]);

  const emptyDataForm = {
    when: "",
    where: "",
    doctor: "",
    patient: "",
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
    dispatch(createNewSessionThunk(formData));
    goToSessionsPage();
    resetForm();
  };

  const navigate = useNavigate();
  const goToSessionsPage = () => {
    navigate("/sessions");
  };

  return (
    <FormContainer>
      <Form onSubmit={formSubmit}>
        <label htmlFor="when">Date: </label>
        <input
          type={"datetime-local"}
          id="when"
          value={formData.when}
          onChange={handleForm}
        />
        <label htmlFor="where">Place: </label>
        <input
          type={"text"}
          id="where"
          value={formData.where}
          onChange={handleForm}
        />
        <label htmlFor="doctor">Doctor: </label>
        <select id="doctor" value={formData.doctor} onChange={handleForm}>
          {patientsList.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <label htmlFor="patient">Patient: </label>
        <select id="patient" value={formData.patient} onChange={handleForm}>
          {patientsList.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <button
          type={"submit"}
          disabled={
            formData.patient === "" ||
            formData.doctor === "" ||
            formData.when === "" ||
            formData.where === ""
              ? true
              : false
          }
        >
          CREATE SESSION
        </button>
      </Form>
    </FormContainer>
  );
};

export default SessionForm;
