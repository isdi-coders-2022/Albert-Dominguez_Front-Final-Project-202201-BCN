import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NewSessionPage from "./pages/NewSessionPage/NewSessionPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PatientsPage from "./pages/PatientsPage/PatientsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SessionDetailPage from "./pages/SessionDetailPage/SessionDetailPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import UpdateSessionPage from "./pages/UpdateSessionPage/UpdateSessionPage";

import "react-toastify/dist/ReactToastify.css";
import { loginUserAction } from "./redux/actions/actionsCreator";
import { logoutThunk } from "./redux/thunks/usersThunk";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("UserToken");

  useEffect(() => {
    token ? dispatch(loginUserAction(true)) : dispatch(logoutThunk);
  }, [dispatch, token]);

  return (
    <div className="App">
      <Navigation />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      <Routes>
        <Route>
          <Route path="/updatesession/:id" element={<UpdateSessionPage />} />
          <Route path="/sessions/:id" element={<SessionDetailPage />} />
          <Route path="/patients" element={<PatientsPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/newsession" element={<NewSessionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
