import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "../../redux/store";
import {
  loadOneSessionThunk,
  updateSessionThunk,
} from "../../redux/thunks/sessionsThunk";
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

const UpdateSessionForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const patientsList = useSelector((state: RootState) => state.patients);
  const session = useSelector((state: RootState) => state.session);
  const { id } = useParams();

  const updatableDataForm = {
    _id: session?._id as string,
    when: session?.when.split(".")[0] as string,
    where: session?.where as string,
    doctor: session?.doctor?._id as any,
    patient: session?.patient?._id as any,
  };

  const [formData, setFormData] = useState(updatableDataForm);

  useEffect(() => {
    setFormData({
      _id: session?._id as string,
      when: session?.when.split(".")[0] as string,
      where: session?.where as string,
      doctor: session?.doctor?._id as any,
      patient: session?.patient?._id as any,
    });
  }, [
    session?._id,
    session?.doctor?._id,
    session?.patient?._id,
    session?.when,
    session?.where,
  ]);

  const handleForm = (event: any) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  useEffect(() => {
    dispatch(loadOneSessionThunk(id as string));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(loadPatientssListThunk);
  }, [dispatch]);

  const formSubmit = (event: any) => {
    event.preventDefault();
    dispatch(updateSessionThunk(formData));
    setTimeout(() => {
      goToSessionsPage();
    }, 2000);
  };

  const navigate = useNavigate();
  const goToSessionsPage = () => {
    navigate("/sessions");
  };
  let filteredDoctorsList = patientsList.filter((patient) => patient.admin);
  let filteredPatientsList = patientsList.filter((patient) => !patient.admin);

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
          <option>Choose a doctor</option>
          {filteredDoctorsList.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <label htmlFor="patient">Patient: </label>
        <select id="patient" value={formData.patient} onChange={handleForm}>
          <option>Choose a patient</option>
          {filteredPatientsList.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
        <button type={"submit"}>UPDATE SESSION</button>
      </Form>
    </FormContainer>
  );
};

export default UpdateSessionForm;
