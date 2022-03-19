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

  const { id } = useParams();
  const session = useSelector((state: RootState) => state.session);

  useEffect(() => {
    dispatch(loadPatientssListThunk);
    dispatch(loadOneSessionThunk(id as string));
  }, [dispatch, id]);

  const emptyDataForm = {
    _id: session._id,
    when: session.when.split(".")[0],
    where: session.where,
    doctor: session.doctor?._id,
    patient: session.patient?._id,
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
    dispatch(updateSessionThunk(formData));
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
        <button type={"submit"}>UPDATE SESSION</button>
      </Form>
    </FormContainer>
  );
};

export default UpdateSessionForm;
